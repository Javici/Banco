const password = "1234";
const username = "Javier";
const PassCheck = document.getElementById("contrasena");
const UserCheck = document.getElementById("usuario");
const msg = document.getElementById("msg");
const acceder = document.getElementById("acceder");

if (acceder && PassCheck && UserCheck && msg) {
  function check() {
    if (UserCheck.value === username && PassCheck.value === password) {
      msg.innerText = "Inicio de sesión correcto";
      window.location.href = "./html/cuenta.html";
    } else {
      msg.innerText = "Error: usuario o contraseña incorrecta";
      alert("Inténtalo de nuevo");
    }
  }
  acceder.addEventListener("click", check);
}

let saldo = 15000;

const dineroRetirado = document.getElementById("retirado");
const dineroInicial = document.querySelector(".dineroInicial");
const total = document.querySelector(".total");
const retirarBtn = document.getElementById("retirar");

const dineroIntroducido = document.getElementById("introducido");
const introducirBtn = document.getElementById("introducir");
const total2 = document.querySelector(".total2");

if (dineroInicial) {
  dineroInicial.innerText = "Dinero: " + saldo + " €";
}

function retirar() {
  if (!dineroRetirado || !dineroInicial || !total) return;
  const cantidad = parseFloat(dineroRetirado.value);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Introduce una cantidad válida para retirar.");
    return;
  }
  if (cantidad > saldo) {
    alert("No tienes suficiente saldo.");
    return;
  }
  saldo -= cantidad;
  total.innerText = "Retirada realizada. Dinero total: " + saldo + " €";
  dineroInicial.innerText = "Dinero: " + saldo + " €";
  dineroRetirado.value = "";
  setTimeout(() => {
    total.innerText = "";
  }, 4000);
}

function introducir() {
  if (!dineroIntroducido || !dineroInicial || !total2) return;
  const cantidad = parseFloat(dineroIntroducido.value);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Introduce una cantidad válida para introducir.");
    return;
  }
  saldo += cantidad;
  total2.innerText = "Dinero introducido. Dinero total: " + saldo + " €";
  dineroInicial.innerText = "Dinero: " + saldo + " €";
  dineroIntroducido.value = "";
  setTimeout(() => {
    total2.innerText = "";
  }, 4000);
}

if (retirarBtn && dineroRetirado && dineroInicial && total) {
  retirarBtn.addEventListener("click", retirar);
}

if (introducirBtn && dineroIntroducido && dineroInicial && total2) {
  introducirBtn.addEventListener("click", introducir);
}
