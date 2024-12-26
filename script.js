const search=document.getElementById('search');
// console.log(search);
const submit=document.getElementById('submit');
const random=document.getElementById('random');
const resultHeading=document.getElementById('meal-result-heading');
const mealsEl=document.getElementById('meals');
const single_mealEl=document.getElementById('single-meal-container');
function findMeal(e){
    e.preventDefault();
    // console.log("function defined");
    const item=search.value;
    // console.log(item);
    if(item.trim())
    {
        // alert("data is present");
        //fetch api data and display in browser
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`).then((res)=>res.json()).then((data)=>{
            console.log(data);
        resultHeading.innerHTML=`Search Result for ${item}`;
        if(data.meals===null)
        {
            resultHeading.innerHTML=`Oops !! no result for meal ${item}`;
        }
        else{
            // alert("There is a meal name");
            mealsEl.innerHTML = data.meals
            .map((meal) => `<div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="meal-info" data-mealId="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                </div>
            </div>`)
            .join('');
          
        }
        });

    }
    else{
        alert("please enter item name");
    }

}
submit.addEventListener('submit',findMeal);

// const dropdown=document.getElementById("click");
// dropdown.addEventListener('change',()=>{
//     if(dropdown.value==="white")
//     {
// document.body.style.backgroundColor="white";
// document.body.style.color="black";
//     }
//     else if(dropdown.value==="black")
//     {
//         document.body.style.backgroundColor="black";
//         document.body.style.color="white";
//     }
// })
const icon=document.getElementById("theme-toggle");
const body=document.body;

    icon.addEventListener("click", () => {
        // Toggle between lightmode and darkmode
        body.classList.toggle("lightmode");
        body.classList.toggle("darkmode");
    
        if (body.classList.contains("darkmode")) {
            icon.classList.remove("far", "fa-sun");
            icon.classList.add("fa-regular", "fa-moon");
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            icon.classList.remove("fa-regular", "fa-moon");
            icon.classList.add("far", "fa-sun");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    });






