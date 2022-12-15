// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


document.querySelector("#wallet").innerText = localStorage.getItem("amount");

document.querySelector("#search").addEventListener("input", searchMovies);

var movies_div = document.querySelector("#movies");

async function searchMovies(){
    try{
        const query = document.getElementById("search").value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=70d1c4fa&s=${query}`)

        let data = await res.json();
        
        let movies = data.Search;

        appendMovies(movies);
    }catch(err){
        console.log("err:", err);
    }

    function appendMovies(data){

        if(data === undefined) {
            return false;
        }

        movies_div.innerHTML = null;

        data.forEach(function(el){
            let div = document.createElement("div");

            let img = document.createElement("img");
            img.src = el.Poster;

            let movieName = document.createElement("p");
            movieName.innerText = el.Title;

            let btn = document.createElement("button");
            btn.innerText = "Book Now";
            btn.addEventListener("click", function(){
                bookNow(el);
            })

            div.append(img, movieName, btn);

            movies_div.append(div);
        });
    }  
}

function bookNow(el){
    var arr = []
    var movieObj = {
        image: el.Poster,
        movieName: el.Title,
    }

    arr.push(movieObj)
    localStorage.setItem("bookedMovie", JSON.stringify(arr));

    window.location.href= "checkout.html";
}