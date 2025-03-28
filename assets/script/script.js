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
window.onload = function() {
	const privateBtn = document.getElementById('privateBtn');
	const businessBtn = document.getElementById('businessBtn');


	toggleButtons('private');

	privateBtn.style.visibility = 'visible';
	businessBtn.style.visibility = 'visible';
};
const slider = document.getElementById('colorSlider');

slider.addEventListener('input', function() {
	const value = this.value;
	const max = this.max;

	const percentage = (value / max) * 100;


	this.style.background = `linear-gradient(to right, var(--color-color3) ${percentage}%, var(--color-color4) ${percentage}%)`;
});

const slider1 = document.getElementById('colorSlider1');

slider1.addEventListener('input', function() {
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
document.getElementById('burger').addEventListener('click', function() {
	const nav = document.getElementById('nav-header');
	nav.classList.toggle('active');
});
