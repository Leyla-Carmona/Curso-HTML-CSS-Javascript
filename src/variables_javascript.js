const buttonform = document.getElementById("buttonform");
const datatype = document.getElementById("datatype");
const buttonCheck = document.getElementById("buttonCheck");
const datatype_practice = document.getElementById("datatype_practice");
const comparadorForm = document.getElementById("comparadorForm");
const resultadocomparador = document.getElementById("resultadocomparador");
const zona1 = document.getElementById("eventos1");
const zona2 = document.getElementById("eventos2");
let intervalo;

buttonform.addEventListener("click", function (event) {
  event.preventDefault();

  let tipo1 = "Hola";
  let tipo2 = 1998;
  let tipo3 = true;

  datatype.innerHTML = `
 El tipo1 es: <b>${typeof tipo1}</b><br>
 El tipo2 es: <b>${typeof tipo2}</b><br>
 El tipo3 es: <b>${typeof tipo3}</b><br>`;
});

buttonCheck.addEventListener("click", function (event) {
  const dato1_value = document.getElementById("dato1").value;
  const dato2_value = document.getElementById("dato2").value;

  let dato1, dato1_tipo;
  let dato2, dato2_tipo;

  if (!isNaN(dato1_value) && dato1_value.trim() !== "") {
    dato1 = Number(dato1_value);
    dato1_tipo = typeof dato1;
  } else {
    dato1 = dato1_value;
    dato1_tipo = typeof dato1;
  }

  if (!isNaN(dato1_value) && dato1_value.trim() !== "") {
    dato2 = Number(dato2_value);
    dato2_tipo = typeof dato1;
  } else {
    dato2 = dato2_value;
    dato2_tipo = typeof dato2;
  }

  datatype_practice.innerHTML = `El dato 1 es: ${dato1_tipo}<br> 
    El dato 2 es: ${dato2_tipo}`;
});

function sumar(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 + number2;
    document.getElementById("resultado").value = resultado;
}

function restar(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 - number2;
    document.getElementById("resultado").value = resultado;
}

function multiplicar(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 * number2;
    document.getElementById("resultado").value = resultado;
}

function dividir(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 / number2;
    document.getElementById("resultado").value = resultado;
    if(number1 == 0 || number2 == 0){
        document.getElementById("resultado").value = "Error"
    }
}

comparadorForm.addEventListener("submit", function(event){
  event.preventDefault();
  let mensaje = "";

  comparador1 = document.getElementById("comparador1").value;
  comparador2 = document.getElementById("comparador2").value;

  //Comparación de valor ==
  if(comparador1 == comparador2)
  {
    mensaje += "<p> Los valores son iguales </p>"
  }else{
    mensaje += "<p> Los valores no son iguales </p>"
  }
  //Comparación estricta ===
  if(comparador1 === comparador2){
    mensaje += "<p> Son estrictamente iguales </p>"
  }else{
    mensaje += "<p> No son estrictamente iguales"
  }

  //Comparación por mayor y menor que
  if(comparador1 > comparador2){
    mensaje += "<p> El comparador 1 es mayor que el comparador 2"
  }else{
    mensaje += "<p> El comparador 2 es mayor que el comparador 1"
  }
  
  resultadocomparador.innerHTML = mensaje;
});

function ejecutarFor(){
  const input = parseInt(document.getElementById("inputFor").value);
  const etiqueta = document.getElementById("resultadoFor");
  etiqueta.innerHTML = '';

  for(let i=1; i <= input;i++){
    etiqueta.innerHTML += `Este es el ciclo N°: ${i} <br>`; 
  }
}

function iniciarWhile(){
  let contador = 1;
  const input = parseInt(document.getElementById("inputWhile").value);
  const etiqueta = document.getElementById("resultadoWhile");
  etiqueta.innerHTML = '';
  contador = 1;

  intervalo = setInterval(() => {
    if(contador <= input){
      etiqueta.innerHTML += `| ${contador}`;
      contador++;
    }else{
      clearInterval(intervalo);
    }
  }, 2000);
}

function detenerWhile(){
  clearInterval(intervalo);
}

async function traermisCursos() {
  await fetch('api.json')
  .then(respuesta => respuesta.json())
  .then(data =>{
    const etiqueta = document.getElementById("resultadoFunciones");
    etiqueta.innerHTML ="";

    data.forEach(curso => {
      const p = document.createElement('p');
      p.innerText = `${curso.id}:${curso.titulo} - Temas: ${curso.temas}`;
      etiqueta.appendChild(p);
    });
  })
  .catch(error => {
    etiqueta.innerText = "Error al cargar los datos";
  });
}

function crearDiv(){
  const contenedor = document.getElementById("DOM");

  const newDIV = document.createElement("div");
  newDIV.id = "divgenerado";
  const p = document.createElement("p");

  p.innerText = "Soy un div creado desde el DOM de Javascript"

  newDIV.style.padding = "5px";
  newDIV.style.margin = "10px 0";
  newDIV.style.backgroundColor = "#f0f0f0"
  newDIV.appendChild(p);
  contenedor.appendChild(newDIV);
}

function eliminarDiv(){
  const tarjeta = document.getElementById("divgenerado");
  if(tarjeta){
    tarjeta.remove();
  }
}

zona1.onmouseover = () => {
  zona1.innerHTML = "Estoy siendo seleccionado";
  zona1.style.boxShadow = "0 0 10px cyan"
}

zona1.onmouseout = () => {
  zona1.innerText = "Ya no estoy siendo seleccionado"
  zona1.style.boxShadow = "none";
}

zona1.onclick = () => {
  zona1.style.border = "4px dashed purple";
  zona1.innerText = "Has hecho click"
}

zona1.onmousedown = () => {
  zona1.innerText = "Estas dando click"
}

zona1.onmouseup = () => {
  zona1.innerText = "Soltaste con el botón derecho"
}

document.addEventListener("contextmenu", function(event){
  event.preventDefault();
})

zona1.ondblclick = () => {
  zona1.style.background = "pink";
  zona1.innerText = "Doble click, he cambiado mi fondo";
}

zona2.addEventListener("keydown", (e) =>{
  zona2.innerText = `Has presionado: ${e.key}`;
});

zona2.addEventListener("keyup", (e) =>{
  zona2.innerText = `Has soltado: ${e.key}`;
})

zona2.addEventListener("click", () => {
  zona2.focus();
  zona2.innerText = "Estoy listo para recibir información";
})
