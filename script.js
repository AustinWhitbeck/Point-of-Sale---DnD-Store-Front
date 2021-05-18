const equipNavButton = document.querySelector('#equip-nav');
const spellsNavButton = document.querySelector('#spells-nav');
const skillsNavButton = document.querySelector('#skills-nav');
const imagesEquip = document.querySelector('.image-container-equip');
const imagesSpells = document.querySelector('.image-container-spell');
const imagesSkills = document.querySelector('.image-container-skill');
const shopitems = document.querySelectorAll('.shop-item');


//  this can be condensed into one event listener for the nav bar.
// this will look for the class of the nav li and then execute the below click
// currently this is set up taht it would be an event listener for each of the nav buttons, however we can
// condense this down into one event listener for a click on any of the nav buttons.
console.log(imagesEquip);
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