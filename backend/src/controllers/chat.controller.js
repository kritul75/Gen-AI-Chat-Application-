import buildPrompt from "../utils/promptBuilder.js";
import callLLM from "../services/llm.service.js";

const chat = async (req, res) => {
  try {
    let { messages, temperature } = req.body;

    if (!Array.isArray(messages)) {
      messages = [
        {
          role: "user",
          content: String(messages),
        },
      ];
    }

    const contents = buildPrompt(messages);
    
    const response = await callLLM(contents, temperature);
    res.json(response);
  } catch (error) {
    res.status(error.status).json({message: error.statusText});
  }
};

export default chat;
