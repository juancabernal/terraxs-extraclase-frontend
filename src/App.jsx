import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForms = () => setShowLogin(!showLogin);

  return (
    <div className="container">
      <div className="logo">
        <img src="/img/logo.png" alt="Logo TerraXs" />
      </div>
      {showLogin ? (
        <LoginForm toggleForms={toggleForms} />
      ) : (
        <RegisterForm toggleForms={toggleForms} />
      )}
    </div>
  );
}

export default App;
