
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

export default createContactTab;