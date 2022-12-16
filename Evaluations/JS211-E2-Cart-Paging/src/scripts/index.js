let page=1;
const url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10"
async function getData(page){
    let res=await fetch(`${url}&page=${page}`)
    let items=await res.json();
    let actual_data=items.data
    console.log(actual_data)
    append(actual_data)
    let prebtn=document.getElementById("previous");
    if(page===1)
    prebtn.disabled=true;
    let nextbtn=document.getElementById("next");
    if(page===4)
    nextbtn.disabled=true;
}
getData(page)

let data=JSON.parse(localStorage.getItem("cart"))||[]
let count=document.getElementById("cart_count")
count.innerText=data.length

function append(items){
    console.log(items)
    let data_div=document.getElementById("main_items")
    data_div.innerHTML=null;

    items.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","item")
        let p_name=document.createElement("p")
        p_name.innerHTML=`Name:${el.title}`;

        let p_price=document.createElement("p");
        p_price.innerHTML=`Year:${el.price}`;

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button")
        btn.innerText="Add to cart";
        btn.setAttribute("class","add_to_cart")
        btn.addEventListener("click",function(){
            
            data.push(el)
            localStorage.setItem("cart", JSON.stringify(data));
            count.innerText=data.length;
        
        })

        div.append(img,p_name,p_price,btn);
        data_div.append(div)
    })
}



let previous=()=>{
    console.log("before",page)
    let prebtn=document.getElementById("previous");
    let nextbtn=document.getElementById("next");
     if(page===1){
            prebtn.disabled=true;
      }else{
            prebtn.disabled=false;
            page--;
      }
      console.log("after",page)
   nextbtn.disabled=false;
    getData(page)
}


let next=()=>{
    console.log("before",page)
    let prebtn=document.getElementById("previous");
    let nextbtn=document.getElementById("next");
     if(page===4){
            nextbtn.disabled=true;
    }else{
            nextbtn.disabled=false;
            page++;
    }
    prebtn.disabled=false;
    console.log("after",page)
    getData(page)
};






