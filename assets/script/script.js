const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const text = card.querySelector('p');
    const image = card.querySelector('img');

    card.addEventListener('mouseenter', () => {
        text.style.color = '#1D1128';
        image.style.height = '10vh';
    });

    card.addEventListener('mouseleave', () => {
        text.style.color = 'white';
        image.style.height = '8.7037vh';
    });
});
function toggleButtons(selected) {
    const privateBtn = document.getElementById('privateBtn');
    const businessBtn = document.getElementById('businessBtn');

    if (selected === 'private') {
        privateBtn.classList.add('active');
        privateBtn.classList.remove('inactive');
        businessBtn.classList.add('inactive');
        businessBtn.classList.remove('active');
    } else {
        privateBtn.classList.add('inactive');
        privateBtn.classList.remove('active');
        businessBtn.classList.add('active');
        businessBtn.classList.remove('inactive');
    }
}
window.onload = function () {
    const privateBtn = document.getElementById('privateBtn');
    const businessBtn = document.getElementById('businessBtn');


    toggleButtons('private');

    privateBtn.style.visibility = 'visible';
    businessBtn.style.visibility = 'visible';
};
const slider = document.getElementById('colorSlider');

slider.addEventListener('input', function () {
    const value = this.value;
    const max = this.max;

    const percentage = (value / max) * 100;


    this.style.background = `linear-gradient(to right, var(--color-color3) ${percentage}%, var(--color-color4) ${percentage}%)`;
});

const slider1 = document.getElementById('colorSlider1');

slider1.addEventListener('input', function () {
    const value = this.value;
    const max = this.max;


    const percentage = (value / max) * 100;


    this.style.background = `linear-gradient(to right, var(--color-color3) ${percentage}%, var(--color-color4) ${percentage}%)`;
});


slider.dispatchEvent(new Event('input'));
function toggleSwitch() {
    const toggle = document.getElementById('toggle');
    toggle.children[0].classList.toggle('toggle-circle-active');
}
slider.dispatchEvent(new Event('input'));
function toggleSwitch1() {
    const toggle = document.getElementById('toggle1');
    toggle.children[0].classList.toggle('toggle-circle-active1');
}
document.getElementById('burger').addEventListener('click', function () {
    const nav = document.getElementById('nav-header');
    nav.classList.toggle('active');
});

const btn1 = document.querySelector('.calculate-btn-1');
const btn2 = document.querySelector('.calculate-btn-2');


btn1.addEventListener('click', () => {
    btn1.classList.add('active');
    btn2.classList.remove('active');
});


btn2.addEventListener('click', () => {
    btn2.classList.add('active');
    btn1.classList.remove('active');
});

const range1 = document.getElementById('colorSlider');
const range2 = document.getElementById('colorSlider1');
const monthlyPaymentDisplay = document.querySelector('.c-b-r-t-2');
const sum = document.querySelector('.sum');
const mon = document.querySelector('.mon');


function calculateMonthlyPayment() {
    const amount = parseInt(range1.value) * 100000;
    const months = parseInt(range2.value) * 1;


    const interestRate = 0.05;


    if (amount > 0 && months > 0) {
        const monthlyPayment = (amount / 10 * interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -months));
        monthlyPaymentDisplay.textContent = Math.round(monthlyPayment) + ' ₽';
        sum.textContent = formatAmount(amount);
        mon.textContent = formatMonths(months);
    } else {

        monthlyPaymentDisplay.textContent = '3150 ₽';
        sum.textContent = '100 тыс ₽';
        mon.textContent = '10 месяцев';
    }
}


function formatAmount(amount) {
    if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1) + ' млн ₽';
    } else {
        return (amount / 1000).toFixed(0) + ' тыс ₽';
    }
}


function formatMonths(months) {
    const years = months / 12;

    if (years < 1) {
        return '10 месяцев';
    } else {
        if (years < 5) {
            return Math.round(years) + ' год';
        } else {
            return Math.round(years) + ' лет';
        }
    }
}


range1.addEventListener('input', calculateMonthlyPayment);
range2.addEventListener('input', calculateMonthlyPayment);


calculateMonthlyPayment();
function showAlert() {
    alert("Сайт находится в разработке. Пожалуйста, вернитесь позже.");
}