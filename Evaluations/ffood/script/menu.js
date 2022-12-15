let dish_div=document.getElementById('dishes');

async function getData(){
    let url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`

    try{
        let res=await fetch (url)
       let info=await res.json()
       console.log(info)
       appendData(info);

    } 
    catch(err){
        console.log(err)
    }

}
getData();

function appendData(food){
    let dish_div=document.getElementById('dishes');
    let item_name=document.createElement('h3');
    item_name.textContent=food.meals[0].strMeal;
    let img=document.createElement('img');
   img.src=food.meals[0].strMealThumb
   let price=document.createElement('h2');
   price.textContent='450Rs'
   let addToCart=document.createElement("button")
   var t = document.createTextNode("ADD")
    addToCart.appendChild(t)
    addToCart.style.width='100px'
    addToCart.style.height='40px'
    addToCart.style.backgroundColor="#FF6347"
    addToCart.style.borderRadius='5px'
   addToCart.setAttribute("onclick","cart()")
    let plusdiv=document.createElement('div');
   plusdiv.style.border="1px"
    plusdiv.style.color="red"
    plusdiv.style.height="50px"
    plusdiv.style.width="100px"

    let goToCart=document.createElement("button")
    var t = document.createTextNode("GOT TO CART")
     goToCart.appendChild(t)
     goToCart.style.width='100px'
     goToCart.style.height='40px'
     goToCart.style.backgroundColor="#9ACD32"
     goToCart.style.borderRadius='5px'
    goToCart.setAttribute("onclick","goTocart()")
   dish_div.append(item_name,img,price,addToCart,plusdiv,goToCart)
}
let count=0;
function cart(){
    { 
    count++;
    let countBox=document.getElementById('count');
    countBox.textContent=count;
    countBox.style.fontSize="80px"
    countBox.style.borderRadius="5px"
    countBox.style.color="#FF6347"
    countBox.appendChild(count)
    }
    localStorage.setItem("totalValue",count)
  
    
}
function goTocart(){
    location.href="cart.html"
}


