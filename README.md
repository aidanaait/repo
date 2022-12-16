# repo

//folder kak dolzno vyglyadit: 
Aitmukhanbetova_300340836_withNodeModules
vnutri folders:
client
models
npm init -y

1. sozdala folders kak ona skazala
-create react app named client within nodemodules folder
-inside src subfolder the app.js file should contain code for front end ui
-copy css file place inside src subfolder, import styles
-components inside src
build froent and retrieve data from external api use axios or fewtch api
App.js you have to fecth the data about veg low-card recipes from the following api endpoint(get  it from starter file)
choose 2nd one.
tam 12 recipes
process response to construct array of 12 recipe objects, for each recipe object, store following infor:
-"imageurl"-from images -small-url
-"label"
"calories-round off
"cuisine type-get first one from arrray
=number of ingredients-get total number of ingred
-siteurl-get from url
post this data to the database through backend
//setup backend and mongodb db for storing the recipes
//in server js set up routes post, get,put,delete in order to perform create read update and delete
//post: data should be stored only once regardless how many times you refresh app
//name of DB: finalExamDB
//collection name: recipes
//the fields of collection: imageUrl, label,calories,cuisineType,numberOfIngredients, siteURL
//imageUrl-string, required
//label-string, required
//calories-number, requires
//cuisineType-get the first one from array
//numberOfIngredients-number 1-10,required
//siteurl-string,required

####//display frontend
//don't do READ operation.
//for each recipe,render a div with className="recipe"
//<img>-use width 100, height 100
//<h3>-recipe label
//<h4>-cuisine type
//<h5>-calories
//<FaCartPlus> and <sup>-for number ingredients
//<p>-for site url
//<FaEdit>-for edit
//<FaTrash>-for delete

 ##//overall APP should have following component tree
  //navbar contains one link(top recipes)
  //header-contains <h1> and /,h4> inside header element
  //seacrh bar-contrains a form with a label and input and submit
//home -containts information about all recipes inside a div with class name "recipes"
//update recipe: contains a form with all fields populated with the info about recipe to be updated,but only cuisine typem,calories and number of ingredients should be editable
//SearchResults:contains recipes which match the selected options
//Footer-contains <p> with your name inside the footer element
//DELETE RECIPE by clicking trash icon(frontend) and view teh updated data(s db tozhe dolzhno ischeznut)
//UPDATE by clicking edit; for all update/edit operation user can only update "calories","cuisineType","numberofIngredients"
//when edit clicked, user directed to a new page that  displays a form with all fields populated with infor about recipe to be updated
//after entering new calories, cuisine type and numnberofingredients, user clkick "UPDATE RECIPE", after click user directed to the home page
//SEARCH for a recipe by cuisine type and/or entering a number of ingredients by choosing appropriate options from dropdown  menu hitting "Search" button
//cuisinetype=if "ANY" then recipes with all cuisine types should be displayed
//number of ingredianet: the number of ingred can be between 2-6
//the reciped which match both criteria displayed
//after seacrh results the user should be able to click the app logo text("Top Recipes") which takes user back to home page that has all recipes

