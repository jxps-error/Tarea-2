document.getElementById("formulario").addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let confirmar = document.getElementById("confirmar").value;

    let mensaje = document.getElementById("mensaje");

    if(nombre === "" || usuario === "" || password === "" || confirmar === ""){
        mensaje.style.color = "red";
        mensaje.textContent = "Todos los campos son obligatorios";
        return;
    }

    if(password !== confirmar){
        mensaje.style.color = "red";
        mensaje.textContent = "Las contraseñas no coinciden";
        return;
    }

    mensaje.style.color = "green";
    mensaje.textContent = "Registro exitoso";
});