import { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import "/src/components.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const refreshUsers = () => setCurrentUser(null);

  return (
    <div>
      <h1 className="title">
        React +<span style={{ color: "green" }}>Vite +</span>
        <span style={{ color: "red" }}> Spring Boot+ </span><span style={{ color: "orange" }}>MongoDB CRUD</span> 
      </h1>
      <UserForm currentUser={currentUser} onUserAdded={refreshUsers} />
      <UserList onEdit={setCurrentUser} />
    </div>
  );
}

export default App;
