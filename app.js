const API_URL = "https://free.currconv.com/api/v7";
const ACCESS_KEY ="b12a6953b1207140aa3f";
const fromSelectList = document.getElementById('from');
const amount = document.getElementById('amount');
const toSelectList = document.getElementById('to');
const convertBtn = document.getElementById('convertBtn');

function addCurrencyList(currenciesObj){
    for(let key in currenciesObj){
        const currenctId = currenciesObj[key].id;
        const currencyName = currenciesObj[key].currencyName;
        addCurrenciesToSelectList(currenctId,currencyName);
    }
}

function addCurrenciesToSelectList(key, value){
    toSelectList.insertAdjacentHTML("beforeend", `<option value=${key}>${value}</option>`);
    fromSelectList.insertAdjacentHTML("beforeend", `<option value=${key}>${value}</option>`);
}

function getResult(from, to, amountValue){
    const query = from + '_'+to;
    fetch(API_URL+"/convert?q="+query+"&compact=ultra&apiKey="+ACCESS_KEY)
    .then(response => response.json())
    .then(data => showResult(data,amountValue,query));
}

function showResult(resultObj, amountValue, query){
    const result = document.getElementById('result');
    const currencies = query.split("_");
    const from = currencies[0];
    const to = currencies[1];
    result.innerText = `${amountValue} ${from} = ${Math.round(resultObj[query]*amountValue * 100) / 100} ${to}`;
}
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(`https://free.currconv.com/api/v7/currencies?apiKey=b12a6953b1207140aa3f`)
    .then(response => response.json())
    .then(data => addCurrencyList(data.results))
})
convertBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const fromValue = fromSelectList.value;
    const toValue = toSelectList.value;
    const amountValue = amount.value;
    getResult(fromValue, toValue, amountValue);
})