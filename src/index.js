
// TO-DO list:
//   - make the buttons move up a little when hovering and add a line at their bottom when active



import createHomeTab from "./modules/home";
import createStructure from "./modules/structure";
import createContactTab from "./modules/contact";
import createMenuTab from "./modules/menu";


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
        createHomeTab();
    });
    
    menuBtn.addEventListener("click", () => {
        clearContent();
        createMenuTab();
    })
    
    contactBtn.addEventListener("click", () => {
        clearContent();
        createContactTab();
    });
}

window.addEventListener("load", () => {
    createStructure();
    createHomeTab();
    setEventListeners();
});