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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoMdHeartEmpty_react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdHeartEmpty!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoHeart_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoHeart!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaStar!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _productCardStyle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productCardStyle.scss */ \"(app-pages-browser)/./app/components/productCard/productCardStyle.scss\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _skeleton_SkeletonLoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skeleton/SkeletonLoder */ \"(app-pages-browser)/./app/components/skeleton/SkeletonLoder.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ProductCard = (param)=>{\n    let { index, product } = param;\n    _s();\n    const [isFavorite, setIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const favoriteIconRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isDataLoaded = true; // TODO : this line for testing only\n    const handleToggleFavorite = ()=>{\n        setIsFavorite((prev)=>!prev);\n    };\n    const handleGoToProduct = (e)=>{\n        if (favoriteIconRef.current && favoriteIconRef.current.contains(e.target)) return;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isDataLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    y: 50\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0,\n                    x: 0\n                },\n                exit: {\n                    opacity: 0,\n                    y: 50\n                },\n                transition: {\n                    duration: 0.3,\n                    type: \"tween\"\n                },\n                viewport: {\n                    once: true,\n                    amount: 0.7\n                },\n                className: \"card\",\n                onClick: (e)=>handleGoToProduct(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"image\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"favoritIcon\",\n                                ref: favoriteIconRef,\n                                onClick: handleToggleFavorite,\n                                children: isFavorite ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoHeart_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoHeart, {}, void 0, false, {\n                                    fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 31\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdHeartEmpty_react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoMdHeartEmpty, {}, void 0, false, {\n                                    fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 45\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                width: 295,\n                                height: 300,\n                                src: product === null || product === void 0 ? void 0 : product.image,\n                                alt: \"product\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: product.title.split(\" \").slice(0, 3).join(\" \")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.description.split(\" \").slice(0, 6).join(\" \")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaStar, {}, void 0, false, {\n                                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaStar, {}, void 0, false, {\n                                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price\",\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skeleton_SkeletonLoder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\Ahmed\\\\Self Learning\\\\Next.js\\\\projects\\\\Shop.Co\\\\app\\\\components\\\\productCard\\\\ProductCard.tsx\",\n            lineNumber: 73,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProductCard, \"KFSgjJSyhrVJECt0eOxT2+CULrA=\");\n_c = ProductCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ3ZCO0FBQ047QUFDRjtBQUNQO0FBQ0Y7QUFDdUI7QUFDZjtBQU92QyxNQUFNUyxjQUEwQztRQUFDLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFOztJQUNqRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQVU7SUFDdEQsTUFBTVksa0JBQWtCYiw2Q0FBTUEsQ0FBaUI7SUFDL0MsTUFBTWMsZUFBZSxNQUFNLG9DQUFvQztJQUMvRCxNQUFNQyx1QkFBdUI7UUFDM0JILGNBQWMsQ0FBQ0ksT0FBUyxDQUFDQTtJQUMzQjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDQztRQUN6QixJQUNFTCxnQkFBZ0JNLE9BQU8sSUFDdkJOLGdCQUFnQk0sT0FBTyxDQUFDQyxRQUFRLENBQUNGLEVBQUVHLE1BQU0sR0FFekM7SUFDSjtJQUVBLHFCQUNFO2tCQUNHUCw2QkFDQztzQkFDRSw0RUFBQ1AsaURBQU1BLENBQUNlLEdBQUc7Z0JBQ1RDLFNBQVM7b0JBQUVDLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUc7Z0JBQzdCQyxhQUFhO29CQUFFRixTQUFTO29CQUFHQyxHQUFHO29CQUFHRSxHQUFHO2dCQUFFO2dCQUN0Q0MsTUFBTTtvQkFBRUosU0FBUztvQkFBR0MsR0FBRztnQkFBRztnQkFDMUJJLFlBQVk7b0JBQUVDLFVBQVU7b0JBQUtDLE1BQU07Z0JBQU87Z0JBQzFDQyxVQUFVO29CQUFFQyxNQUFNO29CQUFNQyxRQUFRO2dCQUFJO2dCQUNwQ0MsV0FBVTtnQkFDVkMsU0FBUyxDQUFDbEIsSUFBTUQsa0JBQWtCQzs7a0NBRWxDLDhEQUFDSTt3QkFBSWEsV0FBVTs7MENBQ2IsOERBQUNiO2dDQUNDYSxXQUFVO2dDQUNWRSxLQUFLeEI7Z0NBQ0x1QixTQUFTckI7MENBRVJKLDJCQUFhLDhEQUFDUixtRkFBT0E7Ozs7OERBQU0sOERBQUNELGdHQUFjQTs7Ozs7Ozs7OzswQ0FFN0MsOERBQUNHLGtEQUFLQTtnQ0FDSmlDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEdBQUcsRUFBRTlCLG9CQUFBQSw4QkFBQUEsUUFBUytCLEtBQUs7Z0NBQ25CQyxLQUFJOzs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNwQjt3QkFBSWEsV0FBVTs7MENBQ2IsOERBQUNROzBDQUFJakMsUUFBUWtDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEtBQUssQ0FBQyxHQUFHLEdBQUdDLElBQUksQ0FBQzs7Ozs7OzBDQUMvQyw4REFBQ0M7MENBQUd0QyxRQUFRdUMsV0FBVyxDQUFDSixLQUFLLENBQUMsS0FBS0MsS0FBSyxDQUFDLEdBQUcsR0FBR0MsSUFBSSxDQUFDOzs7Ozs7MENBQ3BELDhEQUFDRztnQ0FBS2YsV0FBVTs7a0RBQ2QsOERBQUMvQixnRkFBTUE7Ozs7O2tEQUNQLDhEQUFDQSxnRkFBTUE7Ozs7Ozs7Ozs7OzBDQUVULDhEQUFDa0I7Z0NBQUlhLFdBQVU7MENBQVN6QixRQUFReUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUszQyw4REFBQzdDLCtEQUFhQTs7Ozs7O0FBSXRCO0dBNURNRTtLQUFBQTtBQThETixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9wcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC50c3g/Y2JlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW9NZEhlYXJ0RW1wdHkgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgSW9IZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBcIi4vcHJvZHVjdENhcmRTdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgU2tlbGV0b25Mb2RlciBmcm9tIFwiLi4vc2tlbGV0b24vU2tlbGV0b25Mb2RlclwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxudHlwZSBQcm9kdWN0Q2FyZFByb3BzID0ge1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgcHJvZHVjdD86IGFueTtcclxufTtcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXJkOiBSZWFjdC5GQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7IGluZGV4LCBwcm9kdWN0IH0pID0+IHtcclxuICBjb25zdCBbaXNGYXZvcml0ZSwgc2V0SXNGYXZvcml0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgZmF2b3JpdGVJY29uUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBpc0RhdGFMb2FkZWQgPSB0cnVlOyAvLyBUT0RPIDogdGhpcyBsaW5lIGZvciB0ZXN0aW5nIG9ubHlcclxuICBjb25zdCBoYW5kbGVUb2dnbGVGYXZvcml0ZSA9ICgpID0+IHtcclxuICAgIHNldElzRmF2b3JpdGUoKHByZXYpID0+ICFwcmV2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHb1RvUHJvZHVjdCA9IChlOiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBmYXZvcml0ZUljb25SZWYuY3VycmVudCAmJlxyXG4gICAgICBmYXZvcml0ZUljb25SZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKVxyXG4gICAgKVxyXG4gICAgICByZXR1cm47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpc0RhdGFMb2FkZWQgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cclxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCwgeDogMCB9fVxyXG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgdHlwZTogXCJ0d2VlblwifX1cclxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjcgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVHb1RvUHJvZHVjdChlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhdm9yaXRJY29uXCJcclxuICAgICAgICAgICAgICAgIHJlZj17ZmF2b3JpdGVJY29uUmVmfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlRmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2lzRmF2b3JpdGUgPyA8SW9IZWFydCAvPiA6IDxJb01kSGVhcnRFbXB0eSAvPn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyOTV9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdD8uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGg0Pntwcm9kdWN0LnRpdGxlLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAzKS5qb2luKFwiIFwiKX08L2g0PlxyXG4gICAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9uLnNwbGl0KFwiIFwiKS5zbGljZSgwLCA2KS5qb2luKFwiIFwiKX08L3A+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8RmFTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICA8RmFTdGFyIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj57cHJvZHVjdC5wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFNrZWxldG9uTG9kZXIgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJJb01kSGVhcnRFbXB0eSIsIklvSGVhcnQiLCJGYVN0YXIiLCJJbWFnZSIsIlNrZWxldG9uTG9kZXIiLCJtb3Rpb24iLCJQcm9kdWN0Q2FyZCIsImluZGV4IiwicHJvZHVjdCIsImlzRmF2b3JpdGUiLCJzZXRJc0Zhdm9yaXRlIiwiZmF2b3JpdGVJY29uUmVmIiwiaXNEYXRhTG9hZGVkIiwiaGFuZGxlVG9nZ2xlRmF2b3JpdGUiLCJwcmV2IiwiaGFuZGxlR29Ub1Byb2R1Y3QiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwid2hpbGVJblZpZXciLCJ4IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicmVmIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZSIsImFsdCIsImg0IiwidGl0bGUiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsInAiLCJkZXNjcmlwdGlvbiIsInNwYW4iLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/productCard/ProductCard.tsx\n"));

/***/ })

});