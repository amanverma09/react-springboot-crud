/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api";

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p style={{ color: "red" }}>No users found. Add some!</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              <div className="user-info">
                <strong>{user.name}</strong> <br />
                <small>{user.email}</small>
              </div>
              <div className="user-actions">
                <button className="edit-btn" onClick={() => onEdit(user)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
