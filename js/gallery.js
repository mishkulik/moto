	$(document).ready(function(){
		
		 $('#small a').click(function(eventObject){
			  eventObject.preventDefault();
			  if($('#big img').attr('src') != $(this).attr('href')){
					$('#big img').hide().attr('src',$(this).attr('href'));
					$('#big img').load(function(){
						$(this).fadeIn(500);
						});
				}
			}); // конец события click
		
		$('#toggleGallery').toggle(function(){
			$(this).text('Скрыть галерею');
			$('#gallery').slideDown(1000);
			},function(){
			$(this).text('Показать галерею');
			$('#gallery').slideUp(1000);
			}); // конец события toggle
			
		$('#small a img').click(function(){
			$('#small a img').fadeTo(0, 1);
			$(this).fadeTo(0, 0.6);
			}); // конец события click
	}); // конец ready