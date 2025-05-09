function toggleForms() {
  document.getElementById("loginForm").classList.toggle("hidden");
  document.getElementById("registerForm").classList.toggle("hidden");
}

function validarLogin(event) {
  event.preventDefault();
  const form = document.forms["formLogin"];
  const email = form["email"].value.trim();
  const password = form["password"].value;
  const mensaje = document.getElementById("loginMensaje");

  mensaje.classList.remove("exito");
  mensaje.innerText = "";

  if (!email || !password) {
    mensaje.innerText = "Todos los campos son obligatorios.";
    return false;
  }

  if (!validarCorreo(email)) {
    mensaje.innerText = "El correo no es válido. Ej: nombre@dominio.com";
    return false;
  }

  mensaje.innerText = "Inicio de sesión exitoso.";
  mensaje.classList.add("exito");
  return true;
}

function validarRegistro(event) {
  event.preventDefault();
  const form = document.forms["formRegister"];
  const nombres = form["nombres"].value.trim();
  const apellidos = form["apellidos"].value.trim();
  const tipoDocumento = form["tipoDocumento"].value;
  const numeroDocumento = form["numeroDocumento"].value.trim();
  const correo = form["correo"].value.trim();
  const contrasena = form["contrasena"].value;
  const confirmar = form["confirmarContrasena"].value;
  const telefono = form["telefono"].value.trim();
  const mensaje = document.getElementById("registroMensaje");

  mensaje.classList.remove("exito");
  mensaje.innerText = "";

  if (!nombres || !/^[a-zA-Z\s]{3,}$/.test(nombres)) {
    mensaje.innerText = "Nombres inválidos. Solo letras, mínimo 3 caracteres.";
    return false;
  }

  if (!apellidos || !/^[a-zA-Z\s]{3,}$/.test(apellidos)) {
    mensaje.innerText = "Apellidos inválidos. Solo letras, mínimo 3 caracteres.";
    return false;
  }

  if (!tipoDocumento) {
    mensaje.innerText = "Debes seleccionar un tipo de documento.";
    return false;
  }

  if (!/^\d{5,15}$/.test(numeroDocumento)) {
    mensaje.innerText = "Número de documento inválido. Solo números entre 5 y 15 dígitos.";
    return false;
  }

  if (!validarCorreo(correo)) {
    mensaje.innerText = "Correo inválido. Ej: usuario@dominio.com";
    return false;
  }

  if (!validarContrasena(contrasena)) {
    mensaje.innerText =
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
    return false;
  }

  if (contrasena !== confirmar) {
    mensaje.innerText = "Las contraseñas no coinciden.";
    return false;
  }

  if (!/^\d{7,15}$/.test(telefono)) {
    mensaje.innerText = "Teléfono inválido. Solo números entre 7 y 15 dígitos.";
    return false;
  }

  mensaje.innerText = "Registro exitoso.";
  mensaje.classList.add("exito");
  return true;
}

function validarCorreo(correo) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(correo);
}

function validarContrasena(contrasena) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
  return regex.test(contrasena);
}
