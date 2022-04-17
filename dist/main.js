/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createHomeTab = () => {
    const main = document.getElementById("main");
    while(main.hasChildNodes()){
        main.removeChild(main.lastChild)
    }
    console.log(main.childNodes);

    let intro = document.createElement("div");
    intro.classList.add("intro");
    intro.textContent = "Welcome to...";
    main.appendChild(intro);

    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "The blissful coder";
    main.appendChild(title);

    let msg = document.createElement("div");
    msg.classList.add("message");
    msg.textContent = "The best pizzas for improving productivity while coding some weird task ordered by your ignorant boss";
    main.appendChild(msg);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeTab);

/***/ }),

/***/ "./src/modules/structure.js":
/*!**********************************!*\
  !*** ./src/modules/structure.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createContentInside = () => {
    let contentInside = document.createElement("div");
    contentInside.classList.add("content-inside");
    return contentInside;
}

const createHeader = () => {
    let header = document.createElement("header");
    header.setAttribute("id","header");

    let homeTab = document.createElement("div");
    homeTab.classList.add("tab");
    homeTab.classList.add("home-btn");
    homeTab.textContent = "Home"
    header.appendChild(homeTab);

    let menuTab = document.createElement("div");
    menuTab.classList.add("tab");
    menuTab.classList.add("menu-btn");
    menuTab.textContent = "Menu";
    header.appendChild(menuTab);

    let contactTab = document.createElement("div");
    contactTab.classList.add("tab");
    contactTab.classList.add("contact-btn");
    contactTab.textContent = "Contact";
    header.appendChild(contactTab);

    return header;
}

const createMain = () => {
    let main = document.createElement("main");
    main.setAttribute("id","main");

    return main
}

const createFooter = () => {
    let footer = document.createElement("footer");
    footer.setAttribute("id","footer");

    let msg = document.createElement("div");
    msg.textContent = "Made in BCN by santipu_";
    footer.appendChild(msg);

    return footer
}

const createStructure = () => {
    const content = document.getElementById("content");

    let header = createHeader();
    let main = createMain();
    let footer = createFooter();
    let contentInside = createContentInside();

    contentInside.appendChild(header);
    contentInside.appendChild(main);
    contentInside.appendChild(footer);

    content.appendChild(contentInside);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStructure);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/structure */ "./src/modules/structure.js");





const setEventListeners = () => {
    const homeBtn = document.querySelector(".home-btn");

    homeBtn.addEventListener("click",_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])    


}

window.addEventListener("load", () => {
    ;(0,_modules_structure__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    setEventListeners();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDeEI1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7OztVQ2pFOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTDJDO0FBQ087OztBQUdsRDtBQUNBOztBQUVBLHFDQUFxQyxxREFBYTs7O0FBR2xEOztBQUVBO0FBQ0EsSUFBSSwrREFBZTtBQUNuQixJQUFJLHlEQUFhO0FBQ2pCO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY3JlYXRlSG9tZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIHdoaWxlKG1haW4uaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZClcbiAgICB9XG4gICAgY29uc29sZS5sb2cobWFpbi5jaGlsZE5vZGVzKTtcblxuICAgIGxldCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xuICAgIGludHJvLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvLi4uXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbnRybyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIGJsaXNzZnVsIGNvZGVyXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBsZXQgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtc2cuY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2VcIik7XG4gICAgbXNnLnRleHRDb250ZW50ID0gXCJUaGUgYmVzdCBwaXp6YXMgZm9yIGltcHJvdmluZyBwcm9kdWN0aXZpdHkgd2hpbGUgY29kaW5nIHNvbWUgd2VpcmQgdGFzayBvcmRlcmVkIGJ5IHlvdXIgaWdub3JhbnQgYm9zc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobXNnKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lVGFiOyIsIlxuY29uc3QgY3JlYXRlQ29udGVudEluc2lkZSA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudEluc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudEluc2lkZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1pbnNpZGVcIik7XG4gICAgcmV0dXJuIGNvbnRlbnRJbnNpZGU7XG59XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImhlYWRlclwiKTtcblxuICAgIGxldCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuXG4gICAgbGV0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgICBtZW51VGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gICAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ0blwiKTtcbiAgICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1haW5cIik7XG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJmb290ZXJcIik7XG5cbiAgICBsZXQgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtc2cudGV4dENvbnRlbnQgPSBcIk1hZGUgaW4gQkNOIGJ5IHNhbnRpcHVfXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKG1zZyk7XG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmNvbnN0IGNyZWF0ZVN0cnVjdHVyZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgbGV0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGxldCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGxldCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBsZXQgY29udGVudEluc2lkZSA9IGNyZWF0ZUNvbnRlbnRJbnNpZGUoKTtcblxuICAgIGNvbnRlbnRJbnNpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50SW5zaWRlLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRlbnRJbnNpZGUuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEluc2lkZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0cnVjdHVyZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IGNyZWF0ZUhvbWVUYWIgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgY3JlYXRlU3RydWN0dXJlIGZyb20gXCIuL21vZHVsZXMvc3RydWN0dXJlXCI7XG5cblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idG5cIik7XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNyZWF0ZUhvbWVUYWIpICAgIFxuXG5cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBjcmVhdGVTdHJ1Y3R1cmUoKTtcbiAgICBjcmVhdGVIb21lVGFiKCk7XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==