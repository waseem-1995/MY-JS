function signup(n,e,a,w){
    this.name=n;
    this.email=e;
    this.address=a;
    this.wallet=w;
}
 
function submit(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let wallet=document.getElementById("amount").value;
    
   let s1=new signup(name,email,address,wallet)
   
    localStorage.setItem("user",JSON.stringify(s1))


    document.getElementById("name").value=null
    document.getElementById("email").value=null
    document.getElementById("address").value=null
    document.getElementById("amount").value=null

}
