// UserForm.jsx

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/UserForm.css";

const UserForm = ({
  onCreateUser,
  onUpdateUser,
  selectedUserId,
  resetSelectedUser,
}) => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (selectedUserId) {
      setNewUser({
        name: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      });
      resetSelectedUser();
    }
  }, [selectedUserId, resetSelectedUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "name":
      case "lastName":
        error = value.trim() === "" ? "Este campo no puede estar vacío." : "";
        break;

      case "email":
        error = /^\S+@\S+\.\S+$/.test(value)
          ? ""
          : "Ingrese una dirección de correo electrónico válida.";
        break;

      case "userName":
        error = value.trim() === "" ? "Este campo no puede estar vacío." : "";
        break;

      case "password":
        error = value.length >= 6
          ? ""
          : "La contraseña debe tener al menos 6 caracteres.";
        break;

      case "confirmPassword":
        error = value === newUser.password ? "" : "Las contraseñas no coinciden.";
        break;

      default:
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));
  };

  const handleSubmit = () => {
    const hasErrors = Object.values(formErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    if (newUser.password !== newUser.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setPasswordMatchError(false);

    if (selectedUserId) {
      onUpdateUser(newUser, selectedUserId);
    } else {
      onCreateUser(newUser);
    }
  };

  return (
    <form className="user-form" onSubmit={(e) => e.preventDefault()}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <span className="error-message">{formErrors.name}</span>
      </label>
      <label>
        Apellido:
        <input
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={handleInputChange}
        />
        <span className="error-message">{formErrors.lastName}</span>
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <span className="error-message">{formErrors.email}</span>
      </label>
      <label>
        Nombre de Usuario:
        <input
          type="text"
          name="userName"
          value={newUser.userName}
          onChange={handleInputChange}
        />
        <span className="error-message">{formErrors.userName}</span>
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleInputChange}
        />
        <span className="error-message">{formErrors.password}</span>
      </label>
      <label>
        Confirmar Contraseña:
        <input
          type="password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleInputChange}
          className={passwordMatchError ? "password-mismatch" : ""}
        />
        <span className="error-message">{formErrors.confirmPassword}</span>
      </label>
      {passwordMatchError && (
        <p className="error-message">Las contraseñas no coinciden.</p>
      )}
      <button className="submit-button" type="button" onClick={handleSubmit}>
        {selectedUserId ? "Actualizar Usuario" : "Crear Nuevo Usuario"}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  selectedUserId: PropTypes.string,
  resetSelectedUser: PropTypes.func.isRequired,
};

export default UserForm;
