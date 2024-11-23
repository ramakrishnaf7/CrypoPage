var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

// var settings = {
//     "async": true,
//     "scrossDomain": true,
//     "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2CEthereum%2Cdogecoin&vs_currencies=inr","method":"GET","headers":{}
// }
// $.ajax(settings).done(function (response){
//     btc.innerHTML = response.bitcoin.inr;
//     eth.innerHTML = response.ethereum.inr;
//     doge.innerHTML = response.dogecoin.inr;
// });
async function fetchPrices() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=inr");
        const data = await response.json();
        btc.innerHTML = data.bitcoin.inr;
        eth.innerHTML = data.ethereum.inr;
        doge.innerHTML = data.dogecoin.inr;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchPrices();
