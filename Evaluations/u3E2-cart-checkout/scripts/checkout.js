/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/
function order(){

    setTimeout (function(){
        alert("Your order is accepted ")
    },0000)

    setTimeout (function(){
        alert(" Your order is being Packed")
    },3000)

    setTimeout (function(){
        alert("Your order is in transit ")
    },8000)

    setTimeout (function(){
        alert("Your order is out for delivery  ")
    },10000)

    setTimeout (function(){
        alert(" Order delivered")
    },12000)
}

// function order()
//   {
//     alert("order id accepted");

//     setTimeout(find(),3000);
//     setTimeout(find2(),8000);
//     setTimeout(find3(),1000)
//     setTimeout(find4,12000)

//     function find()
//     {
//       alert("your order is being coocked")
//     }
//     function find2()
//     {
//       alert("Your order is ready 10 seconds")
//     }
//     function find3()
//     {
//       alert("Order out for delivery")
//     }
//     function find4()
//     {
//       alert(" Order delivered")
//     }
   
//   }