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
    nombre, dui, nit, marca, modelo, year, color, placa, fallas
  ];

  localStorage.setItem(dui, JSON.stringify(info));
  mostrar();
}

function validar(nombre, dui, nit, year, placa, fallas){
  let expNom = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let expDui = /^\d{8}-\d$/;
  let expFallas = /^([\w\u00C0-\u017F]+\s*[0-9]*)*.*\w*$/m;
  let expPlaca = /^[A-Za-z0-9]/;
  let expNit = /^\d[0-9]/

  if (!expNom.test(nombre) || nombre == ""){
    alert('ERROR: El nombre ingresado es inválido');
    return 0;
  }
}

function mostrar(dui){
  let info = localStorage.getItem('dui');
  let tabla = document.getElementById('datos');
    tabla.innerHTML = "<table id='tablaResul'><tr class='filaTit'><td class='titulo'>Estudiante</td><td class='titulo'>Promedio</td></tr>";
    tabla = document.getElementById('tablaResul');
  if (localStorage.length === 0){
    console.log("No hay nada");
    return 0;
  }else{
    console.log("hay algo");
    for (let index = 0; index < localStorage.length; index++){
      console.log(localStorage.key(index).toString());
      const key = localStorage.key(index);
      let tdNom = localStorage.key(index).toString();
      console.log(tdNom);
      let tdProm = localStorage.getItem(key).toString();
      console.log(tdProm);
      if (index%2 == 0)
        tabla.innerHTML += "<tr class='filaCuerpo-Impar'><td class='cuerpo'>"+tdNom+"</td><td class='cuerpo'>"+tdProm+"</td></tr>";
      else
        tabla.innerHTML += "<tr class='filaCuerpo-Par'><td class='cuerpo'>"+tdNom+"</td><td class='cuerpo'>"+tdProm+"</td></tr>";
    }
    tabla.innerHTML += "</table>";
  }
}

window.onload = initializar;