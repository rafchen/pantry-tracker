"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(collection(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore), \"inventory\");\n        const docs = await getDocs(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc)=>{\n            inventoryList.push({\n                name: doc.id,\n                ...doc.data()\n            });\n        });\n        setInventory(inventoryList);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h1\",\n                children: \" Inventory Management \"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelchen/pantry-tracker/inventory_management/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this),\n            inventory.forEach(item)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelchen/pantry-tracker/inventory_management/app/page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZFkVGfZadB1ckxhdEVDTu3A2yMw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ2E7QUFDUjtBQUNZO0FBQ0w7QUFFNUIsU0FBU087O0lBQ3RCLE1BQUssQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzVDLE1BQUssQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNoQyxNQUFLLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFFeEMsTUFBTWEsa0JBQWtCO1FBQ3RCLE1BQU1DLFdBQVdULHlEQUFLQSxDQUFDVSxXQUFXYixnREFBU0EsR0FBRztRQUM5QyxNQUFNYyxPQUFPLE1BQU1DLFFBQVFIO1FBQzNCLE1BQU1JLGdCQUFnQixFQUFFO1FBQ3hCRixLQUFLRyxPQUFPLENBQUMsQ0FBQ0M7WUFDWkYsY0FBY0csSUFBSSxDQUFDO2dCQUNqQkMsTUFBTUYsSUFBSUcsRUFBRTtnQkFDWixHQUFHSCxJQUFJSSxJQUFJLEVBQUU7WUFDZjtRQUNGO1FBQ0FoQixhQUFhVTtJQUNmO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDViwwRkFBR0E7OzBCQUNKLDhEQUFDQywwRkFBVUE7Z0JBQUNxQixTQUFROzBCQUFLOzs7Ozs7WUFFdkJsQixVQUFVWSxPQUFPLENBQUVPOzs7Ozs7O0FBSXpCO0dBOUJ3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ZmlyZXN0b3JlfSBmcm9tICdAL2ZpcmViYXNlJ1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdFtpbnZlbnRvcnksIHNldEludmVudG9yeV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3Rbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3RbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IHVwZGF0ZUludmVudG9yeSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IHF1ZXJ5KGNvbGxlY3Rpb24oZmlyZXN0b3JlKSwgJ2ludmVudG9yeScpXG4gICAgY29uc3QgZG9jcyA9IGF3YWl0IGdldERvY3Moc25hcHNob3QpXG4gICAgY29uc3QgaW52ZW50b3J5TGlzdCA9IFtdXG4gICAgZG9jcy5mb3JFYWNoKChkb2MpPT4ge1xuICAgICAgaW52ZW50b3J5TGlzdC5wdXNoKHtcbiAgICAgICAgbmFtZTogZG9jLmlkLFxuICAgICAgICAuLi5kb2MuZGF0YSgpXG4gICAgICB9KVxuICAgIH0pXG4gICAgc2V0SW52ZW50b3J5KGludmVudG9yeUxpc3QpXG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgdXBkYXRlSW52ZW50b3J5KClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPiBJbnZlbnRvcnkgTWFuYWdlbWVudCA8L1R5cG9ncmFwaHk+XG4gICAge1xuICAgICAgaW52ZW50b3J5LmZvckVhY2goKGl0ZW0pKVxuICAgIH1cbiAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiQm94IiwiVHlwb2dyYXBoeSIsInF1ZXJ5IiwiSG9tZSIsImludmVudG9yeSIsInNldEludmVudG9yeSIsIm9wZW4iLCJzZXRPcGVuIiwiaXRlbU5hbWUiLCJzZXRJdGVtTmFtZSIsInVwZGF0ZUludmVudG9yeSIsInNuYXBzaG90IiwiY29sbGVjdGlvbiIsImRvY3MiLCJnZXREb2NzIiwiaW52ZW50b3J5TGlzdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwibmFtZSIsImlkIiwiZGF0YSIsInZhcmlhbnQiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});