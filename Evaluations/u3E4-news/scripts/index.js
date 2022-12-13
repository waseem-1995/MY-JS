// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

const defaultnews=async ()=>{
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)
        let data=await res.json();
        showNews(data.articles)
    }catch(error){
        console.log(error)
    }
}
defaultnews()

if(localStorage.getItem("news")===null){
    localStorage.setItem("news",JSON.stringify([]))
}

function showNews(data) {
    let container = document.getElementById("results");
    container.innerHTML=null
    data.forEach((element) => {

        let div = document.createElement("div");
        div.setAttribute("class","news")
        let title = document.createElement("h3");
        title.innerText = element.title;
        let description = document.createElement("p");
        description.innerText = element.description;

        let img = document.createElement("img");
        img.src = element.urlToImage;

        div.addEventListener('click', () => {
            let news = JSON.parse(localStorage.getItem('news'));
            news.push(element);
            localStorage.setItem('news', JSON.stringify(news));
            window.location.href = 'news.html';
        })

        div.append(title, description, img);

        container.append(div);

    })

}

let enter = document.getElementById("search_input");
enter.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        let query=document.getElementById("search_input").value
             localStorage.setItem("query",JSON.stringify(query))
             window.location.href='search.html';
    }
});


//this function is used when we declare onkeydown=search(event) in search box
// function search(e){
//     if(e.key=="Enter"){
//         let query=document.getElementById("search_input").value
//         localStorage.setItem("query",JSON.stringify(query))
//         window.location.href='search.html';
//     }
// }



const sidebar=document.getElementById("sidebar");
sidebar.addEventListener("click",function(e){
    cCearch(e.target.id)
})
//console.log(sidebar.target)




async function cCearch(e) {

    //let query = document.getElementById("sidebar").value;
    console.log(e)

    let response = await fetch(
        `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${e}`
    );
    let data = await response.json();
    showNews(data.articles);
    //displayNews(data.articles);
   // console.log(data.articles);


}
//cCearch();

