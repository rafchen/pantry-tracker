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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(collection(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore), \"inventory\");\n        const docs = await getDocs(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc1)=>{\n            inventoryList.push({\n                name: doc1.id,\n                ...doc1.data()\n            });\n        });\n        setInventory(inventoryList);\n    };\n    const removeItem = async (item)=>{\n        const docRef = doc(collection(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h1\",\n                children: \" Inventory Management \"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelchen/pantry-tracker/inventory_management/app/page.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this),\n            inventory.forEach((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: [\n                        item.name,\n                        item.count\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafaelchen/pantry-tracker/inventory_management/app/page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelchen/pantry-tracker/inventory_management/app/page.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZFkVGfZadB1ckxhdEVDTu3A2yMw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ2E7QUFDUjtBQUNZO0FBQ0w7QUFFNUIsU0FBU087O0lBQ3RCLE1BQUssQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzVDLE1BQUssQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNoQyxNQUFLLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFFeEMsTUFBTWEsa0JBQWtCO1FBQ3RCLE1BQU1DLFdBQVdULHlEQUFLQSxDQUFDVSxXQUFXYixnREFBU0EsR0FBRztRQUM5QyxNQUFNYyxPQUFPLE1BQU1DLFFBQVFIO1FBQzNCLE1BQU1JLGdCQUFnQixFQUFFO1FBQ3hCRixLQUFLRyxPQUFPLENBQUMsQ0FBQ0M7WUFDWkYsY0FBY0csSUFBSSxDQUFDO2dCQUNqQkMsTUFBTUYsS0FBSUcsRUFBRTtnQkFDWixHQUFHSCxLQUFJSSxJQUFJLEVBQUU7WUFDZjtRQUNGO1FBQ0FoQixhQUFhVTtJQUNmO0lBRUEsTUFBTU8sYUFBYSxPQUFNQztRQUN2QixNQUFNQyxTQUFTUCxJQUFJTCxXQUFXYixnREFBU0E7SUFDekM7SUFFQUQsZ0RBQVNBLENBQUM7UUFDUlk7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1YsMEZBQUdBOzswQkFDSiw4REFBQ0MsMEZBQVVBO2dCQUFDd0IsU0FBUTswQkFBSzs7Ozs7O1lBQ3hCckIsVUFBVVksT0FBTyxDQUFDLENBQUNPO2dCQUNoQixxQkFDQSw4REFBQ3ZCLDBGQUFHQTs7d0JBQ0h1QixLQUFLSixJQUFJO3dCQUNUSSxLQUFLRyxLQUFLOzs7Ozs7O1lBR2Y7Ozs7Ozs7QUFHSjtHQXZDd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2ZpcmVzdG9yZX0gZnJvbSAnQC9maXJlYmFzZSdcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBxdWVyeSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3RbaW52ZW50b3J5LCBzZXRJbnZlbnRvcnldID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0W29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0W2l0ZW1OYW1lLCBzZXRJdGVtTmFtZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCB1cGRhdGVJbnZlbnRvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc25hcHNob3QgPSBxdWVyeShjb2xsZWN0aW9uKGZpcmVzdG9yZSksICdpbnZlbnRvcnknKVxuICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBnZXREb2NzKHNuYXBzaG90KVxuICAgIGNvbnN0IGludmVudG9yeUxpc3QgPSBbXVxuICAgIGRvY3MuZm9yRWFjaCgoZG9jKT0+IHtcbiAgICAgIGludmVudG9yeUxpc3QucHVzaCh7XG4gICAgICAgIG5hbWU6IGRvYy5pZCxcbiAgICAgICAgLi4uZG9jLmRhdGEoKVxuICAgICAgfSlcbiAgICB9KVxuICAgIHNldEludmVudG9yeShpbnZlbnRvcnlMaXN0KVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoY29sbGVjdGlvbihmaXJlc3RvcmUsICkpXG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgdXBkYXRlSW52ZW50b3J5KClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPiBJbnZlbnRvcnkgTWFuYWdlbWVudCA8L1R5cG9ncmFwaHk+XG4gICAge2ludmVudG9yeS5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxCb3g+XG4gICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgIHtpdGVtLmNvdW50fVxuICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgIH0pfVxuICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlc3RvcmUiLCJCb3giLCJUeXBvZ3JhcGh5IiwicXVlcnkiLCJIb21lIiwiaW52ZW50b3J5Iiwic2V0SW52ZW50b3J5Iiwib3BlbiIsInNldE9wZW4iLCJpdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwidXBkYXRlSW52ZW50b3J5Iiwic25hcHNob3QiLCJjb2xsZWN0aW9uIiwiZG9jcyIsImdldERvY3MiLCJpbnZlbnRvcnlMaXN0IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJuYW1lIiwiaWQiLCJkYXRhIiwicmVtb3ZlSXRlbSIsIml0ZW0iLCJkb2NSZWYiLCJ2YXJpYW50IiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});