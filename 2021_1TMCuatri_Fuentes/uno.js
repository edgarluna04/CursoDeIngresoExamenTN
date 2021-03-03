
function mostrar()
{
	var nombreProducto;
	var tipoProducto;
	var precio;
	var cantidadUnidades;
	var tipoInflamable;
	var marca;

	var contadorAlcohol=0;
	var contadorIAC=0;
	var contadorQUAT=0;

	var contadorIACmenorADoscientos=0;

	var contadorIgnifugo=0;
	var contadorInflamable=0;
	var contadorExplosivo=0;

	var marcaMasCara;
	var tipoMasCaro;

	var mayorTipoInflamable;
	


	var continuar;

	do{
		
		for(var i=0; i<5;i++){
		
			nombreProducto=prompt("ingrese nombre del producto deseado");

			if(isNaN(nombreProducto==false)){
				alert("ingrese nombre correcto");
			}
			else{

				tipoProducto=prompt("Ingrese tipo de producto(alcohol, iac o quat)");

				if(!(tipoProducto=="alcohol" || tipoProducto=="iac" || tipoProducto=="quat")){
					//(validar "ALCOHOL", "IAC" o "QUAT")
					alert("Producto ingresado incorrecto, intente nuevamente");

				}else{

					precio=parseFloat(prompt("ingrese precio (entre 100 y 300)"))
					if(precio<100 && precio>300 && isNaN(precio)==true){
						//precio (validar entre 100 y 300)
						alert("Precio incorrecto, por favor ingresar valor dentro del margen");
					}
					else{
						cantidadUnidades=parseFloat(prompt("Ingrese cantidad de productos deseada(no superior a mil unidades"));
						if(cantidadUnidades<=0 || cantidadUnidades>1000){
							//cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)
							alert("Cantidad incorrecta, por favor vuelva a ingresar");
						}
						else{
							tipoInflamable=prompt("Especifique el tipo de inflamable(ignifugo-combustible-explosivo");
							if(!(tipoInflamable=="ignifugo" || tipoInflamable=="combustible" || tipoInflamable=="explosivo")){
								alert("Tipo de inflamable incorrecto, vuelva a intentar");
							}
							marca=prompt("Ingrese marca");
						}
					}
				}

				switch(tipoProducto){
					case "alcohol":
						contadorAlcohol++;
						if(marcaMasCara<precio){
							marcaMasCara=precio;
							tipoMasCaro=tipoInflamable;
						}
						break;
					
					case "iac":
						contadorIAC++;
						if(marcaMasCara<precio){
							marcaMasCara=precio;
							tipoMasCaro=tipoInflamable;
						}
						if(precio<200){
							contadorIACmenorADoscientos++;
						}
						break;

					case "quat":
						contadorQUAT++;
						if(marcaMasCara<precio){
							marcaMasCara=precio;
							tipoMasCaro=tipoInflamable;
						}
						break;

				}

				switch(tipoInflamable){
					case "ignifugo":
						contadorIgnifugo++;
						break

					case "inflamable":
						contadorInflamable++;
						break;

					case "explosivo":
						contadorExplosivo++;
						break;
				}

				if(contadorIgnifugo>contadorExplosivo && contadorIgnifugo>contadorInflamable){
					mayorTipoInflamable= "ignifugo"
				}
				else if(contadorExplosivo>contadorIgnifugo && contadorExplosivo>contadorInflamable){
					mayorTipoInflamable= "explosivo"
				}
				else{
					mayorTipoInflamable= "inflamable"
				}
			}

			
		}
		
		
		continuar=confirm("¿desea agregar otro producto? Maximo 5");

	}while(continuar==true)

	//a) El promedio de cantidad por tipo de producto
	document.write("El promedio de alcoholes es de " + contadorAlcohol+ "<br/>"+ "El promedio de IAC es de "+contadorIAC+"<br/>"+"El promedio de QUAT es de "+contadorQUAT+"<br/")
		
	//b) El tipo de inflamable con más cantidad de unidades en total de la compra
	document.write("El tipo de inflamable con mas cantidad de unidades en total de la compra es " + mayorTipoInflamable+"<br/");

	//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
	document.write("La cantidad de IAC con precio menor a 200 es "+contadorIACmenorADoscientos+"<br/");

	//d) la marca y tipo del más caro de los productos
	document.write("La marca del producto mas caro es "+marcaMasCara+ "y el tipo es "+tipoMasCaro+"<br/");


}
