document.getElementById('burger').addEventListener('click', function () {
	const nav = document.getElementById('nav-header');
	nav.classList.toggle('active');
});

function updateDateTime() {
	const now = new Date();
	const optionsTime = { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Moscow' };
	const optionsDate = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Moscow' };

	const timeString = now.toLocaleTimeString('ru-RU', optionsTime);
	const dateString = now.toLocaleDateString('ru-RU', optionsDate);

	document.getElementById('current-time').textContent = timeString;
	document.getElementById('current-date').textContent = dateString;
}


updateDateTime();
function showAlert() {
	alert("Сайт находится в разработке. Пожалуйста, вернитесь позже.");
}