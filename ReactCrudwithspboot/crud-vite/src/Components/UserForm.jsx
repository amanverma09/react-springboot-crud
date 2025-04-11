/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createUser, updateUser } from "../api";

const UserForm = ({ currentUser, onUserAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (currentUser) {
      await updateUser(currentUser.id, { name, email });
    } else {
      await createUser({ name, email });
    }
    onUserAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ color: "lightgreen" }}>
        {currentUser ? "Edit User" : "Add User"}
      </h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">{currentUser ? "Update" : "Create"}</button>
    </form>
  );
};

export default UserForm;
