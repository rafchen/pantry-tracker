'use client';

import { useState, useEffect } from 'react';
import { Box, Stack, Typography, Button, Modal, TextField, Grid } from '@mui/material';
import { firestore } from '../app/firebase';
import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { debounce } from 'lodash';
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

// Initialize Google Generative AI
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

const style = {
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

// Modal Component for Adding Items
function AddItemModal({ open, handleClose, addItem, itemName, setItemName }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" color="black">
          Add Item
        </Typography>
        <Stack width="100%" direction={'row'} spacing={2}>
          <TextField
            id="outlined-basic"
            label="Item"
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={() => {
              addItem(itemName);
              setItemName('');
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

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [searchText, setSearchText] = useState('');
  const [recommendedRecipes, setRecommendedRecipes] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const addItem = async (item) => {
    try {
      const docRef = doc(collection(firestore, 'inventory'), item);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { quantity } = docSnap.data();
        await setDoc(docRef, { quantity: quantity + 1 });
      } else {
        await setDoc(docRef, { quantity: 1 });
      }
      await updateInventory();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const removeItem = async (item) => {
    try {
      const docRef = doc(collection(firestore, 'inventory'), item);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { quantity } = docSnap.data();
        if (quantity === 1) {
          await deleteDoc(docRef);
        } else {
          await setDoc(docRef, { quantity: quantity - 1 });
        }
      }
      await updateInventory();
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleSearchChange = debounce((event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    const filtered = inventory.filter((item) => item.name.toLowerCase().startsWith(value));
    setFilteredInventory(filtered);
  }, 300); // Adjust debounce delay as needed

  const generateRecipeRecommendations = async () => {
    try {
      // Define the ingredients you have and need to get
      const availableIngredients = filteredInventory.map(item => item.name);
      const prompt = `I have the following ingredients: ${availableIngredients.join(', ')}. Can you suggest some recipes I can make? For each recipe, please list:
      1. Ingredients required.
      2. Instructions.
      Additionally, if there are any ingredients I don't have, please list those as well.`;
  
      console.log('Generating recipes with ingredients:', availableIngredients);
  
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
  
      console.log('Chat session started');
  
      const result = await chatSession.sendMessage(prompt);
      console.log('API response received:', result);
  
      if (result && result.response && typeof result.response.text === 'function') {
        const recipes = result.response.text();
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
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={2}
    >
      <AddItemModal
        open={open}
        handleClose={handleClose}
        addItem={addItem}
        itemName={itemName}
        setItemName={setItemName}
      />
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={handleOpen}>
            Add New Item
          </Button>
        </Grid>
        <Grid item>
          <TextField
            id="search-bar"
            label="Search Items"
            variant="outlined"
            fullWidth
            value={searchText}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>
      <Box border={'1px solid #333'} mt={2}>
        <Box
          width="800px"
          bgcolor={'#ADD8E6'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          p={2}
        >
          <Typography variant={'h4'} color={'#333'} textAlign={'center'}>
            Inventory Items
          </Typography>
        </Box>
        <Stack width="800px" height="600px" overflow={'auto'}>
          {filteredInventory.length === 0 ? (
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height="100%">
              <Typography variant="h6" color="textSecondary">
                No items found.
              </Typography>
            </Box>
          ) : (
            filteredInventory.map((item) => (
              <Stack
                key={item.name}
                direction={'row'}
                justifyContent={'space-between'}
                p={2}
                sx={{ borderBottom: '1px solid #ccc' }}
              >
                <Typography variant={'h6'}>{item.name}</Typography>
                <Stack direction={'row'} spacing={2}>
                  <Button
                    variant="outlined"
                    onClick={() => removeItem(item.name)}
                  >
                    Remove
                  </Button>
                  <Typography variant={'h6'}>{item.quantity}</Typography>
                  <Button variant="outlined" onClick={() => addItem(item.name)}>
                    Add
                  </Button>
                </Stack>
              </Stack>
            ))
          )}
        </Stack>
      </Box>
      <Box
        mt={2}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        width={'100%'}
      >
        <Button
          variant="contained"
          onClick={generateRecipeRecommendations}
          disabled={filteredInventory.length === 0}
        >
          Generate Recipe Recommendations
        </Button>
        {recommendedRecipes && (
          <Box
            width="800px"
            bgcolor={'#FFFAFA'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            p={2}
            mt={2}
            border={'1px solid #ccc'}
          >
            <Typography variant={'h6'} color={'#333'}>
              Recipe Recommendations:
            </Typography>
            <Typography variant={'body1'} color={'#333'}>
              {recommendedRecipes}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
