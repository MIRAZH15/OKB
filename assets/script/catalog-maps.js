document.getElementById('burger').addEventListener('click', function () {
	const nav = document.getElementById('nav-header');
	nav.classList.toggle('active');
});

const buttons = document.querySelectorAll('.catalog-maps-btn-box button');


buttons.forEach(button => {
	button.addEventListener('click', () => {

		buttons.forEach(btn => btn.classList.remove('active'));

		button.classList.add('active');
	});
});
function showAlert() {
	alert("Сайт находится в разработке. Пожалуйста, вернитесь позже.");
}