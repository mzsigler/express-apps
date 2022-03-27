const taxCalcNav = document.getElementById("tax");
const greetingDiv = document.getElementById('greeting')
const taxCalcDiv = document.getElementById("taxCalc");

taxCalcNav.addEventListener("click", function() {
    taxCalcNavClick();
});



function taxCalcNavClick() {
  greetingDiv.style.display = 'none';
  taxCalcDiv.style.display = 'flex';

};

const calcInput = document.getElementById("taxInput");
const calcButton = document.getElementById("calculate");

function calculateTax() {
    const inputValue = calcInput.value;
    const salePrice = parseInt(inputValue);
    const results = document.getElementById('taxResults');
    const p = document.createElement("p");

    if (isNaN(salePrice)) {
        p.innerText = `That is not a number, my dude.`;
        results.appendChild(p);
        
    } else {
        let stateTax = salePrice * .07;
        p.innerText+= `State Tax is $${stateTax.toFixed(2)}
    `

    if (salePrice > 1599) {
        var localTax = 44.00;
        p.innerText+= `Local Tax is $${localTax.toFixed(2)}
        `    };
    
    if (salePrice <= 1599) {
        var localTax = salePrice * .0275;
        p.innerText+= `Local Tax is $${localTax.toFixed(2)}
        `
    };

    if (salePrice <= 1600) {
        var singleArticle = 0.00;
        p.innerText+= `Single Article Tax is $${singleArticle.toFixed(2)}
        `
    }
    if (salePrice > 3200) {
        var singleArticle = 44.00;
        p.innerText+= `Single Article Tax is $${singleArticle.toFixed(2)}
        `
    }

    if (salePrice >= 1600.01 && salePrice <=3200) {
        var singleArticle = (salePrice - 1600) * 0.0275;
        p.innerText+= `Single Article Tax is $${singleArticle.toFixed(2)}
        `
    }

    let totalLocalTax = localTax + singleArticle;
    p.innerText+= `Total Local Tax is $${totalLocalTax.toFixed(2)}
    `

    let totalTax = totalLocalTax + stateTax;
    p.innerText+= `Total Tax is $${totalTax.toFixed(2)}
    `

    let totalPrice = totalTax + salePrice;
    p.innerText+= `Total Price is $${totalPrice.toFixed(2)}
    `

    results.appendChild(p);
    }



}

calcButton.addEventListener('click', function(){
    calculateTax();
});