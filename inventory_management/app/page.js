'use client';

import { useState, useEffect } from 'react';
import { Box, Stack, Typography, Button, Modal, TextField, Grid } from '@mui/material';
import { firestore } from '../app/firebase'; 
import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai'; 

const genAI = new GoogleGenerativeAI("AIzaSyD8tLeg83D7ZfsXsLr25ZwX-cTzIR3Te5A");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 0.85,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

function AddItemModal({ open, handleClose, addItem, itemName, setItemName, itemQuantity, setItemQuantity }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2" color="black">
          Add Item
        </Typography>
        <Stack width="100%" direction="column" spacing={2}>
          <TextField
            id="outlined-basic-item"
            label="Item"
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            id="outlined-basic-quantity"
            label="Quantity"
            variant="outlined"
            type="number"
            fullWidth
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              addItem(itemName, itemQuantity);
              setItemName('');
              setItemQuantity('');
              handleClose();
            }}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

function RemoveItemModal({ open, handleClose, removeItem, itemName, setItemName, itemQuantity, setItemQuantity }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2" color="black">
          Remove Item
        </Typography>
        <Stack width="100%" direction="column" spacing={2}>
          <TextField
            id="outlined-basic-item"
            label="Item"
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            id="outlined-basic-quantity"
            label="Quantity"
            variant="outlined"
            type="number"
            fullWidth
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              removeItem(itemName, itemQuantity);
              setItemName('');
              setItemQuantity('');
              handleClose();
            }}
          >
            Remove
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemName, setItemName] = useState('');
  const [openAdd, setOpenAdd] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [recommendedRecipes, setRecommendedRecipes] = useState('');

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const handleOpenRemove = () => setOpenRemove(true);
  const handleCloseRemove = () => setOpenRemove(false);

  const updateInventory = async () => {
    try {
      const snapshot = query(collection(firestore, 'inventory'));
      const docs = await getDocs(snapshot);
      const inventoryList = docs.docs.map(doc => ({ name: doc.id, ...doc.data() }));
      setInventory(inventoryList);
      setFilteredInventory(inventoryList);
    } catch (error) {
      console.error('Error updating inventory:', error);
    }
  };

  useEffect(() => {
    updateInventory();
  }, []);

  const addItem = async (item, quantity) => {
    try {
      const docRef = doc(collection(firestore, 'inventory'), item);
      const docSnap = await getDoc(docRef);
      const quantityNum = parseInt(quantity, 10);
      if (docSnap.exists()) {
        const { quantity: existingQuantity } = docSnap.data();
        await setDoc(docRef, { quantity: existingQuantity + quantityNum });
      } else {
        await setDoc(docRef, { quantity: quantityNum });
      }
      await updateInventory();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const removeItem = async (item, quantity) => {
    try {
      const docRef = doc(collection(firestore, 'inventory'), item);
      const docSnap = await getDoc(docRef);
      const quantityNum = parseInt(quantity, 10);
      if (docSnap.exists()) {
        const { quantity: existingQuantity } = docSnap.data();
        if (existingQuantity <= quantityNum) {
          await deleteDoc(docRef);
        } else {
          await setDoc(docRef, { quantity: existingQuantity - quantityNum });
        }
      }
      await updateInventory();
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    const filtered = inventory.filter((item) => item.name.toLowerCase().includes(value));
    setFilteredInventory(filtered);
  };

  const generateRecipeRecommendations = async () => {
    try {
      const availableIngredients = filteredInventory.map(item => item.name);
      const prompt = `I have the following ingredients: ${availableIngredients.join(', ')}. Can you suggest some recipes I can make? For each recipe, please list:
      1. Ingredients required.
      2. Instructions.
      3. Please format it in a way that's appealing to the client.
      Additionally, if there are any ingredients I don't have, please list those as well.`;

      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(prompt);

      if (result && result.response && typeof result.response.text === 'function') {
        const recipes = await result.response.text();
        if (recipes.trim()) {
          setRecommendedRecipes(recipes);
        } else {
          setRecommendedRecipes('No recipes found based on the provided ingredients.');
        }
      } else {
        console.error('Unexpected response format:', result);
        setRecommendedRecipes('No recipes found.');
      }
    } catch (error) {
      console.error('Error generating recommendations:', error);

      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }

      setRecommendedRecipes('Error generating recommendations. Please try again later.');
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap={2}
      overflow="auto"
      padding={2}
    >
      <AddItemModal
        open={openAdd}
        handleClose={handleCloseAdd}
        addItem={addItem}
        itemName={itemName}
        setItemName={setItemName}
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
      />
      <RemoveItemModal
        open={openRemove}
        handleClose={handleCloseRemove}
        removeItem={removeItem}
        itemName={itemName}
        setItemName={setItemName}
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
      />
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={handleOpenAdd} size="large">
            Add New Item
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleOpenRemove} size="large">
            Remove Item
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="search-bar"
            label="Search Items"
            variant="outlined"
            fullWidth
            value={searchText}
            onChange={handleSearchChange}
            size="small"
          />
        </Grid>
      </Grid>
      <Box border="1px solid #333" mt={2} width="90%" height="60vh" overflow="auto">
        <Box
          width="100%"
          bgcolor="#ADD8E6"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={2}
        >
          <Typography variant="h4" color="#333" textAlign="center">
            Inventory Items
          </Typography>
        </Box>
        <Stack width="100%">
          <Stack
            direction="row"
            spacing={4}
            p={2}
            bgcolor="#f5f5f5"
            sx={{ borderBottom: '2px solid #333' }}
          >
            <Typography variant="h6" color="#333" flex="1" fontWeight="bold">
              Item
            </Typography>
            <Typography variant="h6" color="#333" flex="1" textAlign="center" fontWeight="bold">
              Quantity
            </Typography>
          </Stack>
          {filteredInventory.length === 0 ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <Typography variant="h6" color="textSecondary">
                No items found.
              </Typography>
            </Box>
          ) : (
            filteredInventory.map((item) => (
              <Stack
                key={item.name}
                direction="row"
                spacing={4}
                p={2}
                sx={{ borderBottom: '1px solid #ccc' }}
              >
                <Typography variant="h6" flex="1">
                  {item.name}
                </Typography>
                <Typography variant="h6" flex="1" textAlign="center">
                  {item.quantity}
                </Typography>
              </Stack>
            ))
          )}
        </Stack>
      </Box>
      <Box
        mt={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="90%"
        height="30vh"
        overflow="auto"
      >
        <Button
          variant="contained"
          onClick={generateRecipeRecommendations}
          disabled={filteredInventory.length === 0}
          size="large"
        >
          Generate Recipe Recommendations
        </Button>
        {recommendedRecipes && (
          <Box
            mt={2}
            width="100%"
            maxHeight="100%"
            overflow="auto"
            p={2}
            bgcolor={'#f9f9f9'}
          >
            <Typography variant="h5" mb={2}>
              Recommended Recipes:
            </Typography>
            <Typography variant="body1" whiteSpace="pre-line">
              {recommendedRecipes}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
