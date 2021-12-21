const numButtons = document.querySelectorAll('.number')
const displayDiv = document.querySelector('.display')
const opeButtons = document.querySelectorAll('.operator')
const eqButton = document.querySelector('.equal')
let currentNumber = [];
let passToCount = []
let operator = false;


function handleNumbers(e){
    currentNumber.push(e.target.innerText)
    const intNumber = parseInt(currentNumber.join(''))
    displayDiv.innerText = (intNumber);
    // console.log(currentNumber);
    // console.log(intNumber);
};


function handleOperation(e){
    operator = true
    let total = 0
    let lastOperator = e.target.innerHTML
    // if(lastOperator === '='){
    //     return total
    // }
    const operatorOptions = {
        '+': function(a,b) {return a+b},
        '-': function(a,b) {return a-b},
        '*': function(a,b) {return a*b},
        '/': function(a,b) {return a/b},
    }
    console.log(e.target.innerHTML);
    if(currentNumber.length === 0){
        return
    }
    const workingNum = parseInt(currentNumber.join(''))
    // console.log(workingNum);
    passToCount.push(workingNum)
    console.log(passToCount);
    currentNumber.length = 0;
    if(passToCount.length === 2){
         passToCount.reduce(function(prevVal, currentVal){
            return total = operatorOptions[lastOperator](prevVal,currentVal);
        });
        passToCount.length = 0
        passToCount.push(total);
    }
    console.log(total);
    return total
}

function handleEqual(total){
    // console.log(total);
    // displayDiv.innerText = total
}


opeButtons.forEach((button)=>button.addEventListener('click', handleOperation));
numButtons.forEach((button)=> button.addEventListener('click', handleNumbers));
eqButton.addEventListener('click', handleEqual);