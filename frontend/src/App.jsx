import InputBox from "./components/InputBox";
import { useState, useEffect } from "react";
import axios from "axios";
//import TextParser from "./utils/TextParser";

import Chat from "./components/Chat";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [messages, setMessages] = useState([]);

  const handleFetch = async (prompt) => {
    try {
      setError({});
      setLoading(true);
      // creating new message and appending to old
      const newMessage = {
        role:"user",
        content: prompt
      }
      setMessages((prev)=>{
        const next =[...prev, newMessage];
        return next;
      })
      const res = await axios.post("http://localhost:5000/chat", {
        messages: [...messages, newMessage],
        temperature: 0.9,
      });
      setMessages((prev) => {
        const next = [...prev, {role: res?.data?.role, content: res?.data?.chat}];
        return next;
      });
      console.log(res.data);
      console.log(messages);
      //setData(res.data.chat);
    } catch (err) {
      // Safely derive a message from Axios error
      console.log(err);
      const message =
        err?.response?.data?.message || // backend-sent message
        err?.response?.data?.error || // alternative key
        err?.message || // generic js error
        "Something went wrong. Please try again.";

      setError({message});
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-app-container">  
      <Chat messages={messages} loading={loading}/>
      <div>
        {error && <div className="error">{error.message} or Token limit exceeded.</div>}
        <InputBox handleFetch={handleFetch} />
      </div>
    </div>
  );
}

export default App;
