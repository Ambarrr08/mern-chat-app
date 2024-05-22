import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import {app, server} from "./socket/socket.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { Socket } from "socket.io";


const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//     //root
//     res.send("Hi");
// });


server.listen(PORT, () => {

    connectToMongoDB();
    console.log(`Serer is running on ${PORT}`)
});