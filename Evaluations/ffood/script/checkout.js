 function alerts(){
    
   let house=document.getElementById('house').value;
   let street=document.getElementById("street").value;
   let district=document.getElementById("district").value;
   if(house!="" && street!=null && district!=null){
       setTimeout(function(){
        alert('YOUR ORDER IS ACCEPTED')
       },3000)
       setTimeout(function(){
           alert("YOUR ORDER IS BEING COOKED")
       },8000)
       setTimeout(function(){
           alert("YOUR ORDER IS READY")
       },10000)
       setTimeout(function(){
           alert("ORDER IS OUT FOR DELIVERY")
       },12000);
       setTimeout(function(){
           alert("ORDER DELIVERED")
       },14000)
   }
   else{
       alert("PLease fill Completely")
   }
 }