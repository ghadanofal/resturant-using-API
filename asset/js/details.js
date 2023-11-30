// Get the recipeId from the query parameter in the URL
var urlParams = new URLSearchParams(window.location.search);
var recipeId = urlParams.get('recipeId');
var httprequest = new XMLHttpRequest();



function displayRecipeDetails(recipeId) {
    
    httprequest.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);

    httprequest.send();
    console.log(httprequest);
    
    httprequest.onreadystatechange = function () {
    if (httprequest.readyState == 4 ) {
        var recipeDetails = JSON.parse(httprequest.response).recipe; 
        



            // Display the details on the page
            var details = document.getElementById('recipe-details');
            details.innerHTML = `
                <h2>${recipeDetails.title}</h2>
                <img src="${recipeDetails.image_url}" alt="${recipeDetails.title}">
                <h4>publisher:${recipeDetails.publisher}<h4/>
                <h5>social rank:${recipeDetails.social_rank}<h5/>
                <ul>
                    ${recipeDetails.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                
            `;
        }
}
}

displayRecipeDetails(recipeId);











