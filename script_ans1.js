'use strict';

document.getElementById('exeBtn').addEventListener('click', () => {
    document.getElementById('output-area').textContent = null;

    const fizz = parseFloat(document.getElementById('fizz').value);
    const buzz = parseFloat(document.getElementById('buzz').value);

    let word = '';
    if(Number.isInteger(fizz) && Number.isInteger(buzz)) {
        for(let i = 1; i < 100; i++){
            if(i % fizz === 0 && i % buzz === 0){
                word = word + `FizzBuzz ${i}<br>`;
            } else if(i % fizz === 0) {
                word = word + `Fizz ${i}<br>`;
            } else if(i % buzz === 0) {
                word = word + `Buzz ${i}<br>`;
            } else {
                continue;
            }
        };
    } else {
        word = '整数値を入力してください';
    }
    
    document.getElementById('output-area').insertAdjacentHTML('afterbegin',`<p>${word}</p>`);
});
