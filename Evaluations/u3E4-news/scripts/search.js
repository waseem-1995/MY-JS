// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

// async function searchNews(query) {

//      console.log(query)
//     let response = await fetch(
//         `https://masai-api.herokuapp.com/news?q=${query}`
//     );
//     let data = await response.json();
//     displayNews(data.articles);
//     console.log(data.articles);


// }

// var enter = document.getElementById("search_input");
// enter.addEventListener("keydown", function (e) {
//     if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
//         console.log(e.target.value);
//         searchNews(e.target.value)
//     }
// });

// function displayNews(data) {

//     data.forEach((element) => {

//         let newsDiv = document.getElementById('results');

//         let div = document.createElement('div');
//         div.setAttribute("class","news")
//         let title = document.createElement('h3');
//         title.innerText = element.title;
//         let description = document.createElement('p');
//         description.innerText = element.description;

//         let img = document.createElement('img');
//         img.src = element.urlToImage;

//         div.addEventListener('click', () => {
//             let news = JSON.parse(localStorage.getItem('news'));
//             news.push(element);
//             localStorage.setItem('news', JSON.stringify(news));
//             window.location.href = 'news.html';
//         })

//         div.append(title, description, img);

//         newsDiv.append(div);

//     })

// }


let value=JSON.parse(localStorage.getItem("query"));
searchNews(value)
async function searchNews(value) {
     let query = document.getElementById("search_input").value;
     console.log(query)
     if(value){
        query=value;
     }
    let response = await fetch(
        `https://masai-api.herokuapp.com/news?q=${query}`
    );
    let data = await response.json();
    appenddisplayNews(data.articles);
    console.log(data.articles);

}


function appenddisplayNews(data) {

     data.forEach((element) => {
    
            let newsDiv = document.getElementById('results');
    
            let div = document.createElement('div');
            div.setAttribute("class","news")
            let title = document.createElement('h3');
            title.innerText = element.title;
            let description = document.createElement('p');
            description.innerText = element.description;
    
            let img = document.createElement('img');
            img.src = element.urlToImage;
    
            div.addEventListener('click', () => {
                let news = JSON.parse(localStorage.getItem('news'));
                news.push(element);
                localStorage.setItem('news', JSON.stringify(news));
                window.location.href = 'news.html';
            })
    
            div.append(title, description, img);
    
            newsDiv.append(div);
    
    })
 }
    
    
