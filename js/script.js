function guardar(){
  let nombre = document.getElementById('nombre').value;
  let dui = document.getElementById('dui').value;
  let nit = document.getElementById('nit').value;
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let year = document.getElementById('year').value;
  let color = document.getElementById('color').value;
  let fallas = document.getElementById('fallas').value;

  if (!validar(nombre, dui, nit, year, fallas)){
    return 0;
  }
}

function validar(nombre, dui, nit, year, fallas){
  let expNom = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let expDui = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let expFallas = /^([\w\u00C0-\u017F]+\s*[0-9]*)*.*\w*$/m;
  let placa = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let nit = /^\d{4}-\d{6}-\d{3}-\d$/;
  let 

  if (!expNom.test(nombre) || nombre == ""){
    alert('ERROR: El nombre ingresado es inválido');
    return 0;
  }
}