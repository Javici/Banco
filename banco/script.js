
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

const dineroTransferido = document.getElementById("transferido");
const dineroInicial = document.querySelector(".dineroInicial");
const total = document.querySelector(".total");
const transferirBtn = document.getElementById("transferir");

if (dineroInicial) {
  dineroInicial.innerText = "Dinero: " + saldo + " €";
}

function transferir() {
  if (!dineroTransferido || !dineroInicial || !total) return;
  const cantidad = parseFloat(dineroTransferido.value);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Introduce una cantidad válida para transferir.");
    return;
  }
  if (cantidad > saldo) {
    alert("No tienes suficiente saldo.");
    return;
  }
  saldo -= cantidad;
  total.innerText = "Transferencia realizada. Dinero total: " + saldo + " €";
  dineroInicial.innerText = "Dinero: " + saldo + " €";
  dineroTransferido.value = "";
}

if (transferirBtn && dineroTransferido && dineroInicial && total) {
  transferirBtn.addEventListener("click", transferir);
}
