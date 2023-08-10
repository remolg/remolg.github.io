let yaz = document.querySelector('.sonuc')



for (let i = 0; i <= 9; i++) {
    document.querySelector('#number' + i).addEventListener('click', function () {
        yaz.value += this.innerText;

    })
}

const toplaBtn = document.querySelector('#plus');
const temizleBtn = document.querySelector('#ac');
const bolBtn = document.querySelector('#division');
const carpBtn = document.querySelector('#multiplication');
const eksiBtn = document.querySelector('#extraction');
const hesaplaBtn = document.querySelector('#equal');
const yuzdeBtn = document.querySelector('#percent');

bolBtn.addEventListener('click', function () {
    toplaBtn.disabled = true;
    carpBtn.disabled = true;
    eksiBtn.disabled = true;
    yuzdeBtn.disabled = true;

    operator = this.innerText
    yaz.value += this.innerText;
});


carpBtn.addEventListener('click', function () {
    toplaBtn.disabled = true;
    eksiBtn.disabled = true;
    yuzdeBtn.disabled = true;
    bolBtn.disabled = true;

    operator = this.innerText
    yaz.value += this.innerText;
});

eksiBtn.addEventListener('click', function () {
    toplaBtn.disabled = true;
    carpBtn.disabled = true;
    yuzdeBtn.disabled = true;
    bolBtn.disabled = true;

    operator = this.innerText
    yaz.value += this.innerText;

});

toplaBtn.addEventListener('click', function () {
    bolBtn.disabled = true;
    carpBtn.disabled = true;
    eksiBtn.disabled = true;
    yuzdeBtn.disabled = true;
    bolBtn.disabled = true;

    operator = this.innerText
    yaz.value += this.innerText;
});

hesaplaBtn.addEventListener('click', function () {
    let numbersToCalc = yaz.value.split(operator);

    let result = 0;



    switch (operator) {
        case '+':
            for (let number of numbersToCalc) {
                result += Number(number);
            }
            break;
        case '-':
            let a = yaz.value.split(operator)[0];
            let b = yaz.value.split(operator)[1];

            result = a - b;
            break;
        case 'x':
            let c = yaz.value.split(operator)[0];
            let d = yaz.value.split(operator)[1];

            result = c * d;
            break;
        case '÷':
            let e = yaz.value.split(operator)[0];
            let f = yaz.value.split(operator)[1];

            result = e / f;
            break;
        case '%':
            let g = yaz.value.split(operator)[0];
            let h = yaz.value.split(operator)[1];

            result = (g * h) / 100;
            break;
        default:

            break;

    }

    yaz.value = result;

    operator = '';


    toplaBtn.disabled = false;
    carpBtn.disabled = false;
    eksiBtn.disabled = false;
    bolBtn.disabled = false;
    yuzdeBtn.disabled = false;
});

yuzdeBtn.addEventListener('click', function () {
    toplaBtn.disabled = true;
    carpBtn.disabled = true;
    eksiBtn.disabled = true;
    bolBtn.disabled = true;

    operator = this.innerText
    yaz.value += this.innerText;
});

temizleBtn.addEventListener('click', function () {
    toplaBtn.disabled = false;
    carpBtn.disabled = false;
    eksiBtn.disabled = false;
    bolBtn.disabled = false;
    yuzdeBtn.disabled = false;

    operator = ' ';
    yaz.value = ' ';
});

