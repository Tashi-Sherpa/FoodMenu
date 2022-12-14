"use strict";
myFunction();

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 
//   function selectBtnOnClick(){
//      const teamSelect = document.getElementById("teamSelect");
//      let selecrtedTeamCode = teamSelect.value;s
//   }
  

// To learn

"use strict"

let menu = {
    drinks : [
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees : [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate"
    ],
    desserts: [
    "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

const optionsList = document.getElementById("optionsList");
const foodsList = document.getElementById("foodsList");
foodsList.style.display = "none"
window.onload = function () {
    //initFoodsList();
    optionsList.onchange = initFoodsList;
}

function initFoodsList () {
    foodsList.length = 0;
    let selectedValue = optionsList.value;
    if (selectedValue == "drinks") {
        for (let value of menu.drinks) {
            let option = document.createElement("option");
            option.textContent = value;
            option.value = value;
            // new Option (value, value);
            foodsList.appendChild(option);
        }
        foodsList.style.display = "block";
    }
    else if (selectedValue == "entrees") {
        for (let value of menu.entrees) {
            let option = document.createElement("option");
            option.textContent = value;
            option.value = value;
            //new Option (value, value);
            foodsList.appendChild(option);
        }
        foodsList.style.display = "block";
    }
    else if (selectedValue == "desserts"){
        for (let value of menu.desserts) {
            let option = document.createElement("option");
            option.textContent = value;
            option.value = value;
            //new Option (value, value);
            foodsList.appendChild(option);
        }
        foodsList.style.display = "block";
    }
    else {
        foodsList.style.display = "none";
    }
    
    //return foodsList;
}

// function optionChanged () {
//     foodsList.options.length = 0;
//     initFoodsList();
// }