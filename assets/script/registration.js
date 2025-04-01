$(document).ready(function () {

	$('#date').mask('00.00.0000');


	$('.calendar-icon').on('click', function () {
		$('#date').datepicker({
			dateFormat: 'dd.mm.yy',
			onSelect: function (dateText) {
				$('#date').val(dateText);
			}
		}).datepicker('show');
	});
});
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function () {

	let input = this.value.replace(/\D/g, '');


	if (input.startsWith('8')) {
		input = '7' + input.slice(1);
	}


	if (input.length > 11) {
		input = input.slice(0, 11);
	}


	let formattedNumber = '';
	if (input.length > 0) {
		formattedNumber += '+7';
	}
	if (input.length > 1) {
		formattedNumber += '(' + input.slice(1, 4);
	}
	if (input.length >= 4) {
		formattedNumber += ') ' + input.slice(4, 7);
	}
	if (input.length >= 7) {
		formattedNumber += '-' + input.slice(7, 9);
	}
	if (input.length >= 9) {
		formattedNumber += '-' + input.slice(9, 11);
	}

	this.value = formattedNumber;
});

const pass = document.getElementById('pass');

pass.addEventListener('input', function () {

	let input = this.value.replace(/\D/g, '');


	if (input.length > 10) {
		input = input.slice(0, 10);
	}


	let formattedNumber = '';
	if (input.length > 0) {
		formattedNumber += input.slice(0, 4);
	}
	if (input.length > 4) {
		formattedNumber += ' ' + input.slice(4);
	}

	this.value = formattedNumber;
});

function toggleSelection(element) {
	const boxes = document.querySelectorAll('.reg-method-box');
	boxes.forEach(box => {
		box.classList.add('r-m-b-2');
	});

	element.classList.remove('r-m-b-2');
}

function showAlert() {
	alert("Сайт находится в разработке. Пожалуйста, вернитесь позже.");
}