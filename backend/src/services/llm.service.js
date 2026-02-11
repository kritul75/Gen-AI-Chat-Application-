import dotenv from "dotenv";
dotenv.config();
// module.exports = callLLM = async (messages, temperature = 0.7) =>{
//     //placeholder logic
//     return{
//         role:"assistant",
//         content: "JavaScript is shitty"
//     };
// }

import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Authenticate
const callLLM = async (contents, temperature = 0.7, maxTokens = 5120) =>{
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
        
                        contents,
                        generationConfig: {
                            temperature: temperature,       // randomness
                            maxOutputTokens: maxTokens,     // max tokens
                            // topP: 0.9,                      // optional
                            // topK: 40                         // optional
                        }
                    });
    return {
            role:"model",
            chat:result.response.candidates[0].content.parts[0].text
            
        }
}

export default callLLM;



