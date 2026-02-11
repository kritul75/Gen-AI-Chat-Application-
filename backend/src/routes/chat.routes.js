import express from "express";
import chatController from "../controllers/chat.controller.js";
const chatRoute = express.Router();

chatRoute.post("/",chatController );


export default chatRoute;