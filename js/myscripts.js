/*
 Домашнее задание к 98-му уроку.

 Перед Вами стоит две задачи:

 1. Добавить проверку e-mail адреса с помощью регулярного выражения (см. ниже).
 Проверка должна осуществляться в момент ухода из поля для ввода e-mail (событие blur).
 В случае если e-mail соответствует регулярному выражению, то подсветить поле зеленой рамкой,
 если  не соответсвует, то красной, а если в поле находится значение по умолчанию, то серой.
 При этом надо оставить ту функциональность, при которой в случае пустого ввода
 возвращается значение по умолчанию.

 Рег выражение для проверки e-mail:
 [-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}
 Я заменил на:
 ^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$


 2. Запретить повторную отправку формы., т.е. после однократного нажатия кнопки "Отправить заявку",
 она должна блокироваться.
 */



/*
// первый вариант
$(document).ready(function(){
	$('#email').blur(function(){
		if($(this).val() == $(this).val().match(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/)){
			$(this).css('border','2px solid green');
			}
		else if($(this).val() == $(this).attr('defaultValue')){
			$(this).css('border','#cccccc');
			}
		else if($(this).val() == ''){
			$(this).val($(this).attr('defaultValue')).css('border','2px solid #cccccc');;
			
			}
		else{
			$(this).css('border','2px solid red');
			}
	}).focus(function(){
		if($(this).val() == $(this).attr('defaultValue')){
			$(this).val('');
			}
		});
		$('#my_button').click(function(){
			$(this).css('border','1px solid red').attr('disabled','disabled');
			return false;
			});
}); // конец ready*/

// второй аналогичный вариант
$(document).ready(function(){
	var regV = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
	var myEmail = $('#email');
	
	myEmail.focus(function(){
		if($(this).val() == $(this).attr('defaultValue')){
			$(this).val('');
			}
		});
	myEmail.blur(function(){
		var userEmail = $(this).val();
		if(userEmail == ''){
			$(this).val($(this).attr('defaultValue')).css('border','1px solid #cccccc');
			}
		else if(userEmail.search(regV) == -1){
			$(this).css('border','1px solid red');
			}
		else{
			$(this).css('border','1px solid green');
			}
		});
		
	$('#my_button').click(function(){
		$(this).attr('value','Отправляю данные...').attr('disabled','true');
		});
}); // конец ready
