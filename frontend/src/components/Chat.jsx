import { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Chat = ({messages, loading }) =>{

    const bottomRef = useRef(null);
    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behaviour: "smooth"});
    },[messages, loading])
    return(
        
            <div className="chatBox">
                {messages.map((msg, ind)=>(
                    <div
                        key={ind}
                        className={`message message-${msg.role}`}
                    >
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                ))}
                
                {loading && <div className="message">Typing...</div>}
                {/* scroll target */}
                <div ref={bottomRef}></div>
            </div>
        
    )
}

export default Chat;
