import { useState } from "react";

const InputBox = ({handleFetch}) =>{
    const [input, setInput] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input === "") return;
        handleFetch(input);
        setInput("");
    }
    const handleEnter=(e)=>{
        e.preventDefault()
        if(input === "") return;
        if(e.key == "Enter") handleFetch(input);
        setInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="input-field" 
                   type="text" value={input} 
                   placeholder="Type to search" 
                   onChange={(e)=>setInput(e.target.value)}
                   onKeyDown={(e)=> e.key =="Enter" && handleEnter(e)}
            />
            <button className="input-btn" type="submit">Search</button>
        </form>
    )
}

export default InputBox;