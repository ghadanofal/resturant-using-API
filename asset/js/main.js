var httprequest = new XMLHttpRequest();
var posts= [];

function getfood(food){
httprequest.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${food}`);

httprequest.send();
console.log(httprequest);

httprequest.onreadystatechange = function(){
    if(httprequest.readyState==4){
            console.log(posts);
    posts = JSON.parse(httprequest.response).recipes;
        showData();
    }
}
}

function showRecipeDetails(recipeId) {
    // Fetch details for the selected recipe using the second API
    httprequest.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);

    httprequest.send();
    console.log(httprequest);
    
    httprequest.onreadystatechange = function () {
        if (httprequest.readyState == 4) {
        var data = JSON.parse(httprequest.response).recipe;
        console.log(data);
        }
    }
}

function showData(){
var data= "";
for(var i=0; i<posts.length; i++)
{
    data = data + `<div class="recipe col-md-4">
    <h2>${posts[i].title}</h2>
    <img src="${posts[i].image_url}" class="w-50" alt="${posts[i].title}">
    <h3>${posts[i].recipe_id}</h3>
    <p><a href="details.html?recipeId=${posts[i].recipe_id}">Read More</a></p>
</div>
    `;

}

document.getElementById("demo").innerHTML = data;
}


var alllink = document.querySelectorAll(".nav-item");

for( var i=0 ; i<alllink.length; i++){
    alllink[i].addEventListener('click', function(e){
        // getnews(e.target.innerHTML);
        console.log(e.target.innerHTML);
        getfood(e.target.innerHTML);
    })
}

