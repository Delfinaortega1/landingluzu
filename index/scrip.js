var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("submit");

var feedback = document.getElementById("feedback");
var mensaje_final = document.getElementById("mensaje-final");
var cerrarBtn = document.getElementById("cerrar-feedback");

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();

    var valor_nombre = input_nombre.value;
    var valor_email = input_email.value;

    mensaje_final.innerHTML = `¡${valor_nombre}, estás adentro! Gracias por sumarte a la tribuna de <strong>Nadie Dice Nada</strong>. Muy pronto vamos a contactarte con más info. Estate atentx a tu mail <strong>${valor_email}</strong> y preparate para vivir el programa desde adentro.<br><br>Nos vemos en el estudio.`;

    feedback.style.display = "block";

    setTimeout(() => {
        feedback.style.display = "none";
    }, 7000);
}

cerrarBtn.addEventListener("click", () => {
    feedback.style.display = "none";
});

