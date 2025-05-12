import { useState } from "react";

export default function RegisterForm({ toggleForms }) {
  const [mensaje, setMensaje] = useState("");
  const [exito, setExito] = useState(false);

  const validarCorreo = (correo) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo);

  const validarContrasena = (c) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(c);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setExito(false);
    setMensaje("");

    const form = e.target;
    const {
      nombres,
      apellidos,
      tipoDocumento,
      numeroDocumento,
      correo,
      contrasena,
      confirmarContrasena,
      telefono,
    } = form.elements;

    if (!/^[a-zA-Z\s]{3,}$/.test(nombres.value)) {
      return setMensaje("Nombres inválidos. Solo letras, mínimo 3 caracteres.");
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(apellidos.value)) {
      return setMensaje("Apellidos inválidos. Solo letras, mínimo 3 caracteres.");
    }

    if (!tipoDocumento.value) {
      return setMensaje("Debes seleccionar un tipo de documento.");
    }

    if (!/^\d{5,15}$/.test(numeroDocumento.value)) {
      return setMensaje("Número de documento inválido.");
    }

    if (!validarCorreo(correo.value)) {
      return setMensaje("Correo inválido.");
    }

    if (!validarContrasena(contrasena.value)) {
      return setMensaje(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
      );
    }

    if (contrasena.value !== confirmarContrasena.value) {
      return setMensaje("Las contraseñas no coinciden.");
    }

    if (!/^\d{7,15}$/.test(telefono.value)) {
      return setMensaje("Teléfono inválido.");
    }

    setExito(true);
    setMensaje("Registro exitoso.");
  };

  return (
    <div id="registerForm">
      <h2>Crear cuenta</h2>
      <form onSubmit={manejarEnvio}>
        <input type="text" name="nombres" placeholder="Nombres completos" required />
        <input type="text" name="apellidos" placeholder="Apellidos completos" required />
        <select name="tipoDocumento" required>
          <option value="">Tipo de documento</option>
          <option value="CC">Cédula de Ciudadanía</option>
          <option value="CE">Cédula de Extranjería</option>
          <option value="NIT">NIT</option>
        </select>
        <input type="text" name="numeroDocumento" placeholder="Número de documento" required />
        <input type="email" name="correo" placeholder="Correo electrónico" required />
        <input type="password" name="contrasena" placeholder="Contraseña (mínimo 8 caracteres)" required />
        <input type="password" name="confirmarContrasena" placeholder="Repetir contraseña" required />
        <input type="tel" name="telefono" placeholder="Teléfono" required />
        <div className={`mensaje ${exito ? "exito" : ""}`}>{mensaje}</div>
        <button type="submit">Crear cuenta</button>
      </form>
      <div className="toggle-link">
        ¿Ya tienes cuenta? <a onClick={toggleForms}>Inicia sesión</a>
      </div>
    </div>
  );
}
