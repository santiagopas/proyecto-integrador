import { useState, useEffect } from "react";
import { getUsers, createUser } from "../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreateUser = () => {
    createUser(newUser)
      .then(() => {
        getUsers()
          .then((response) => setUsers(response.data))
          .then(() => setNewUser({ name: "", email: "", userName: "", password: "" }))
          .then(() => console.log("Usuario creado exitosamente"))
          .catch((error) =>
            console.error("Error al obtener usuarios después de crear uno nuevo:", error)
          );
      })
      .catch((error) => console.error("Error al crear usuario:", error.message));
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.userName}</p>
            <p>{user.password}</p>
            <p>{user.role}</p>
            <p>{user.createdAt}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre:
          <input type="text" name="name" value={newUser.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={newUser.email} onChange={handleInputChange} />
        </label>
        <label>
          Nombre de Usuario:
          <input type="text" name="userName" value={newUser.userName} onChange={handleInputChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={newUser.password} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleCreateUser}>
          Crear Nuevo Usuario
        </button>
      </form>
    </div>
  );
};

export default UserList;
