/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createContactTab = () => {
    const main = document.getElementById("main");

    let contactTitle = document.createElement("div");
    contactTitle.classList.add("contact-title");
    contactTitle.textContent = "Do you still have questions?";

    let contactMessage = document.createElement("div");
    contactMessage.classList.add("contact-msg");
    contactMessage.textContent = "Coders are shy? BULLSHIT. Feel free to contact us and we'll surely have a nice conversation";

    let phoneNumber = document.createElement("div");
    phoneNumber.classList.add("number");
    phoneNumber.innerHTML = '<i class="fa-brands fa-whatsapp"></i>627993564';

    let email = document.createElement("div");
    email.classList.add("email");
    email.innerHTML = '<i class="fa-solid fa-envelope"></i>blissfulcoder@gmail.com';

    let address = document.createElement("div");
    address.classList.add("address");
    address.innerHTML = '<i class="fa-solid fa-location-pin"></i>Mallorca 401, 08013 Barcelona, Spain'

    let contactWays = document.createElement("div");
    contactWays.classList.add("contact-ways");
    contactWays.appendChild(phoneNumber);
    contactWays.appendChild(email);
    contactWays.appendChild(address);
    
    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactMessage);
    contactContainer.appendChild(contactWays);

    main.appendChild(contactContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactTab);

/***/ }),

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

    let intro = document.createElement("div");
    intro.classList.add("home-intro");
    intro.textContent = "Welcome to...";

    let title = document.createElement("div");
    title.classList.add("home-title");
    title.textContent = "The blissful coder";

    let msg = document.createElement("div");
    msg.classList.add("home-message");
    msg.textContent = "The best pizzas for improving productivity while coding some weird task ordered by your ignorant boss";

    let homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    homeContainer.appendChild(intro);
    homeContainer.appendChild(title);
    homeContainer.appendChild(msg);

    main.appendChild(homeContainer);

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
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");

// TO-DO list:
//   - create menu display when clicking menu tab
//   - make the buttons move up a little when hovering and add a line at their bottom when active








// const clearContent = () => {
//     const main = document.getElementById("main");
//     while(main.hasChildNodes()){
//         main.removeChild(main.lastChild)
//     }
// }


// const setEventListeners = () => {
//     const homeBtn = document.querySelector(".home-btn");
//     const menuBtn = document.querySelector(".menu-btn");
//     const contactBtn = document.querySelector(".contact-btn");

//     homeBtn.addEventListener("click", () => {
//         clearContent();
//         createHomeTab();
//     });
//     //

//     //
//     contactBtn.addEventListener("click", () => {
//         clearContent();
//         createContactTab();
//     });
// }

