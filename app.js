// selectors

const hamBurger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const slideShow = document.querySelector('.slideshow');
const cockTails = document.querySelector('.cocktails');
const ingredient = document.querySelector('ingredient');
let i;
let alcoholList;





// event listeners
 hamBurger.addEventListener('click', () => {
    menu.classList.toggle('open');
    links.forEach((item) => {
        item.classList.toggle('active');
    });
   
});


// functions

async function alcData() {
    const cocktailData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");

    const data = await cocktailData.json();
    console.log(data);
    

    // for (var i = 0; i < 20; i++) {
    //   alcoholList = data.drinks[i].strDrink;
    // }

    createAlcoholList(data.drinks);
    const select = document.querySelector('select');
    
    select.addEventListener("change" , function(e) {
        createAlcoholSlider(e, data.drinks)
    });
}

alcData();

;



function createAlcoholList(item) {
    cockTails.innerHTML = `
    <select>
    <option>select</option>
    ${item.map(function (alcItem) {
        return `<option value="${alcItem.strDrink}">${alcItem.strDrink}</option>`;
    }).join('')}
    </select>
    `
 
   
}

function createAlcoholSlider(e, item) {
    const findValue = e.target.value;
    const currentData = item.find(arr => arr.strDrink === findValue);
    slideShow.innerHTML = 
       `<div class="slide" style="background-image: url('${currentData.strDrinkThumb}')"></div>`
}







  

 


