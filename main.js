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

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = [
    {
        title: "Stack Overflower",
        price: "12.99",
        img: 'images/item1.jpg',
        description: "This is the perfect pizza for those lazy people who always search in google how to center a div even knowing perfectly how to do it."   
    },{
        title: "Clean Day",
        price: "19.99",
        img: 'images/item2.jpg',
        description: "This special pizza will remember you of those glorious days when everything goes perfect."
    },{
        title: "Antidistractor",
        price: "14.99",
        img: 'images/item3.jpg',
        description: "The ideal taste for those who are always distracted while trying to code."
    },{
        title: "Semicolon",
        price: "16.99",
        img: 'images/item4.jpg',
        description: "Your code don't run correctly beause of some dumb semicolon that you've forgot to write? Congratulations, you suck."
    },{
        title: "Back to work",
        price: "14.99",
        img: 'images/item5.jpg',
        description: "Hmmm, you are one of those people who takes too many breaks? This pizza is so nasty that you'll be working all day long."
    },{
        title: "Imposter syndrome",
        price: "18.99",
        img: 'images/item6.jpg',
        description: "This pizza will rise your power in code to a limit that you'll never feel the impostor syndrome again."
    }
]

const createMenuTab = () => {
    const main = document.getElementById("main");

    let title = document.createElement("div");
    title.classList.add("menu-title");
    title.textContent = "Choose the perfect pizza for you";

    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    menu.forEach(item => {
        let pizza = document.createElement("div");
        pizza.classList.add("item");
        pizza.innerHTML = `<img src="${item.img}" alt="img" class="item-img"><div class="item-info"><header><div class="item-title">${item.title}</div><div class="item-price">$${item.price}</div></header><p class="item-desc">${item.description}</p></div>`
        gridContainer.appendChild(pizza);
    });

    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.appendChild(title);
    menuContainer.appendChild(gridContainer);

    main.appendChild(menuContainer);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuTab);

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

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

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
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");

// TO-DO list:
//   - make the buttons move up a little when hovering and add a line at their bottom when active









const clearContent = () => {
    const main = document.getElementById("main");
    while(main.hasChildNodes()){
        main.removeChild(main.lastChild)
    }
}


