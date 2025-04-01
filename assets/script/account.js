document.getElementById('burger').addEventListener('click', function () {
	const nav = document.getElementById('nav-header');
	nav.classList.toggle('active');
});
const navLinks = document.querySelectorAll('.account-nav-box nav a');

navLinks.forEach(link => {
	link.addEventListener('click', function (event) {

		navLinks.forEach(nav => nav.classList.remove('active-1'));

		this.classList.add('active-1');
	});
});
const toggleButton = document.getElementById('currency-toggle');
const dropdown = document.getElementById('currency-dropdown');
const selectedCurrency = document.getElementById('selected-currency');


toggleButton.addEventListener('click', () => {
	dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});


document.querySelectorAll('.currency-option').forEach(option => {
	option.addEventListener('click', () => {
		selectedCurrency.textContent = option.getAttribute('data-currency');
		dropdown.style.display = 'none';
	});
});

window.addEventListener('click', (event) => {
	if (!toggleButton.contains(event.target) && !dropdown.contains(event.target)) {
		dropdown.style.display = 'none';
	}
});
const amountDisplay = document.getElementById('amount');
const amount2 = document.getElementById('amount2');


document.querySelectorAll('.currency-option').forEach(option => {
	option.addEventListener('click', () => {
		const currencySymbol = option.getAttribute('data-currency');

		selectedCurrency.textContent = currencySymbol;
		amountDisplay.textContent = '100,00 ' + currencySymbol;
		amount2.textContent = '100,00 ' + currencySymbol;
		dropdown.style.display = 'none';
	});
});
function showAlert() {
	alert("Сайт находится в разработке. Пожалуйста, вернитесь позже.");
}
