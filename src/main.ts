import express from "express";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});

let moralisStarted = false;

app.post("/start-moralis", async function (req, res) {
    try {
        await Moralis.start({
            apiKey: process.env.MORALIS_API_KEY,
        });
        console.log("Moralis started");
        moralisStarted = true;
    } catch (error) {
        console.log("Moralis not started. \n" + error);
        res.status(400).send(JSON.stringify(error));
    }
    res.send("Moralis started");
});

app.post("/moralis/openStream", async function (req, res) {
    if (moralisStarted) {
        try {
            console
            const streamConfig = {
                chains: [EvmChain.ETHEREUM],
                description: "Test stream",
                tag: "test",
                webhookUrl: process.env.WEBHOOK_URL || "" + "/hook/open-stream",
            }
            console.log("Stream opened");
            res.status(200).send(JSON.stringify(req.params));
        } catch (error) {
            console.log("Stream not opened. \n" + error);
            res.status(400).send(JSON.stringify(error));
        }
    } else {
        res.status(200).send(JSON.stringify("Moralis not started"));
    }
})

console.log("Server is running on port 3000");
app.listen(3000);
