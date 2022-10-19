function initializar(){
  document.getElementById("guardar").addEventListener("click", function(){
    guardar();
  });
}

function guardar(){
  let nombre = document.getElementById('nombre').value;
  let dui = document.getElementById('dui').value;
  let nit = document.getElementById('nit').value;
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let year = document.getElementById('year').value;
  let color = document.getElementById('color').value;
  let placa = document.getElementById('placa').value;
  let fallas = document.getElementById('fallas').value;

  /*if (!validar(nombre, dui, nit, year, placa, fallas)){
    return 0;
  }*/

  let info = [
    nombre, nit, marca, modelo, year, color, placa, fallas
  ];

  localStorage.setItem(dui, JSON.stringify(info));
  mostrar();
}

function validar(nombre, dui, nit, year, placa, fallas){
  let expNom = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let expDui = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let expFallas = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let expPlaca = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let expNit = /^\d{4}-\d{6}-\d{3}-\d$/;

  if (!expNom.test(nombre) || nombre == ""){
    alert('ERROR: El nombre ingresado es inválido');
    return false;
  }

  if (isNan(year) || (year < 1985 || year > 2022)){
    alert('ERROR: Año de carro inexistente');
    return false;
  }

  if (!expDui.test(dui) || dui == ""){
    alert('ERROR: Dui inexistente');
    return false;
  }

  if (!expPlaca.test(placa) || placa == ""){
    alert('ERROR: Placa no registrada');
    return false;
  }

  if (!expNit.test(nit) || nit == ""){
    alert('ERROR: Nit inexistente');
    return false;
  }

  if (!expFallas.test(fallas) || fallas == ""){
    alert('Sus fallas seran arregaladas');
    return false;
  }

  if (localStorage.length === 0){
    console.log("No hay nada");
    return 0;
  }else{
    console.log("hay algo");
    for (let i = 0; i < localStorage.length; i++){
      if (localStorage.key(i) == placa){
        alert("Este carro ya ha sido registrado, verifique la placa");
      }
    }
  }
}

function mostrar(){
  let tabla = document.getElementById('datos');
    tabla.innerHTML = "<table id='tablaResul'><tr class='filaTit'><td class='titulo'>Nombre</td><td class='titulo'>DUI</td><td class='titulo'>NIT</td><td class='titulo'>Marca</td><td class='titulo'>Modelo</td><td class='titulo'>Año</td><td class='titulo'>Color</td><td class='titulo'>Placa</td><td class='titulo'>Fallas</td></tr>";
    tabla = document.getElementById('tablaResul');
  if (localStorage.length === 0){
    return 0;
  }else{
    for (let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      let tdDui = localStorage.key(i).toString();
      console.log(tdNom);
      let info = localStorage.setItem(key, JSON.stringify(info));
      console.log(tdProm);
      tabla.innerHTML += "<tr><td class='cuerpo'>"+info[0]+"</td><td class='cuerpo'>"+tdDui+"</td><td class='cuerpo'>"+info[1]+"</td><td class='cuerpo'>"+info[2]+"</td><td class='cuerpo'>"+info[3]+"</td><td class='cuerpo'>"+info[4]+"</td><td class='cuerpo'>"+info[5]+"</td><td class='cuerpo'>"+info[6]+"</td><td class='cuerpo'>"+info[7]+"</td></tr>";
    }
    tabla.innerHTML += "</table>";
  }
}

window.onload = initializar;