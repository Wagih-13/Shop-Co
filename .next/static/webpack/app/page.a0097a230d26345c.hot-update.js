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

/***/ "(app-pages-browser)/./app/components/productCard/ProductCard.tsx":
/*!****************************************************!*\
  !*** ./app/components/productCard/ProductCard.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoMdHeartEmpty_react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdHeartEmpty!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoHeart_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoHeart!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaStar!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _productCardStyle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productCardStyle.scss */ \"(app-pages-browser)/./app/components/productCard/productCardStyle.scss\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _skeleton_SkeletonLoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skeleton/SkeletonLoder */ \"(app-pages-browser)/./app/components/skeleton/SkeletonLoder.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProductCard = (param)=>{\n    let { index, product } = param;\n    _s();\n    const [isFavorite, setIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const favoriteIconRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isDataLoaded = true; // TODO : this line for testing only\n    const handleToggleFavorite = ()=>{\n        setIsFavorite((prev)=>!prev);\n    };\n    const handleGoToProduct = (e)=>{\n        if (favoriteIconRef.current && favoriteIconRef.current.contains(e.target)) return;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isDataLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                onClick: (e)=>handleGoToProduct(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"image\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                                className: \"actionsBar\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"favoritIcon\",\n                                    ref: favoriteIconRef,\n                                    onClick: handleToggleFavorite,\n                                    children: isFavorite ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoHeart_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoHeart, {}, void 0, false, {\n                                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 31\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdHeartEmpty_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoMdHeartEmpty, {}, void 0, false, {\n                                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 45\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"addToCartButton\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Add To Cart\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                width: 295,\n                                height: 300,\n                                src: \"\".concat(isHovered ? \"/images/image 2.webp\" : \"/images/image 2.webp\"),\n                                alt: \"product\",\n                                onM: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: product.title.split(\" \").slice(0, 3).join(\" \")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.description.split(\" \").slice(0, 6).join(\" \")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaStar, {}, void 0, false, {\n                                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaStar, {}, void 0, false, {\n                                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price\",\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                lineNumber: 38,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skeleton_SkeletonLoder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProductCard, \"/alXgYeUm5yhPSU9Og+saZpRraM=\");\n_c = ProductCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFdUU7QUFDdkI7QUFDTjtBQUNGO0FBQ1A7QUFDRjtBQUN1QjtBQVF0RCxNQUFNUSxjQUEwQztRQUFDLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFOztJQUNqRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQVU7SUFDdEQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU1hLGtCQUFrQmQsNkNBQU1BLENBQWlCO0lBQy9DLE1BQU1lLGVBQWUsTUFBTSxvQ0FBb0M7SUFDL0QsTUFBTUMsdUJBQXVCO1FBQzNCTCxjQUFjLENBQUNNLE9BQVMsQ0FBQ0E7SUFDM0I7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsSUFDRUwsZ0JBQWdCTSxPQUFPLElBQ3ZCTixnQkFBZ0JNLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixFQUFFRyxNQUFNLEdBRXpDO0lBQ0o7SUFFQSxxQkFDRTtrQkFDR1AsNkJBQ0M7c0JBQ0UsNEVBQUNRO2dCQUVDQyxXQUFVO2dCQUNWQyxTQUFTLENBQUNOLElBQU1ELGtCQUFrQkM7O2tDQUVsQyw4REFBQ0k7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBTUYsV0FBVTswQ0FDakIsNEVBQUNEO29DQUNDQyxXQUFVO29DQUNWRyxLQUFLYjtvQ0FDTFcsU0FBU1Q7OENBRVJOLDJCQUFhLDhEQUFDUCxtRkFBT0E7Ozs7a0VBQU0sOERBQUNELGdHQUFjQTs7Ozs7Ozs7Ozs7Ozs7OzBDQUk3Qyw4REFBQ3FCO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSTs4Q0FBTzs7Ozs7Ozs7Ozs7MENBRVYsOERBQUN2QixrREFBS0E7Z0NBQ0p3QixPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFLLEdBQStELE9BQTVEbkIsWUFBWSx5QkFBeUI7Z0NBQzdDb0IsS0FBSTtnQ0FDSkMsR0FBRzs7Ozs7Ozs7Ozs7O2tDQUdQLDhEQUFDVjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNVOzBDQUFJekIsUUFBUTBCLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEtBQUssQ0FBQyxHQUFHLEdBQUdDLElBQUksQ0FBQzs7Ozs7OzBDQUMvQyw4REFBQ0M7MENBQUc5QixRQUFRK0IsV0FBVyxDQUFDSixLQUFLLENBQUMsS0FBS0MsS0FBSyxDQUFDLEdBQUcsR0FBR0MsSUFBSSxDQUFDOzs7Ozs7MENBQ3BELDhEQUFDRztnQ0FBS2pCLFdBQVU7O2tEQUNkLDhEQUFDcEIsZ0ZBQU1BOzs7OztrREFDUCw4REFBQ0EsZ0ZBQU1BOzs7Ozs7Ozs7OzswQ0FFVCw4REFBQ21CO2dDQUFJQyxXQUFVOzBDQUFTZixRQUFRaUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUszQyw4REFBQ3BDLCtEQUFhQTs7Ozs7O0FBSXRCO0dBaEVNQztLQUFBQTtBQWtFTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC50c3g/Y2JlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW9NZEhlYXJ0RW1wdHkgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgSW9IZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBcIi4vcHJvZHVjdENhcmRTdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgU2tlbGV0b25Mb2RlciBmcm9tIFwiLi4vc2tlbGV0b24vU2tlbGV0b25Mb2RlclwiO1xyXG5cclxuXHJcbnR5cGUgUHJvZHVjdENhcmRQcm9wcyA9IHtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIHByb2R1Y3Q/OiBhbnk7XHJcbn07XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZDogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoeyBpbmRleCwgcHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3QgW2lzRmF2b3JpdGUsIHNldElzRmF2b3JpdGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgZmF2b3JpdGVJY29uUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBpc0RhdGFMb2FkZWQgPSB0cnVlOyAvLyBUT0RPIDogdGhpcyBsaW5lIGZvciB0ZXN0aW5nIG9ubHlcclxuICBjb25zdCBoYW5kbGVUb2dnbGVGYXZvcml0ZSA9ICgpID0+IHtcclxuICAgIHNldElzRmF2b3JpdGUoKHByZXYpID0+ICFwcmV2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHb1RvUHJvZHVjdCA9IChlOiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBmYXZvcml0ZUljb25SZWYuY3VycmVudCAmJlxyXG4gICAgICBmYXZvcml0ZUljb25SZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKVxyXG4gICAgKVxyXG4gICAgICByZXR1cm47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpc0RhdGFMb2FkZWQgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVHb1RvUHJvZHVjdChlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJhY3Rpb25zQmFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmF2b3JpdEljb25cIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtmYXZvcml0ZUljb25SZWZ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGVGYXZvcml0ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXNGYXZvcml0ZSA/IDxJb0hlYXJ0IC8+IDogPElvTWRIZWFydEVtcHR5IC8+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZFRvQ2FydEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5BZGQgVG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezI5NX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtpc0hvdmVyZWQgPyBcIi9pbWFnZXMvaW1hZ2UgMi53ZWJwXCIgOiBcIi9pbWFnZXMvaW1hZ2UgMi53ZWJwXCJ9YH1cclxuICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgb25NXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxoND57cHJvZHVjdC50aXRsZS5zcGxpdChcIiBcIikuc2xpY2UoMCwgMykuam9pbihcIiBcIil9PC9oND5cclxuICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbi5zcGxpdChcIiBcIikuc2xpY2UoMCwgNikuam9pbihcIiBcIil9PC9wPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+e3Byb2R1Y3QucHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFNrZWxldG9uTG9kZXIgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJJb01kSGVhcnRFbXB0eSIsIklvSGVhcnQiLCJGYVN0YXIiLCJJbWFnZSIsIlNrZWxldG9uTG9kZXIiLCJQcm9kdWN0Q2FyZCIsImluZGV4IiwicHJvZHVjdCIsImlzRmF2b3JpdGUiLCJzZXRJc0Zhdm9yaXRlIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiZmF2b3JpdGVJY29uUmVmIiwiaXNEYXRhTG9hZGVkIiwiaGFuZGxlVG9nZ2xlRmF2b3JpdGUiLCJwcmV2IiwiaGFuZGxlR29Ub1Byb2R1Y3QiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImFzaWRlIiwicmVmIiwiYnV0dG9uIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJvbk0iLCJoNCIsInRpdGxlIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJwIiwiZGVzY3JpcHRpb24iLCJzcGFuIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/productCard/ProductCard.tsx\n"));

/***/ })

});