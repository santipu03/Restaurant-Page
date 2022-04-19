
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

export default createStructure;