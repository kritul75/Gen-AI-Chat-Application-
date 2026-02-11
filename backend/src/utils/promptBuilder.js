const buildPrompt = (messages) =>{

    //check if array (safety)
    if(!Array.isArray(messages)){
        throw new Error("messages must be an array");
    }

    const systemInstruction = {
        role:"user",
        parts:[
            {
                text:"You are a helpful, concise AI assistant for software developers"
            }
        ]
    };

    const conversation = messages.map(msg=>({
        role: msg.role === "model"? "model" : "user",
        parts: [{text: msg.content}]
    }))

    return [systemInstruction, ...conversation];
    // return [
    //     {
    //         role: "user",
    //         parts: [{text:messages}]
    //     }
    // ];
}

export default buildPrompt;