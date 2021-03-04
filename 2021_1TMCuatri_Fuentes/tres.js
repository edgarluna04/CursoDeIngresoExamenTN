function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var precioUnitario=600;

	var precioFinalSinDescuento;
	var precioFinalConDescuento

	var totalPasajeros;

	var contadorSolteros=0;
	var contadorCasados=0;
	var contadorViudos=0;
	var contadorViudosMasSesenta=0;

	contadorMasDeSesenta=0;

	var edadMujerMasJoven;
	var nombreMujerMasJoven;

	var continuar;

	do{
		nombre=prompt("Ingrese su nombre");
		
		estadoCivil=prompt("Ingrese su estado civil (soltero-casado-viudo)");
		if(!(estadoCivil=="soltero" || estadoCivil=="casado" || estadoCivil=="viudo")){
			alert("Dato incorrecto, ingrese nuevamente")
		}
		else{
			edad=parseInt(prompt("ingrese su edad (solo mayores de edad)"));

			do{
				contadorMasDeSesenta++
			}while(edad>60)

			if(edad<=17){
				alert("Debes ser mayor de edad para ingresar");
			}
			else{
				temperaturaCorporal=parseFloat(prompt("Ingrese su temperatura corporal"));
				if(isNaN(temperaturaCorporal)==true){
					alert("Valores incorrectos, por favor ingrese nuevamente");
				}
				else{
					sexo=prompt("Ingrese su sexo");
					if(isNaN(sexo)==false){
						alert("valor incorrecto, ingrese nuevamente");
					}
				}
			}

		}

		switch(estadoCivil){
			case "soltero":
				contadorSolteros++;
				//b) el nombre y edad de la mujer soltera mas joven.
				if(sexo=="mujer" && edadMujerMasJoven<edad){
					edadMujerMasJoven=edad;
					nombreMujerMasJoven=nombre;
				}
				break;

			case "casado":
				contadorCasados++;
				break;

			case "viudo":
				contadorViudos++;
				if(edad>60){
					contadorViudosMasSesenta++;
				}
				break;
		}


		totalPasajeros=contadorCasados+contadorSolteros+contadorViudos;

		precioFinalSinDescuento=totalPasajeros*precioUnitario;
		
		if(((totalPasajeros/100)*contadorMasDeSesenta)>=50){
			precioFinalConDescuento= precioFinalSinDescuento*(1-0.25)
		}


		continuar=confirm("¿Desea cargar mas datos?");
	}while(continuar==true)


	//a) La cantidad de personas con estado "viudo" de mas de 60 años.
	document.write("La cantidad de personas con estado viudo de mas de 60 años es de "+ contadorViudosMasSesenta+"<br/>");
	
	//b) el nombre y edad de la mujer soltera mas joven.
	document.write("El nombre y edad de la mujer soltera mas joven es "+nombreMujerMasJoven+" y su edad es "+ edadMujerMasJoven+"<br/>");

	//c) cuanto sale el viaje total sin descuento.
	document.write("El viaje total sin descuentos sale "+precioFinalSinDescuento);


	//d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final 
	//tiene un descuento del 25%, que solo mostramos si corresponde.

	if(((totalPasajeros/100)*contadorMasDeSesenta)>=50){
		precioFinalConDescuento= precioFinalSinDescuento*(1-0.25)
		document.write("Como el 50% o más del pasaje es mayor a 60 reciben un 25% de descuento, su valor final con descuento es "+precioFinalConDescuento+"pesos"+"<br/>");
	}

}
