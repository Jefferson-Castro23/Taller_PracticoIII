function initializar(){
  document.getElementById("guardar").addEventListener("click", function(){
    guardar();
  });
  localStorage.clear();
  mostrar();
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
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let yearH = hoy.getFullYear();
  let fechaIng = dia.toString() + '/' + mes.toString() + '/' + yearH.toString();

  if (!validar(nombre, dui, nit, year, placa, fallas)){
    return 0;
  }

  let info = [
    nombre, dui, nit, marca, modelo, year, color, fallas, fechaIng
  ];

  localStorage.setItem(placa, JSON.stringify(info));
  mostrar();
}


function validar(nombre, dui, nit, year, placa, fallas){
  let expNom = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  let expDui = /^\d{8}-\d$/;
  let expFallas = /^([\w\u00C0-\u017F]+\s*[0-9]*)*.*\w*$/m;
  let expPlaca = /^([A-Z]{1}[0-9]{3}\-[A-Z]{1})|([A-Z]{3}\-[0-9]{2}\-[0-9]{2})\z$/;
  let expNit = /^\d{4}-\d{6}-\d{3}-\d$/;

  if (!expNom.test(nombre) || nombre == ""){
    alert('ERROR: El nombre ingresado es inválido');
    return false;
  }

  if (isNaN(year) || (year < 1985 || year > 2022)){
    alert('ERROR: El año de los carros, deben ser mayores a 1985 y menores a 2022');
    return false;
  }

  if (!expDui.test(dui) || dui == ""){
    alert('ERROR: Dui inválido');
    return false;
  }

  if (!expPlaca.test(placa) || placa == ""){
    alert('ERROR: Placa inválida');
    return false;
  }

  if (!expNit.test(nit) || nit == ""){
    alert('ERROR: NIT inválido');
    return false;
  }

  if (!expFallas.test(fallas) || fallas == ""){
    alert('ERROR: Debe ingresar las fallas del automóvil.');
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
    tabla.innerHTML = "<table id='tablaResul'><tr class='filaTit'><td class='titulo'>Nombre</td><td class='titulo'>DUI</td><td class='titulo'>NIT</td><td class='titulo'>Marca</td><td class='titulo'>Modelo</td><td class='titulo'>Año</td><td class='titulo'>Color</td><td class='titulo'>Placa</td><td class='titulo'>Fallas</td><td class='titulo'>Fecha Ingreso</td></tr>";
    tabla = document.getElementById('tablaResul');
  if (localStorage.length === 0){
    return 0;
  }else{
    for (let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      let tdPlaca = localStorage.key(i).toString();
      let infoData = JSON.parse(localStorage.getItem(key));
      tabla.innerHTML += "<tr><td class='cuerpo'>"+infoData[0]+"</td><td class='cuerpo'>"+infoData[1]+"</td><td class='cuerpo'>"+infoData[2]+"</td><td class='cuerpo'>"+infoData[3]+"</td><td class='cuerpo'>"+infoData[4]+"</td><td class='cuerpo'>"+infoData[5]+"</td><td class='cuerpo'><input type='color' value='"+infoData[6]+"' disabled></td><td class='cuerpo'>"+tdPlaca+"</td><td class='cuerpo'>"+infoData[7]+"</td><td class='cuerpo'>"+infoData[8]+"</td></tr>";
    }
    tabla.innerHTML += "</table>";
  }
}

function listarModelos(nomMarca){
  switch (nomMarca) {
    case 'Audi':
      audi = [
        'A8', 'A4', 'R8'
      ]
      ingresarModelos(audi)
      break;

    case 'Ferrari':
      ferrari = [
        'F12', '458', 'California'
      ]
      ingresarModelos(ferrari)
      break;

    case 'Ford':
      ford = [
        'Focus', 'Galaxy', 'Grand Torneo Connect'
      ]
      ingresarModelos(ford)
      break;

    case 'Honda':
      honda = [
        'Accord', 'Jazz', 'Civic'
      ]
      ingresarModelos(honda)
      break;

    case 'Jaguar':
      jaguar = [
        'XF', 'Serie XK', 'F-Type'
      ]
      ingresarModelos(jaguar)
      break;

    case 'Jeep':
      jeep = [
        'Grand Cherokee', 'Wrangler Unlimited', 'Cherokeé'
      ]
      ingresarModelos(jeep)
      break;

    case 'Lamborghini':
      lamborghini = [
        'Aventador', 'Huracán', 'Murciélago'
      ]
      ingresarModelos(lamborghini)
      break;

    case 'Maserati':
      maserati = [
        'Ghibli', 'GranTurismo', 'Levante'
      ]
      ingresarModelos(maserati)
      break;

    case 'Mercedes':
      mercedes = [
        'Clase SL', 'Clase SLK', 'Clase V'
      ]
      ingresarModelos(mercedes)
      break;
  }
}

function ingresarModelos(modelo){
  let cadena="";
  $("#modelo").html(cadena);
  for (let i=0; i<modelo.length; i++){
    if (i == 0)
      cadena +="<option value='"+modelo[i]+"' selected>"+modelo[i]+"</option>";
    else
      cadena +="<option value='"+modelo[i]+"'>"+modelo[i]+"</option>";
  }
  $("#modelo").html(cadena);
}

window.onload = initializar;