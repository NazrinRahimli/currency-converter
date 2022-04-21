let right = document.querySelectorAll('.right');
let left = document.querySelectorAll('.left');
let amount2 = document.getElementById('amount2');
let amount1 = document.getElementById('amount1');
let button = document.querySelectorAll('button')
let livecurrency = document.getElementById('livecurrency'); 
let livecurrency2 = document.getElementById('livecurrency2'); 

let cur = 'USD';
let currency = "RUB";
let out;

right.forEach(event => {
    event.addEventListener('click', function(){
        cur = this.innerText
        getvalue()
    }) 
});

left.forEach(event => {
    event.addEventListener('click', function(){
        currency = this.innerText
        getvalue()
    }) 
});

const getvalue = async () => {
    await fetch(`https://api.exchangerate.host/latest?base=${currency}&symbols=${cur}`)
    .then(response => response.json())
    .then((data) => {
        out = Object.values(data.rates)[0]
        inputin()
    })
    
function same(){ 
    amount1.addEventListener('keyup', function(){ 
        amount2.value = amount1.value 
    }) 
}
    if ((cur == 'RUB') && (currency == 'RUB')) {
        amount2.value = amount1.value
        livecurrency.innerText = "1 RUB = " + out + ' RUB'  
        livecurrency2.innerText = "1 RUB = " + 1/out + ' RUB'
        same()
    }
    if ((cur == 'RUB') && (currency == 'EUR')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 RUB = " + out + ' EUR'  
        livecurrency2.innerText = "1 EUR = " + 1/out + ' RUB'
        inputin()
    }
    if ((cur == 'RUB') && (currency == 'USD')) {
        amount2.value = amount1.value * out 
        livecurrency.innerText = "1 RUB = " + out + ' USD'  
        livecurrency2.innerText = "1 USD = " + 1/out + ' RUB'
        inputin()
    }
    if ((cur == 'RUB') && (currency == 'AZN')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 RUB = " + out + ' AZN'  
        livecurrency2.innerText = "1 AZN = " + 1/out + ' RUB'
        inputin()
    }
    else if ((cur == 'USD') && (currency == 'USD')) {
        amount2.value = amount1.value
        livecurrency.innerText = "1 USD = " + out + ' USD'  
        livecurrency2.innerText = "1 USD = " + 1/out + ' USD'
        same()
    }
    else if ((cur == 'USD') && (currency == 'EUR')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 USD = " + out + ' EUR'  
        livecurrency2.innerText = "1 EUR = " + 1/out + ' USD'
        inputin()
    }
    else if ((cur == 'USD') && (currency == 'RUB')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 USD = " + out + ' RUB'  
        livecurrency2.innerText = "1 RUB = " + 1/out + ' USD'
        inputin()
    }
    else if ((cur == 'USD') && (currency == 'AZN')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 USD = " + out + ' AZN'  
        livecurrency2.innerText = "1 AZN = " + 1/out + ' USD'
        inputin()
    }
    else if ((cur == 'EUR') && (currency == 'EUR')) {
        amount2.value = amount1.value
        livecurrency.innerText = "1 EUR = " + out + ' EUR'  
        livecurrency2.innerText = "1 EUR = " + 1/out + ' EUR'
        same()
    }
    else if ((cur == 'EUR') && (currency == 'USD')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 EUR = " + out + ' USD'  
        livecurrency2.innerText = "1 USD = " + 1/out + ' EUR'
        inputin()
    }
    else if ((cur == 'EUR') && (currency == 'RUB')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 EUR = " + out + ' RUB'  
        livecurrency2.innerText = "1 RUB = " + 1/out + ' EUR'
        inputin()
    }
    else if ((cur == 'EUR') && (currency == 'AZN')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 EUR = " + out + ' AZN'  
        livecurrency2.innerText = "1 AZN = " + 1/out + ' EUR'
        inputin()
    }
    else if ((cur == 'AZN') && (currency == 'AZN')) {
        amount2.value = amount1.value
        livecurrency.innerText = "1 AZN = " + out + ' AZN'  
        livecurrency2.innerText = "1 AZN = " + 1/out + ' AZN'
        same()
    }
    else if ((cur == 'AZN') && (currency == 'EUR')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 AZN = " + out + ' EUR'  
        livecurrency2.innerText = "1 EUR = " + 1/out + ' AZN'
        inputin()
    }
    else if ((cur == 'AZN') && (currency == 'RUB')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 AZN = " + out + ' RUB'  
        livecurrency2.innerText = "1 RUB = " + 1/out + ' AZN'
        inputin()
    }
    else if ((cur == 'AZN') && (currency == 'USD')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = "1 AZN = " + out + ' USD'  
        livecurrency2.innerText = "1 USD = " + 1/out + ' AZN'
        inputin()
    }
    
}
function inputin(){ 
    amount1.addEventListener('keyup', function(){ 
        amount2.value = amount1.value * out 
        getvalue()
    }) 
}
right.forEach((event) => {
    event.addEventListener('click', function() {
        right.forEach((event) => {
            event.classList.remove('active')
            this.classList.add('active')
            
        })
    })
})

left.forEach((event) => {
    event.addEventListener('click', function() {
        left.forEach((event) => {
            event.classList.remove('active')
            this.classList.add('active')
        })
    })
})

function check() {
    left.forEach((item) => {
        item.classList.remove("active");
        if (currency == item.innerText) {
            item.classList.add('active');
            inputin()
        }
    })
    right.forEach((item) => {
        item.classList.remove("active");
        if(cur == item.innerText) {
            item.classList.add('active')
            inputin()
        }
    })
}
check()