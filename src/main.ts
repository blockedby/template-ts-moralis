import express from "express";
import dotenv from "dotenv";

import { MoralisRouter } from "./moralis";

dotenv.config();

const app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.use("/moralis", MoralisRouter)


console.log("Server is running on port 3000");
app.listen(3000);
