import PropTypes from "prop-types";

const UserItem = ({ user, onGetUserById, onSelectForUpdate, onDeleteUser }) => (
  <li>
    <p>{user.name}</p>
    <p>{user.lastName}</p>
    <p>{user.email}</p>
    <p>{user.userName}</p>
    <p>{user.password}</p>
    <p>{user.role}</p>
    <p>{user.createdAt}</p>
    <button onClick={() => onGetUserById(user._id)}>Obtener por ID</button>
    <button onClick={() => onSelectForUpdate(user._id)}>
      Seleccionar para actualizar
    </button>
    <button onClick={() => onDeleteUser(user._id)}>Eliminar</button>
  </li>
);

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  onGetUserById: PropTypes.func.isRequired,
  onSelectForUpdate: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default UserItem;
