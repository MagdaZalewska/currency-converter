let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let currencyEUR = 4.7195;
let currencyUSD = 4.3833;
let currencyCHF = 4.7458;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount / currencyEUR;
            break;
        case "USD":
            result = amount / currencyUSD;
            break;
            case "CHF":
                result = amount / currencyCHF;
    }

    resultElement.innerText = result.toFixed(2);

});