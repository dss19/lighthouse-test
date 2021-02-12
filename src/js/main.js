$(document).ready(function() {

	// Выпадающий список городов
	$('.select2').select2({
		placeholder: "Ваш город*",
    allowClear: true
	});

	// Кликер по инпуту цены доставки по всему элементу
	$('.input-price-item').on('click', function() {
		$(this).children('.input-price-checkbox').prop('checked', true);
	});

	// Валидация формы
	$('form').each(function () {
		form = $(this);
		$('#form-phone').mask("+7 (999) 999-99-99");		
		form.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				surname: {
					required: true,
					minlength: 2
				},
				phone: {
					required: true
				},
				city: {
					required: true
				},
				street: {
					required: true
				},
				house: {
					required: true
				}
			},
			messages: {
				name: {
					required: 'Укажите имя',
					minlength: 'Длина фамилии должна быть более одного символа'
				},
				surname: {
					required: 'Укажите фамилию',
					minlength: 'Длина фамилии должна быть более одного символа'
				},
				phone: {
					required: 'Укажите телефон'
				},
				city: {
					required: 'Укажите город'
				},
				street: {
					required: 'Укажите улицу'
				},
				house: {
					required: 'Укажите дом'
				}
			},			
			submitHandler: function (form) {
				console.log('done');
				$.ajax({
					url: '',
					// type: 'POST',
					contentType: false,
					processData: false,
					data: new FormData(form),
					success: function () {
						$(form).trigger('reset');
						$('.select2').val(null).trigger('change');
						alert('Форма успешно отправлена');
					}
				})	
			}
		})
	})

	// Блок доствки	
	$('form').on('change', function() {
		if ($('#delivery').prop('checked')) {
			$('.form-group-delivery-wrap').addClass('active');
		} else {
			$('.form-group-delivery-wrap').removeClass('active');
		}
	})	
})