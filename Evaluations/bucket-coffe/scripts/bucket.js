let buckets = JSON.parse(localStorage.getItem("coffee"));

let total_price=0;

buckets.forEach(function(elem,index){
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
    total_price=total_price+elem.price;
    Cprice.setAttribute("id","cprice")

    let remove =  document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click",function(){
        funremove(elem,index);
    })    
    

    box.append(Cimage,Cname,Cprice,remove);
    document.getElementById("bucket").append(box);
})
document.getElementById("total_amount").append(total_price);


function funcheck(){
    window.location.href="checkout.html";
}

function funremove(elem,index){
    buckets.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(buckets))
    window.location.reload();
 }