const setEventListeners = () => {
    const homeBtn = document.querySelector(".home-btn");
    const menuBtn = document.querySelector(".menu-btn");
    const contactBtn = document.querySelector(".contact-btn");

    homeBtn.addEventListener("click", () => {
        clearContent();
        (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });
    
    menuBtn.addEventListener("click", () => {
        clearContent();
        (0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })
    
    contactBtn.addEventListener("click", () => {
        clearContent();
        (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
}

window.addEventListener("load", () => {
    ;(0,_modules_structure__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    setEventListeners();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUMxQjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUyxzRkFBc0YsV0FBVyxpQ0FBaUMsV0FBVyxzQ0FBc0MsaUJBQWlCO0FBQ3BQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDM0RmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7O1VDekQ5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7QUFJMkM7QUFDTztBQUNEO0FBQ047OztBQUczQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QixLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLCtEQUFlO0FBQ25CLElBQUkseURBQWE7QUFDakI7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY3JlYXRlQ29udGFjdFRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gICAgbGV0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRpdGxlXCIpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiRG8geW91IHN0aWxsIGhhdmUgcXVlc3Rpb25zP1wiO1xuXG4gICAgbGV0IGNvbnRhY3RNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1tc2dcIik7XG4gICAgY29udGFjdE1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkNvZGVycyBhcmUgc2h5PyBCVUxMU0hJVC4gRmVlbCBmcmVlIHRvIGNvbnRhY3QgdXMgYW5kIHdlJ2xsIHN1cmVseSBoYXZlIGEgbmljZSBjb252ZXJzYXRpb25cIjtcblxuICAgIGxldCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZChcIm51bWJlclwiKTtcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtd2hhdHNhcHBcIj48L2k+NjI3OTkzNTY0JztcblxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZChcImVtYWlsXCIpO1xuICAgIGVtYWlsLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVudmVsb3BlXCI+PC9pPmJsaXNzZnVsY29kZXJAZ21haWwuY29tJztcblxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tcGluXCI+PC9pPk1hbGxvcmNhIDQwMSwgMDgwMTMgQmFyY2Vsb25hLCBTcGFpbidcblxuICAgIGxldCBjb250YWN0V2F5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFdheXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtd2F5c1wiKTtcbiAgICBjb250YWN0V2F5cy5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgY29udGFjdFdheXMuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGNvbnRhY3RXYXlzLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIFxuICAgIGxldCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TWVzc2FnZSk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0V2F5cyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0VGFiOyIsIlxuY29uc3QgY3JlYXRlSG9tZVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gICAgbGV0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbnRyb1wiKTtcbiAgICBpbnRyby50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0by4uLlwiO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIGJsaXNzZnVsIGNvZGVyXCI7XG5cbiAgICBsZXQgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtc2cuY2xhc3NMaXN0LmFkZChcImhvbWUtbWVzc2FnZVwiKTtcbiAgICBtc2cudGV4dENvbnRlbnQgPSBcIlRoZSBiZXN0IHBpenphcyBmb3IgaW1wcm92aW5nIHByb2R1Y3Rpdml0eSB3aGlsZSBjb2Rpbmcgc29tZSB3ZWlyZCB0YXNrIG9yZGVyZWQgYnkgeW91ciBpZ25vcmFudCBib3NzXCI7XG5cbiAgICBsZXQgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250YWluZXJcIik7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRybyk7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtc2cpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lVGFiOyIsImNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTdGFjayBPdmVyZmxvd2VyXCIsXG4gICAgICAgIHByaWNlOiBcIjEyLjk5XCIsXG4gICAgICAgIGltZzogJ2ltYWdlcy9pdGVtMS5qcGcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBwZXJmZWN0IHBpenphIGZvciB0aG9zZSBsYXp5IHBlb3BsZSB3aG8gYWx3YXlzIHNlYXJjaCBpbiBnb29nbGUgaG93IHRvIGNlbnRlciBhIGRpdiBldmVuIGtub3dpbmcgcGVyZmVjdGx5IGhvdyB0byBkbyBpdC5cIiAgIFxuICAgIH0se1xuICAgICAgICB0aXRsZTogXCJDbGVhbiBEYXlcIixcbiAgICAgICAgcHJpY2U6IFwiMTkuOTlcIixcbiAgICAgICAgaW1nOiAnaW1hZ2VzL2l0ZW0yLmpwZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgc3BlY2lhbCBwaXp6YSB3aWxsIHJlbWVtYmVyIHlvdSBvZiB0aG9zZSBnbG9yaW91cyBkYXlzIHdoZW4gZXZlcnl0aGluZyBnb2VzIHBlcmZlY3QuXCJcbiAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwiQW50aWRpc3RyYWN0b3JcIixcbiAgICAgICAgcHJpY2U6IFwiMTQuOTlcIixcbiAgICAgICAgaW1nOiAnaW1hZ2VzL2l0ZW0zLmpwZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBpZGVhbCB0YXN0ZSBmb3IgdGhvc2Ugd2hvIGFyZSBhbHdheXMgZGlzdHJhY3RlZCB3aGlsZSB0cnlpbmcgdG8gY29kZS5cIlxuICAgIH0se1xuICAgICAgICB0aXRsZTogXCJTZW1pY29sb25cIixcbiAgICAgICAgcHJpY2U6IFwiMTYuOTlcIixcbiAgICAgICAgaW1nOiAnaW1hZ2VzL2l0ZW00LmpwZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgY29kZSBkb24ndCBydW4gY29ycmVjdGx5IGJlYXVzZSBvZiBzb21lIGR1bWIgc2VtaWNvbG9uIHRoYXQgeW91J3ZlIGZvcmdvdCB0byB3cml0ZT8gQ29uZ3JhdHVsYXRpb25zLCB5b3Ugc3Vjay5cIlxuICAgIH0se1xuICAgICAgICB0aXRsZTogXCJCYWNrIHRvIHdvcmtcIixcbiAgICAgICAgcHJpY2U6IFwiMTQuOTlcIixcbiAgICAgICAgaW1nOiAnaW1hZ2VzL2l0ZW01LmpwZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhtbW0sIHlvdSBhcmUgb25lIG9mIHRob3NlIHBlb3BsZSB3aG8gdGFrZXMgdG9vIG1hbnkgYnJlYWtzPyBUaGlzIHBpenphIGlzIHNvIG5hc3R5IHRoYXQgeW91J2xsIGJlIHdvcmtpbmcgYWxsIGRheSBsb25nLlwiXG4gICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIkltcG9zdGVyIHN5bmRyb21lXCIsXG4gICAgICAgIHByaWNlOiBcIjE4Ljk5XCIsXG4gICAgICAgIGltZzogJ2ltYWdlcy9pdGVtNi5qcGcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHBpenphIHdpbGwgcmlzZSB5b3VyIHBvd2VyIGluIGNvZGUgdG8gYSBsaW1pdCB0aGF0IHlvdSdsbCBuZXZlciBmZWVsIHRoZSBpbXBvc3RvciBzeW5kcm9tZSBhZ2Fpbi5cIlxuICAgIH1cbl1cblxuY29uc3QgY3JlYXRlTWVudVRhYiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudS10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIHRoZSBwZXJmZWN0IHBpenphIGZvciB5b3VcIjtcblxuICAgIGxldCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lclwiKTtcblxuICAgIG1lbnUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IHBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGl6emEuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgICAgIHBpenphLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7aXRlbS5pbWd9XCIgYWx0PVwiaW1nXCIgY2xhc3M9XCJpdGVtLWltZ1wiPjxkaXYgY2xhc3M9XCJpdGVtLWluZm9cIj48aGVhZGVyPjxkaXYgY2xhc3M9XCJpdGVtLXRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvZGl2PjxkaXYgY2xhc3M9XCJpdGVtLXByaWNlXCI+JCR7aXRlbS5wcmljZX08L2Rpdj48L2hlYWRlcj48cCBjbGFzcz1cIml0ZW0tZGVzY1wiPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+PC9kaXY+YFxuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphKTtcbiAgICB9KTtcblxuICAgIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51VGFiIiwiXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJoZWFkZXJcIik7XG5cbiAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcImhvbWUtYnRuXCIpO1xuICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChob21lVGFiKTtcblxuICAgIGxldCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gICAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuICAgIGxldCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1idG5cIik7XG4gICAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtYWluXCIpO1xuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZm9vdGVyXCIpO1xuXG4gICAgbGV0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXNnLnRleHRDb250ZW50ID0gXCJNYWRlIGluIEJDTiBieSBzYW50aXB1X1wiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChtc2cpO1xuXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5jb25zdCBjcmVhdGVTdHJ1Y3R1cmUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGxldCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBsZXQgbWFpbiA9IGNyZWF0ZU1haW4oKTtcbiAgICBsZXQgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RydWN0dXJlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG4vLyBUTy1ETyBsaXN0OlxuLy8gICAtIG1ha2UgdGhlIGJ1dHRvbnMgbW92ZSB1cCBhIGxpdHRsZSB3aGVuIGhvdmVyaW5nIGFuZCBhZGQgYSBsaW5lIGF0IHRoZWlyIGJvdHRvbSB3aGVuIGFjdGl2ZVxuXG5cblxuaW1wb3J0IGNyZWF0ZUhvbWVUYWIgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgY3JlYXRlU3RydWN0dXJlIGZyb20gXCIuL21vZHVsZXMvc3RydWN0dXJlXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFRhYiBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIjtcbmltcG9ydCBjcmVhdGVNZW51VGFiIGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xuXG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIHdoaWxlKG1haW4uaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZClcbiAgICB9XG59XG5cblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idG5cIik7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1idG5cIik7XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBjcmVhdGVIb21lVGFiKCk7XG4gICAgfSk7XG4gICAgXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY3JlYXRlTWVudVRhYigpO1xuICAgIH0pXG4gICAgXG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY3JlYXRlQ29udGFjdFRhYigpO1xuICAgIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIGNyZWF0ZVN0cnVjdHVyZSgpO1xuICAgIGNyZWF0ZUhvbWVUYWIoKTtcbiAgICBzZXRFdmVudExpc3RlbmVycygpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9