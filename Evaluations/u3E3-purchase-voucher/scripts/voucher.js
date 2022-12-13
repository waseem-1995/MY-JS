async function getData(){
    
        
    let res= await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
    let data=await res.json();
   let actual_data=data[0].vouchers

   console.log(actual_data)
   append(actual_data)

}
getData()



let user=JSON.parse(localStorage.getItem("user"))
//let data=JSON.parse(localStorage.getItem("purchase"))||[]
function append(data){
    //console.log(data)
    

console.log(user.wallet)
wallet_balance.innerHTML=user.wallet

     let data_div=document.getElementById("voucher_list")
     data_div.innerHTML=null;

    data.forEach(function(el){
      let div=document.createElement("div");
      div.setAttribute("class","voucher")

      let name=document.createElement("p")
        name.innerHTML=el.name


       let price=document.createElement("p");
       price.innerHTML=el.price

       let img=document.createElement("img");
       img.src=el.image

       let btn=document.createElement("button")
       btn.innerText="Buy";
        btn.setAttribute("class","buy_voucher")
         btn.addEventListener("click",function(){

          purchase(el)

                       
         // localStorage.setItem("purchase", JSON.stringify(el));
         
        })

      div.append(img,name,price,btn);
      data_div.append(div)

    })
}

let arr=JSON.parse(localStorage.getItem("purchase"))||[]
console.log(arr)
 function purchase(el){
  if(user.wallet<el.price){
    alert("insufficient")
  }else{
    alert("hurray")
    user.wallet=user.wallet-el.price;
    localStorage.setItem("user", JSON.stringify(user));
    
    
    arr.push(el)

     localStorage.setItem("purchase", JSON.stringify(arr));
    getData()
  }
 }