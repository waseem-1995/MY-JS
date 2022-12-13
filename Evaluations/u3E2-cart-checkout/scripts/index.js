// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

async function getData(){
    
        
        let res= await fetch(` https://grocery-mock-api.herokuapp.com/items`);
        let items=await res.json();
        let actual_data=items.data
       // console.log(actual_data)
       appendgroccery(actual_data)
    
}
getData()

let data=JSON.parse(localStorage.getItem("items"))||[]
let count=document.getElementById("item_count")
count.innerText=data.length;

//console.log(data)
function appendgroccery(items){
    console.log(items)
    let data_div=document.getElementById("items")
    //data_div.innerHTML=null;

    items.forEach(function(el){
        let div=document.createElement("div");
        let p_name=document.createElement("p")
        p_name.innerHTML=`Name:${el.name}`;


        let p_price=document.createElement("p");
        p_price.innerHTML=`Year:${el.price}`;

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button")
        btn.innerText="Add to cart";
        btn.setAttribute("class","add_to_cart")
        btn.addEventListener("click",function(){
            
            data.push(el)
            
            
            localStorage.setItem("items", JSON.stringify(data));
            //let data=JSON.parse(localStorage.getItem("items"))||[]
//let count=document.getElementById("item_count")
count.innerText=data.length;
            
           
        })

        div.append(img,p_name,p_price,btn);
        data_div.append(div)
    })
}

