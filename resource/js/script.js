//iniciar aos
AOS.init();

/*traer dado de bombas*/

$(document).ready(function(){ 
	$.post('traerData').done(function(respuesta){
		console.log(respuesta);
		data = $.parseJSON(respuesta);
		$('#resultadoBomba').html(data.resultado);
	})
});