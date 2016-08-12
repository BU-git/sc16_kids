$("#phone").mask("+380(99) 999-9999");


var validator = $('#contactForm').bootstrapValidator({
	fields: {
		name: {
			message : "Невірно вказані дані",
			validators: {
				notEmpty: {
					message: "Поле обов'язкове для заповнення",
				},
				srtingLength: {
					min: 1,
					max: 50,
				},
			}
		},
		email: {
			message :  "Невірно вказані дані",
			validators: {
				notEmpty: {
					message: "Поле обов'язкове для заповнення",
				},
				stringLength: {
					min: 1,
					max: 50,
				},
				emailAdress: {
					message: "Невірно вказана електронна адреса",
				}
			}
		},
		tel: {
			message: "Невірно вказані дані",
		},
		stringLength: {
					max: 15,
				},
	}
});