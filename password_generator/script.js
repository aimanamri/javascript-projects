const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('pw-length');
const upperEl = document.getElementById('pw-upper');
const lowerEl = document.getElementById('pw-lower');
const numberEl = document.getElementById('pw-numbers');
const symbolEl = document.getElementById('pw-symbols');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,./<>?';

function getLowercase(){
    // return console.log(lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length)));
    return lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length));

}

function getUppercase(){
    // return console.log(upperLetters.charAt(Math.floor(Math.random() * upperLetters.length)));
    return upperLetters.charAt(Math.floor(Math.random() * upperLetters.length));

}
function getNumber(){
    // return console.log(numbers.charAt(Math.floor(Math.random() * numbers.length)));
    return numbers.charAt(Math.floor(Math.random() * numbers.length));

}

function getSymbol(){
    // return console.log(symbols.charAt(Math.floor(Math.random() * symbols.length)));
    return symbols.charAt(Math.floor(Math.random() * symbols.length));

}

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);

// ***Cannot be used as execCommand()has been deprecated in year 2022***
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("excecCommand() has been deprecated.");
});