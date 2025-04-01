const choices = document.querySelectorAll('.group-of-choice');

choices.forEach(choice => {
	choice.addEventListener('click', () => {
		choices.forEach(c => c.classList.remove('active'));
		choice.classList.add('active');
	});
});
function showAlert() {
	alert("Сайт находится в разработке. Пожалуйста, вернитесь позже.");
}
