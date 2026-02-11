import express from "express";
import chatRoute from "./routes/chat.routes.js";
import cors from "cors";
const app = express();
app.use(cors()); // Allows all origi
app.use(express.json());

app.use("/chat",chatRoute);

app.get("/health",(req,res)=>{
    res.json({status:"ok"});
})

export default app;