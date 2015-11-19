var flag = 0;
var visor = "";
var primerNumero = 0;
var segundoNumero = 0;
var operacion;
var resultado = 0;

$(".numero").click(function() {

	if (flag == 0) {

		visor = visor + $(this).html();
		$("#visor").html(visor);
		primerNumero = visor;
					

	} else {

		visor = visor + $(this).html();
		$("#visor").html(visor);
		segundoNumero = visor;
		
	}
});

$(".operacion").click(function() {

	if (flag == 0) {
		operacion = $(this).attr("data");
		flag = 1;
		visor = "";	

	} else {
		operacion = $(this).attr("data");
		primerNumero = resultado;
		visor = "";	
	}
	
});


$(".resultado").click(function() {

	if (operacion == "suma") {

		 resultado = parseInt(primerNumero) + parseInt(segundoNumero);
		 $("#visor").html(resultado);
		 
		 
	} else if (operacion == "resta") {

		 resultado = parseInt(primerNumero) - parseInt(segundoNumero);
		 $("#visor").html(resultado);
		 

	} else if (operacion == "multiplicar") {

		 resultado = parseInt(primerNumero) * parseInt(segundoNumero);
		 $("#visor").html(resultado);
		
	
	} else if (operacion == "dividir") {

		if (parseInt(segundoNumero) > 0) {

			resultado = parseInt(primerNumero) / parseInt(segundoNumero);
		 	$("#visor").html(resultado);
		 	

 		} else {
 			alert("che no podes dividir por cero");
 			$("#visor").html(primerNumero);
 			
		}

	} else {

	}

	
});

$(".reseteo").click(function() {

	flag = 0;
	visor = "";
	primerNumero = 0;
	segundoNumero = 0;
	$("#visor").html(visor);

});
		
	// 		 console.log(parseInt(primerNumero));
	// 		// for(var i = 0; i < cantNumeros; i++) {
	// 		// 	resultado += numeroIngresar[i];
	// 		// }

	// 		flag = 1;
	// 		visor = "";

	// 	} else if ($(this).attr("data") == "resta") {
			
	// 		 resultado = parseInt(primerNumero) - parseInt(visor);
			

	// 		flag = 1;
	// 		visor = "";
			
	// 	} else if ($(this).attr("data") == "multiplicar") {
			
	// 		resultado = parseInt(primerNumero) * parseInt(visor);
	// 		flag = 1;

	// 	} else if ($(this).attr("data") == "dividir") {
			
	// 		if (parseInt(visor) > 0) {

	// 		resultado = parseInt(primerNumero) / parseInt(visor);
	// 		flag = 1;	

	// 		} else {
	// 			alert("che no podes dividir por cero");
	// 			resultado = visor;
	// 		}
		
	// 	} else if ($(this).attr("data") == "resultado") {
			
	// 		console.log(parseInt(segundoNumero));
	// 		console.log(resultado);
	// 		$("#visor").html(resultado.toString());
	// 		flag = 0;
	// }

	// // if (flag == 1) {
	// // 	numeroIngresar = null;
	// // 	cantNumeros = 0;
	// // }

	
	// });
