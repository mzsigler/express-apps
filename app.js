const taxCalcNav = document.getElementById("taxBtn");
const greetingDiv = document.getElementById('greeting');
const taxCalcDiv = document.getElementById("taxCalc");
const balDueButton = document.getElementById("balDueBtn");


taxCalcNav.addEventListener("click", function() {
    taxCalcNavClick();
});



function taxCalcNavClick() {
  greetingDiv.style.display = 'none';
  balDue.style.display = 'none';
  taxCalcDiv.style.display = 'flex';

};

function balDueClick() {
  greetingDiv.style.display = 'none';
  taxCalcDiv.style.display = 'none';
  balDue.style.display = 'flex';
}

function taxCalcClear() {
    const results = document.getElementById('taxResults');
    results.innerText = "";
}

const calcInput = document.getElementById("taxInput");
const calcButton = document.getElementById("calculate");

function calculateTax() {
    taxCalcClear();
    const inputValue = calcInput.value;
    const salePrice = parseInt(inputValue);
    const results = document.getElementById('taxResults');
    const p = document.createElement("p");

    if (isNaN(salePrice)) {
        p.innerText = `That is not a number, my dude.`;
        results.appendChild(p);
        
    } else {
        let stateTax = salePrice * .07;
        p.innerText+= `State Tax: $${stateTax.toFixed(2)}
    `

    if (salePrice > 1599) {
        var localTax = 44.00;
        p.innerText+= `Local Tax: $${localTax.toFixed(2)}
        `    };
    
    if (salePrice <= 1599) {
        var localTax = salePrice * .0275;
        p.innerText+= `Local Tax: $${localTax.toFixed(2)}
        `
    };

    if (salePrice <= 1600) {
        var singleArticle = 0.00;
        p.innerText+= `Single Article Tax: $${singleArticle.toFixed(2)}
        `
    }
    if (salePrice > 3200) {
        var singleArticle = 44.00;
        p.innerText+= `Single Article Tax: $${singleArticle.toFixed(2)}
        `
    }

    if (salePrice >= 1600.01 && salePrice <=3200) {
        var singleArticle = (salePrice - 1600) * 0.0275;
        p.innerText+= `Single Article Tax: $${singleArticle.toFixed(2)}
        `
    }

    let totalLocalTax = localTax + singleArticle;
    p.innerText+= `Total Local Tax: $${totalLocalTax.toFixed(2)}
    `

    let totalTax = totalLocalTax + stateTax;
    p.innerText+= `Total Tax: $${totalTax.toFixed(2)}
    `

    let totalPrice = totalTax + salePrice;
    p.innerText+= `Total Price: $${totalPrice.toFixed(2)}
    `

    results.appendChild(p);
    }



}

calcButton.addEventListener('click', function(){
    calculateTax();
});

balDueButton.addEventListener("click", function() {
    balDueClick();
})