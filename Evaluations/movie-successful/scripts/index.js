// Store the wallet amount to your local storage with key "amount"

document.querySelector("#add_to_wallet").addEventListener("click", addToWallet);

var moneyInLocal = localStorage.getItem("amount") || 0;

function addToWallet(){
    var walletMoney = document.querySelector("#amount").value;
    moneyInLocal =  Number(moneyInLocal) + Number(walletMoney);
    console.log(typeof moneyInLocal)
    localStorage.setItem("amount", moneyInLocal);
    document.querySelector("#wallet").innerText = moneyInLocal;
}
document.querySelector("#wallet").innerText = moneyInLocal;





