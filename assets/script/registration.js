$(document).ready(function() {
	// Маска для ввода даты
	$('#date').mask('00.00.0000');

	// Открытие календаря при нажатии на иконку
	$('.calendar-icon').on('click', function() {
		$('#date').datepicker({
			dateFormat: 'dd.mm.yy',
			onSelect: function(dateText) {
				$('#date').val(dateText);
			}
		}).datepicker('show');
	});
});