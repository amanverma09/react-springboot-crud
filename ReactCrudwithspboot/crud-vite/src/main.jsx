import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import UserForm from "./Components/UserForm.jsx";
// import UserList from "./Components/UserList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <UserForm /> */}
    {/* <UserList  /> */}
  </StrictMode>
);
