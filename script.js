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
const payBtn = document.querySelectorAll('.paybtn');
const paymentOptions = document.querySelector('.payment-options');
const cashOption = document.querySelector('.cashoption');
const cardOption = document.querySelector('.cardoption');
const payWithCashBtn = document.querySelector('#paywithcashbtn');
const changeDue = document.querySelector('.change-due');


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


cartContent.addEventListener('click', (event) => {
    // add code to state nothing is in the cart
    if (event.target.classList.contains('checkoutbtn')) {
        payBtn.forEach( variable =>
            variable.classList.remove('hidden')
        )
    } else if (event.target.classList.contains ('paycash')){
        cashOption.classList.remove('hidden');
        cardOption.classList.add('hidden');
    } else if (event.target.classList.contains ('paycard')){
        cardOption.classList.remove('hidden');
        cashOption.classList.add('hidden');
    } 
})

cashForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(cashForm);
    const cashInputVal = formData.get("cashinput");
    let currentTotal = parseInt(total.innerText);
    console.log(currentTotal);
    console.log(cashInputVal);
    console.log(total);
    let changeAmtDue = document.createElement('p');
    changeAmtDue.innerText = `Your change back is ${currentTotal}`;
    let purchaseMessage = document.createElement('p');
    purchaseMessage.innerText = `Thank you for your purchase! We hope you enjoy your shiny new things!`;
    let notEnoughMoney = document.createElement('p');
    notEnoughMoney.innerText = `That's not enough gold friend, got any more?`;
    //insert if else and pushing stuff
    if (cashInputVal > currentTotal){
        let overageDue = (cashInputVal - currentTotal);
        console.log(overageDue);
        // output change due
        changeDue.appendChild(changeAmtDue);
        changeDue.appendChild(purchaseMessage);
    } else if (cashInputVal == currentTotal){
        // push the cart array to the inventory array
        // pop up message thanking user purchase
        changeDue.appendChild(purchaseMessage);
    }  else {
        changeDue.appendChild(notEnoughMoney);
    }
})








// stay on cart page when finish purchase.
// do a pop up message that says to check the inventory.


// if (goldAmount === total) {
//     push the cart array to the inventory array
// } else if (goldAMount > total) {
//     calculate change then push to inventory array
// } else {
//     add more cash
// }