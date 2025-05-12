import { useState } from "react";

export default function LoginForm({ toggleForms }) {
  const [mensaje, setMensaje] = useState("");
  const [exito, setExito] = useState(false);
  const validarCorreo = (correo) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo);

  const manejarEnvio = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    setExito(false);
    setMensaje("");

    if (!email.value || !password.value) {
      return setMensaje("Todos los campos son obligatorios.");
    }

    if (!validarCorreo(email.value)) {
      return setMensaje("El correo no es válido. Ej: nombre@dominio.com");
    }

    setExito(true);
    setMensaje("Inicio de sesión exitoso.");
  };

  return (
    <div id="loginForm">
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarEnvio}>
        <input type="email" name="email" placeholder="Correo electrónico" required />
        <input type="password" name="password" placeholder="Contraseña" required />
        <div className={`mensaje ${exito ? "exito" : ""}`}>{mensaje}</div>
        <button type="submit">Ingresar</button>
      </form>
      <div className="toggle-link">
        ¿No tienes cuenta? <a onClick={toggleForms}>Regístrate ahora</a>
      </div>
    </div>
  );
}