
const advice = document.querySelector('.msg');
const adviceId = document.querySelector('span');
const btn = document.querySelector('.advicer');

btn.addEventListener('click', adGen)

function adGen() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            advice.textContent = data.slip.advice
            adviceId.textContent = data.slip.id
        });


}