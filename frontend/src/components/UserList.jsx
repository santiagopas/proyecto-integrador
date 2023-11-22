import { useState, useEffect } from "react";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/api";
import UserItem from "./UserItem";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const handleGetUserById = (id) => {
    getUserById(id)
      .then((response) => {
        console.log("Usuario obtenido por ID:", response.data);
        // Puedes realizar acciones con el usuario obtenido, como mostrarlo en un modal, etc.
      })
      .catch((error) =>
        console.error("Error al obtener usuario por ID:", error)
      );
  };

  const handleSelectForUpdate = (id) => {
    setSelectedUserId(id);
    
  };

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(() => {
        getUsers()
          .then((response) => setUsers(response.data))
          .then(() => setSelectedUserId(null))
          .then(() => console.log("Usuario eliminado exitosamente"))
          .catch((error) =>
            console.error(
              "Error al obtener usuarios después de eliminar uno:",
              error
            )
          );
      })
      .catch((error) =>
        console.error("Error al eliminar usuario:", error.message)
      );
  };

  const handleCreateUser = (newUser) => {
    createUser(newUser)
      .then(() => {
        getUsers()
          .then((response) => setUsers(response.data))
          .then(() => console.log("Usuario creado exitosamente"))
          .catch((error) =>
            console.error(
              "Error al obtener usuarios después de crear uno nuevo:",
              error
            )
          );
      })
      .catch((error) =>
        console.error("Error al crear usuario:", error.message)
      );
  };

  const handleUpdateUser = (updatedUser, id) => {
    updateUser(id, updatedUser)
      .then(() => {
        getUsers()
          .then((response) => setUsers(response.data))
          .then(() => setSelectedUserId(null))
          .then(() => console.log("Usuario actualizado exitosamente"))
          .catch((error) =>
            console.error(
              "Error al obtener usuarios después de actualizar uno:",
              error
            )
          );
      })
      .catch((error) =>
        console.error("Error al actualizar usuario:", error.message)
      );
  };

  const resetSelectedUser = () => {
    setSelectedUserId(null);
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <UserItem
            key={user._id}
            user={user}
            onGetUserById={handleGetUserById}
            onSelectForUpdate={handleSelectForUpdate}
            onDeleteUser={handleDeleteUser}
          />
        ))}
      </ul>

      <UserForm
        onCreateUser={handleCreateUser}
        onUpdateUser={handleUpdateUser}
        selectedUserId={selectedUserId}
        resetSelectedUser={resetSelectedUser}
      />
    </div>
  );
};

export default UserList;
