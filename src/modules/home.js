
const createHomeTab = () => {
    const main = document.getElementById("main");
    while(main.hasChildNodes()){
        main.removeChild(main.lastChild)
    }

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

export default createHomeTab;