
function bucket(){
    window.location.href="bucket.html";
}

let URL = `https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(URL).then(function(res){
    res.json().then(function(res){
        console.log(res.menu.data)
       appendcoffee(res.menu.data);
    })
})
.catch(function(err){
    console.log("error")
});


function appendcoffee(data){
    let arr= JSON.parse(localStorage.getItem("coffee")) || [];
    
   data.forEach(function(elem){
    
    let box = document.createElement("div");
    box.setAttribute("id","box");

    let Cimage = document.createElement("img");
    Cimage.src = elem.image; 
    Cimage.setAttribute("id","cimage")

    let Cname = document.createElement("h2");
    Cname.innerText= elem.title;
    Cname.setAttribute("id","cname")

    let Cprice = document.createElement("p");
    Cprice.innerText ="Price:"+ elem.price;
    Cprice.setAttribute("id","cprice")
    
    let add_to_bucket = document.createElement("button")
    add_to_bucket.innerText= "Add to Bucket"
    add_to_bucket.setAttribute("id","addbucket")
    add_to_bucket.addEventListener("click",funclick);
    function funclick(){
        arr.push(elem);
         localStorage.setItem("coffee",JSON.stringify(arr))
         console.log(count)
    }
   
    box.append(Cimage,Cname,Cprice,add_to_bucket);
    document.getElementById("menu").append(box);
        })
}


