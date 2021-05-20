const equipNavButton = document.querySelector('#equip-nav');
const spellsNavButton = document.querySelector('#spells-nav');
const skillsNavButton = document.querySelector('#skills-nav');
const allNavButton = document.querySelector('#all-options');
const imagesEquip = document.querySelector('.image-container-equip');
const imagesSpells = document.querySelector('.image-container-spell');
const imagesSkills = document.querySelector('.image-container-skill');
const shopitems = document.querySelectorAll('.shop-item');
const shopOptions = document.querySelector('.shop-options');
const inventoryContainer = document.querySelector('.inventory-container');
const inventoryContent = document.querySelector('.inventory-content');
const headers = document.querySelector('.headers-div');
const menuItems = document.querySelectorAll('.menu-item');
const mainContent = document.querySelector('.main-content');
const cartContent = document.querySelector('.cart-content');
const cartContainer = document.querySelector('.cart-container');
const tax = document.querySelector('.tax');
const subTotal = document.querySelector('.sub-total');
const total = document.querySelector('.total');
const cashForm = document.querySelector('.cash-form');
const cardForm = document.querySelector('.card-form');


let cartItems = [

]


headers.addEventListener('click',(event)=> {
        if (event.target.innerText === 'Shop'){
            mainContent.classList.remove('hidden');
            shopOptions.classList.remove('hidden');
            inventoryContent.classList.add('hidden');
            cartContent.classList.add('hidden');
        } else if (event.target.innerText === 'Cart') {
            console.log('cart');
            mainContent.classList.add('hidden');
            inventoryContent.classList.add('hidden');
            shopOptions.classList.add('hidden');
            cartContent.classList.remove('hidden');
        } else if (event.target.innerText === 'Inventory') {
            console.log('inventory');
            mainContent.classList.add('hidden');
            inventoryContent.classList.remove('hidden');
            shopOptions.classList.add('hidden');
        } 
})

//  this can be condensed into one event listener for the nav bar.
// this will look for the class of the nav li and then execute the below click
// currently this is set up taht it would be an event listener for each of the nav buttons, however we can
// condense this down into one event listener for a click on any of the nav buttons.


allNavButton.addEventListener('click',(event)=> {
    shopitems.forEach((element) => {
        if (element.classList.contains('hidden')){
            element.classList.remove('hidden');
        } 
    })
    
})

equipNavButton.addEventListener('click',(event)=> {
    shopitems.forEach((element) => {
        if (element.classList.contains('image-container-equip')){
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    })
    
})

spellsNavButton.addEventListener('click',(event)=> {
    shopitems.forEach((element) => {
        if (element.classList.contains('image-container-spells')){
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    })
    
})

skillsNavButton.addEventListener('click',(event)=> {
    shopitems.forEach((element) => {
        if (element.classList.contains('image-container-skill')){
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    })
    
})

mainContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        let cartItem = {
            name: event.target.name, 
            value: parseInt(event.target.value)
        };
        cartItems.push(cartItem);
        console.log(cartItems);
        let checkout = document.createElement('p');
        checkout.innerText = `${cartItem.name}/${cartItem.value}`;
        cartContainer.appendChild(checkout);
        let currentTotal = 0;
        cartItems.forEach((i) => {
            currentTotal += i.value;
        }) 
        subTotal.innerText = `${currentTotal}`;
        tax.innerText = `${currentTotal * 0.06}`;
        total.innerText = `${currentTotal * 1.06}`;

    } 
})


cashForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(cashForm);
    const cashInputVal = formData.get("cashinput");
    console.log(cashInputVal);
    //insert if else and pushing stuff
})