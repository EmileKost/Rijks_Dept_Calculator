'use strict';

let deptInput = document.querySelector('#dept-input');
let timeInput = document.querySelector('#years-input')
let deptLabel = document.querySelector('#dept-label');
const deptForm = document.querySelector('#dept-form');
const refreshButton = document.querySelector('#refresh');
let errorMessage = document.querySelector('.error-message');

deptInput.addEventListener('change', () => {
    if(deptInput.value > 80_000) {
        deptLabel.innerHTML = 'Maximum van $80.000';
        deptLabel.style.color = 'red';
    } 
})

deptForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(!deptInput.value || !timeInput.value) {
        errorMessage.textContent = 'Vul alle velden in';
        return null;
    }
    if(deptInput.value > 80_000) {
        errorMessage.textContent = 'Maximum bedrag van 80.000';
        return null;
    }
    if(deptInput.value && timeInput.value) {
        errorMessage.textContent = "";
        calculateMonthlyDept(deptInput.value, timeInput.value);
    }
  
})

function calculateMonthlyDept(dept, time) {
    let monthlyDept = dept / time / 12;
    monthlyDept = monthlyDept.toFixed(2);
    displayResult(monthlyDept)
    return monthlyDept;
}

function displayResult(amount) {
    let resultText = document.querySelector('.result-amount');
    let resultContainer = document.querySelector('.result-container');
    resultContainer.classList.toggle('none');
    resultText.textContent = `${amount} euro per maand`;
}

function init() {
    let resultContainer = document.querySelector('.result-container');
    resultContainer.classList.toggle('none');
    document.querySelector('#dept-input').value = '';
    document.querySelector('#years-input').value = '';
}

refreshButton.addEventListener('click', init);

