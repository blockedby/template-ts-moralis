import express from "express";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";
import * as Order from "./resources/protocol/artifacts/contracts/Order/Order.sol/Order.json";

const router = express.Router();

let moralisStarted = false;

router.post("/login", async function (req, res) {
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

router.post("/open-order-stream", async function (req, res) {
    if (moralisStarted) {
        try {
            console.log(req.body);
            const streamConfig = {
                chains: [EvmChain.ETHEREUM],
                description: "Monitor Order events",
                tag: "order",
                abi: Order.abi,
                includeContractLogs: true,
                topics0: [
                    "CallbackCreated(uint256,address)",
                    "Lended(uint256,address,uint256)",
                    "Repayed(uint256,address,uint256)",
                ],

                webhookUrl: process.env.WEBHOOK_URL || "" + "/hook/open/order",
            };
            console.log("Stream opened");
            res.status(200).send(JSON.stringify(req.params));
        } catch (error) {
            console.log("Stream not opened. \n" + error);
            res.status(400).send(JSON.stringify(error));
        }
    } else {
        res.status(400).send(JSON.stringify("Moralis not started"));
    }
});

export { router as MoralisRouter };
