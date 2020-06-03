const API_URL = "http://api.currencylayer.com/";
const ACCESS_KEY ="7421bc79cc9ffa900eca4a37c8d104bd";
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(`https://free.currconv.com/api/v7/currencies?apiKey=b12a6953b1207140aa3f`)
    .then(response => response.json())
    .then(data => addCurrencyList(data.results))
})

function addCurrencyList(currenciesObj){
    console.log(currenciesObj);
    for(let key in currenciesObj){
        addCurrenciesToSelect(currenciesObj[key].id,currenciesObj[key].currencyName);
    }
}
const fromSelectList = document.getElementById('from');
const toSelectList = document.getElementById('to');
console.log(fromSelectList);
function addCurrenciesToSelect(key, value){
    toSelectList.insertAdjacentHTML("beforeend", `<option value=${key}>${value}</option>`);
    fromSelectList.insertAdjacentHTML("beforeend", `<option value=${key}>${value}</option>`);
}
