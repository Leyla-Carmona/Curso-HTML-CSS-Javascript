const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", actionformulario);

function actionformulario(event){
    event.preventDefault();
    alert("Se contactarán con usted pronto");
    console.log("Estoy en mi function actionformulario");
    formulario.reset();
}