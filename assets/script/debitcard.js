document.getElementById('burger').addEventListener('click', function () {
	const nav = document.getElementById('nav-header');
	nav.classList.toggle('active');
});
function showAlert() {
	alert("Сайт находится в разработке. Пожалуйста, вернитесь позже.");
}