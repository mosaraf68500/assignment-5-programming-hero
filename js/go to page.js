document.getElementById('home-page')
.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = "index.html";
    // console.log("Home page clicked");
});

document.getElementById('blog-page')
.addEventListener('click', function(event){
event.preventDefault();
    window.location.href = "home.html";
    // console.log("Home page clicked");
});