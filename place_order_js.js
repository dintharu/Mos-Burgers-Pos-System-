//Menu, Customer and global arrays
const menuItems = [
    {name: "Classic beef burger", price: 850.0,  category: "burgers",images: "../images/item_images/burger_item_1.avif" , description : "A chicken burger is a flavorful sandwich made with a tender, grilled or crispy chicken fillet placed between two soft buns. It's topped with fresh lettuce, juicy tomato slices, and creamy mayonnaise."},
    {name: "Classic chicken burger", price: 850.0,  category: "burgers",images: "../images/item_images/burger_item_2.avif" , description : "A chicken burger is a flavorful sandwich made with a tender, grilled or crispy chicken fillet placed between two soft buns. It's topped with fresh lettuce, juicy tomato slices, and creamy mayonnaise."},
    {name: "Classic beef burger", price: 1000.0,  category: "burgers",images: "../images/item_images/burger_item_3.avif" , description : "A chicken burger is a flavorful sandwich made with a tender, grilled or crispy chicken fillet placed between two soft buns. It's topped with fresh lettuce, juicy tomato slices, and creamy mayonnaise."},
    {name: "Classic beef burger", price: 850.0,  category: "burgers",images: "../images/item_images/burger_item_4.avif" , description  : "A chicken burger is a flavorful sandwich made with a tender, grilled or crispy chicken fillet placed between two soft buns. It's topped with fresh lettuce, juicy tomato slices, and creamy mayonnaise. "}
];

const customer = [
    {phone: "0773528840", name: "nimal perera", email:  "nimal@gmail.com" },
    {phone: "0773758840", name: "saman perera", email:  "saman@gmail.com" },
    {phone: "0513528840", name: "kumara perera", email:  "kumara@gmail.com" }
];

let selectedItems = [];
let currentCategory = 'all';

//update data and time and sipay in the  nav bar

function UpdateDateTime(){
    const now = new Date();
    const options = {
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour : '2-digit',
        minute : '2-digit',
        second  : '2-digit',
        hour12 :  true
    };

    document.getElementById("current-date").textContent = now.toLocaleDateString('en-US',options);

    //update order date 

    const dateOptions = {
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    }

    document.getElementById("orderDate").textContent = now.toLocaleDateString('en-US',dateOptions);
}

//display menu item cards

function displayMenuItems(items){
    const menuContainer = document.getElementById("menuItems");
    menuContainer.innerHTML = ''

    items.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'col-md-4  mb-3';
        menuItemDiv.innerHTML = `
                <div class="card menu-item"  onclick="addToOrder('${item.name}', ${item.price})" style="width: 100%;">
                    <img src="images/${item.images}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fw-bold text-primary">LKR${item.price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
        
        `;

        menuContainer.appendChild(menuItemDiv);
    });

}


//add items to order

function addToOrder(name,price){
    selectedItems.push({name,price});
    updateOrderDisplay();
}

//update and display the cards in order  section

function updateOrderDisplay(){
    const selectedItemsContainer = document.getElementById("selectedItems");
    const totalAmount = document.getElementById("totalAmount");

    selectedItemsContainer.innerHTML = ``;
    let total = 0;

    selectedItems.forEach((item,index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = 'd-flex justify-content-between align-items-center mb-2';
        itemDiv.innerHTML = `
            
        <span>${item.name}</span>
        <div>
             <span class="me-2">LKR${item.price.toFixed(2)}</span>
             <button class = "btn btn-sm btn-danger" onclick="removeFromOrder(${index})">
             <i class="fa-solid fa-trash"></i>
             </button>
        </div>
        `;

        selectedItemsContainer.appendChild(itemDiv);
        total+=item.price;
    });

    totalAmount.textContent = `LKR${total.toFixed(2)}`;
}

function removeFromOrder(index) {
    selectedItems.splice(index, 1);
    updateOrderDisplay();
}

//Function invoking 
UpdateDateTime();
setInterval(UpdateDateTime,1000);
displayMenuItems(menuItems);