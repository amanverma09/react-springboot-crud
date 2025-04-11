import { useEffect, useState } from "react";
import { getMessage } from "../api";

const UserMessage = () => {
  const [Message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const data = await getMessage(); // API call
      console.log(data.data);
      setMessage(data.data);
    };

    fetchMessage();
  }, [Message]);

  return (
    <div>
      <h1>We Get Message From Spring Boot</h1>
      <h2>{Message}</h2>
    </div>
  );
};

export default UserMessage;
