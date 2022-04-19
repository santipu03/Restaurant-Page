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

export default createMenuTab