// window.addEventListener("load", () => {
//     createStructure();
//     createHomeTab();
//     setEventListeners();
// });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDekI1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7OztVQ2pFOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7OztBQUkyQztBQUNPO0FBQ0Q7OztBQUdqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY3JlYXRlQ29udGFjdFRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gICAgbGV0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRpdGxlXCIpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiRG8geW91IHN0aWxsIGhhdmUgcXVlc3Rpb25zP1wiO1xuXG4gICAgbGV0IGNvbnRhY3RNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1tc2dcIik7XG4gICAgY29udGFjdE1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkNvZGVycyBhcmUgc2h5PyBCVUxMU0hJVC4gRmVlbCBmcmVlIHRvIGNvbnRhY3QgdXMgYW5kIHdlJ2xsIHN1cmVseSBoYXZlIGEgbmljZSBjb252ZXJzYXRpb25cIjtcblxuICAgIGxldCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZChcIm51bWJlclwiKTtcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtd2hhdHNhcHBcIj48L2k+NjI3OTkzNTY0JztcblxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZChcImVtYWlsXCIpO1xuICAgIGVtYWlsLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVudmVsb3BlXCI+PC9pPmJsaXNzZnVsY29kZXJAZ21haWwuY29tJztcblxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tcGluXCI+PC9pPk1hbGxvcmNhIDQwMSwgMDgwMTMgQmFyY2Vsb25hLCBTcGFpbidcblxuICAgIGxldCBjb250YWN0V2F5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFdheXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtd2F5c1wiKTtcbiAgICBjb250YWN0V2F5cy5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgY29udGFjdFdheXMuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGNvbnRhY3RXYXlzLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIFxuICAgIGxldCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TWVzc2FnZSk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0V2F5cyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0VGFiOyIsIlxuY29uc3QgY3JlYXRlSG9tZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gICAgbGV0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbnRyb1wiKTtcbiAgICBpbnRyby50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0by4uLlwiO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIGJsaXNzZnVsIGNvZGVyXCI7XG5cbiAgICBsZXQgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtc2cuY2xhc3NMaXN0LmFkZChcImhvbWUtbWVzc2FnZVwiKTtcbiAgICBtc2cudGV4dENvbnRlbnQgPSBcIlRoZSBiZXN0IHBpenphcyBmb3IgaW1wcm92aW5nIHByb2R1Y3Rpdml0eSB3aGlsZSBjb2Rpbmcgc29tZSB3ZWlyZCB0YXNrIG9yZGVyZWQgYnkgeW91ciBpZ25vcmFudCBib3NzXCI7XG5cbiAgICBsZXQgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250YWluZXJcIik7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRybyk7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtc2cpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lVGFiOyIsIlxuY29uc3QgY3JlYXRlQ29udGVudEluc2lkZSA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudEluc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudEluc2lkZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1pbnNpZGVcIik7XG4gICAgcmV0dXJuIGNvbnRlbnRJbnNpZGU7XG59XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImhlYWRlclwiKTtcblxuICAgIGxldCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuXG4gICAgbGV0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgICBtZW51VGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gICAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ0blwiKTtcbiAgICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1haW5cIik7XG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJmb290ZXJcIik7XG5cbiAgICBsZXQgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtc2cudGV4dENvbnRlbnQgPSBcIk1hZGUgaW4gQkNOIGJ5IHNhbnRpcHVfXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKG1zZyk7XG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmNvbnN0IGNyZWF0ZVN0cnVjdHVyZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgbGV0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGxldCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGxldCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBsZXQgY29udGVudEluc2lkZSA9IGNyZWF0ZUNvbnRlbnRJbnNpZGUoKTtcblxuICAgIGNvbnRlbnRJbnNpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50SW5zaWRlLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRlbnRJbnNpZGUuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEluc2lkZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0cnVjdHVyZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLy8gVE8tRE8gbGlzdDpcbi8vICAgLSBjcmVhdGUgbWVudSBkaXNwbGF5IHdoZW4gY2xpY2tpbmcgbWVudSB0YWJcbi8vICAgLSBtYWtlIHRoZSBidXR0b25zIG1vdmUgdXAgYSBsaXR0bGUgd2hlbiBob3ZlcmluZyBhbmQgYWRkIGEgbGluZSBhdCB0aGVpciBib3R0b20gd2hlbiBhY3RpdmVcblxuXG5cbmltcG9ydCBjcmVhdGVIb21lVGFiIGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZVN0cnVjdHVyZSBmcm9tIFwiLi9tb2R1bGVzL3N0cnVjdHVyZVwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RUYWIgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XG5cblxuLy8gY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgICAgd2hpbGUobWFpbi5oYXNDaGlsZE5vZGVzKCkpe1xuLy8gICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKVxuLy8gICAgIH1cbi8vIH1cblxuXG4vLyBjb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbi8vICAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWJ0blwiKTtcbi8vICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcbi8vICAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWJ0blwiKTtcblxuLy8gICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICAgICAgY2xlYXJDb250ZW50KCk7XG4vLyAgICAgICAgIGNyZWF0ZUhvbWVUYWIoKTtcbi8vICAgICB9KTtcbi8vICAgICAvL1xuXG4vLyAgICAgLy9cbi8vICAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuLy8gICAgICAgICBjcmVhdGVDb250YWN0VGFiKCk7XG4vLyAgICAgfSk7XG4vLyB9XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4vLyAgICAgY3JlYXRlU3RydWN0dXJlKCk7XG4vLyAgICAgY3JlYXRlSG9tZVRhYigpO1xuLy8gICAgIHNldEV2ZW50TGlzdGVuZXJzKCk7XG4vLyB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=