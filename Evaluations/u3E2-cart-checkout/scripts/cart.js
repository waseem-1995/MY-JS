let data=JSON.parse(localStorage.getItem("items"))||[]
//console.log(data)
// arr=[]
// arr.push(items)
// console.log(items)

let total = data.reduce(function (acc, el, i) {
    return acc + Number(el.price);
  }, 0);

  console.log(total);
  document.querySelector(
    "#cart_total"
).innerText = `₹ ${total} including taxes`

function appendcart(){
    
    let main_div=document.getElementById("cart")
    main_div.innerHTML=null;

    data.forEach(function(el,index){
        //console.log(data)
        let div=document.createElement("div");
        let name=document.createElement("p")
        name.innerHTML=`Name:${el.name}`;
       // console.log(name)
        let price=document.createElement("p");
        price.innerHTML=`Price:${el.price}`;

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button")
        btn.innerText="remove";
        btn.setAttribute("class","remove")
        btn.addEventListener("click",function(){
           deleteItem(index)
          
            
        })

        div.append(img,name,price,btn);
        main_div.append(div)
    })
}  
appendcart()
 
function deleteItem(index){
    data.splice(index,1);
   //console.log(data)
    localStorage.setItem("items",JSON.stringify(data));
  appendcart()
   
 }

//  let goo=document.getElementById("Checkout")
//  goo.addEventListener("click",function(){
//     go()
//  })


let go=()=>{
    window.location.href="checkout.html"
}