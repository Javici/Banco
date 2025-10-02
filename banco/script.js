const password = "1234";
const username = "Javier";
const PassCheck = document.getElementById("contrasena");
const UserCheck = document.getElementById("usuario");
const msg = document.getElementById("msg");
const button = document.getElementById("acceder");

function check() {
  if (UserCheck.value === username && PassCheck.value === password) {
    msg.innerText = "Inicio de sesión correcto";
    window.location.href = "./html/cuenta.html";
  } else {
    msg.innerText = "Error: usuario o contraseña incorrecta";
    alert("Inténtalo de nuevo");
  }
}

button.addEventListener("click", check);
