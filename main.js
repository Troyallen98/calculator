 const calculator = document.querySelector('.calculator');
 const keys = calculator.querySelector('.calculator-keys');
 const display = calculator.querySelector('.calculator-display');
 keys.addEventListener('click', event => {
    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
   

//checks for string 0 instead of number zero because 0 is a string. this prevent concatination of 0
   
    if (key.classList.contains('number')) {
        if (displayValue === '0') {
            display.textContent = keyValue;
        } 
       // else if (console.log(key) === 'operation'){
       //     display.textContent = keyValue;
       // }
        else {
            display.textContent = displayValue + keyValue;
        }
    }
        
    if (key.classList.contains('operation')) {
        console.log(key);
    } 
})
