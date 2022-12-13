let arr=JSON.parse(localStorage.getItem("purchase"))||[]

let data=JSON.parse(localStorage.getItem("user"))



wallet_balance.innerText=data.wallet

let container=document.getElementById("purchased_vouchers")
function append(arr){
    arr.forEach(function(el){
        let div=document.createElement("div")

        let img=document.createElement("img");
        img.src=el.image
    
        let name=document.createElement("p")
        name.innerText=el.name
    
        let price=document.createElement("p")
        price.innerText=el.price
    
        div.append(img,name,price)
        container.append(div)
    
    })
   
}
append(arr)