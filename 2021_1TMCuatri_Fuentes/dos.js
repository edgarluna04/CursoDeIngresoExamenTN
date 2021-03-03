function mostrar()
{
  var nombre;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var notaPromedio;
  var edad;

  var nombreMejorPromedio;

  var edadMasJovenLibre;
  var nombreMasJovenLibre;

  var promedioNotasHombres;
  var promedioNotasMujeres;
  var promedioNotasNoBinario;

  var contadorHombres=0;
  var contadorMujeres=0;
  var contadorNoBinario=0;

  var promedioMasAltoF;
  var promedioMasAltoNB;

  var edadMasMAteriasNoRemotas;
  var nombreMasMAteriasNoRemotas;

  var cantidadMateriasLibre;
  var cantidadMateriasPresencial;

  var continuar;
  

  do{
    nombre=prompt("Ingrese su n ombre por favor");

    tipoCursada=prompt("Ingrese tipo de cursada (libre-presencial-remota)");
    if(!(tipoCursada=="libre" || tipoCursada=="presencial" || tipoCursada=="remota" )){
      alert("ingrese tipo de cursada correcta");

    }
    else{
      cantidadMaterias=parseInt(prompt("Ingrese cantidad materias"));
      if(cantidadMaterias<0 || cantidadMaterias>8){
        alert("Cantidad incorrecta, ingrese nuevamente");
      }
      else{
        sexo=prompt("Ingrese su sexo (femenino-masculino-no binario");
        if(!(sexo=="femenino" || sexo=="masculino" || sexo=="no binario" )){
          alert("Sexo incorrecto, ingrese nuevamente");
        }
        else{
          notaPromedio=parseFloat(prompt("ingrese su nota promedio"));
          if(notaPromedio<0 || notaPromedio>10){
            alert("Nota incorrecta, vuelva a ingresar");
          }
          else{
            edad=parseFloat(prompt("ingrese su edad"));
          }
        }
      }
    }

    switch(sexo){
      case "femenino":
        contadorMujeres++;
        promedioNotasMujeres+=notaPromedio;
        if(notaPromedio>promedioMasAltoF){
          promedioMasAltoF=notaPromedio;
        }
        if(promedioMasAltoF>promedioMasAltoNB){
          nombreMejorPromedio=nombre;
        }
        
        break;

      case "no binario":
        contadorNoBinario++;
        promedioNotasNoBinario+=notaPromedio;
        if(notaPromedio>promedioMasAltoNB){
          promedioMasAltoNB=notaPromedio;
        }
        if(promedioMasAltoNB>promedioMasAltoF){
          nombreMejorPromedio=nombre;
        }
        break;

      case "masculino":
        contadorHombres++;
        promedioNotasHombres+=notaPromedio;
        break;
    }

    switch(tipoCursada){
      case "libre":
        if(edadMasJovenLibre<edad){
          //b) El nombre del mas joven de los alumnos entre los que la dan libre
          edadMasJovenLibre=edad;
          nombreMasJovenLibre=nombre;
        }
        //f) La edad y nombre del que cursa mas materias que no sean en forma remota
        if(cantidadMaterias>cantidadMateriasLibre){
          cantidadMateriasLibre=cantidadMaterias;
        }
        else if(cantidadMateriasLibre>cantidadMateriasPresencial){
          edadMasMAteriasNoRemotas=edad;
          nombreMasMAteriasNoRemotas=nombre;
        }
        break;

      case "presencial":
        if(cantidadMateriasPresencial<cantidadMaterias){
          cantidadMateriasPresencial=cantidadMaterias
        }
        else if(cantidadMateriasPresencial>cantidadMateriasLibre){
          edadMasMAteriasNoRemotas=edad;
          nombreMasMAteriasNoRemotas=nombre;
        }
        
        break;

      case "remota":
        break;
    }

   

    

    continuar=confirm("¿Desea ingrear otra carga?");

  }while(continuar==true)


  //a) El nombre del mejor promedio que no sea masculino
  document.write("El nombre del mejor promedio que no sea masculino es "+nombreMejorPromedio +"<br/>");

  //b) El nombre del mas joven de los alumnos entre los que la dan libre
  document.write("El nombre del mas joven de los alumnos que dan libre es "+nombreMasJovenLibre+"<br/>");

  //d) El promedio de nota por sexo
  document.write("el promedio de nota de los hombres es "+ promedioNotasHombres/contadorHombres+"<br/>");
  document.write("el promedio de nota de mujeres es "+ promedioNotasMujeres/contadorMujeres+"<br/>");
  document.write("el promedio de nota de no binarios es "+ promedioNotasNoBinario/contadorNoBinario+"<br/>");

  //f) La edad y nombre del que cursa mas materias que no sean en forma remota
  document.write("El nombre del alumno que cursa mas materias de forma no remota es "+ nombreMasMAteriasNoRemotas+" y su edad es "+edadMasMAteriasNoRemotas);


}
