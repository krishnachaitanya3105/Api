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
            alert("There is a meal name");
        }
        });

    }
    else{
        alert("please enter item name");
    }

}
submit.addEventListener('submit',findMeal);

