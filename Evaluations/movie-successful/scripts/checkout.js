// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

document.querySelector("#wallet").innerText = localStorage.getItem("amount");


document.querySelector("#confirm").addEventListener("click", confirmTicket);

function confirmTicket(){
    var numberOfSeats = document.querySelector("#number_of_seats").value;

    var amount = numberOfSeats * 100;

    var wallet = localStorage.getItem("amount")

    if(amount > wallet){
        window.alert("Insufficient Balance !");
    }else{
        wallet = wallet - amount;

        document.querySelector("#wallet").innerText = wallet;
        localStorage.setItem("amount", wallet);

        window.alert("Booking Successful!");
    }
}

var selectedMovie = JSON.parse(localStorage.getItem("bookedMovie"));

selectedMovie.map(function(elem){
    let div = document.createElement("div");
   
    div.style.width = "30%";
    div.style.margin = "auto";
    div.style.textAlign = "center"
    
    let movieName = document.createElement("h1");
    movieName.innerText = elem.movieName;

    let img = document.createElement("img");
    img.src = elem.image;


    div.append(movieName, img);

    document.querySelector("#movie").append(div);
});