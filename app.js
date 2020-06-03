const API_URL = "https://free.currconv.com/api/v7";
const ACCESS_KEY ="b12a6953b1207140aa3f";
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
const amount = document.getElementById('amount');
const toSelectList = document.getElementById('to');
function addCurrenciesToSelect(key, value){
    toSelectList.insertAdjacentHTML("beforeend", `<option value=${key}>${value}</option>`);
    fromSelectList.insertAdjacentHTML("beforeend", `<option value=${key}>${value}</option>`);
}

const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const fromValue = fromSelectList.value;
    const toValue = toSelectList.value;
    const amountValue = amount.value;
    getResult(fromValue, toValue, amountValue);
})

function getResult(from, to, amount){
    const query = from + '_'+to;
    const configObj = {
        method : "POST",
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    fetch(API_URL+"/convert?q="+query+"&compact=ultra&apiKey="+ACCESS_KEY)
    .then(response => response.json())
    .then(data => console.log(data));
}