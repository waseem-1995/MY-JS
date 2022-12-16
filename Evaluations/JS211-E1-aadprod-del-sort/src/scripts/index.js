
function getInputData(event){
  event.preventDefault()
  let form=document.querySelector("mobile_form")
   let brand=document.getElementById("mobile_brand").value;
   let name=document.getElementById("mobile_name").value;
   let price=document.getElementById("mobile_price").value;
   let image=document.getElementById("mobile_image").value;

    addData(name, brand, price, image)


   
}
// document.querySelector("mobile_form").addEventListener("submit",getdata);
function addData(name, brand, price, image) {
  let p= {
    name,
    brand,
    price,
    image,
   };

   let data=JSON.parse(localStorage.getItem("mobile_data"))||[];
   data.push(p)
   console.log(data)
   localStorage.setItem("mobile_data",JSON.stringify(data))

   brand.value="",
   name.value="",
   price.value="",
   image.value=""
   //document.getElementById("mobile_form").reset();
   //can use both
  
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    addData,
  };
}