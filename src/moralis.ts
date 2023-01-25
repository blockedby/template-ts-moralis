import express from "express";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";
import * as Order from "./resources/protocol/artifacts/contracts/Order/Order.sol/Order.json";

const router = express.Router();

router.post("/login", async function (req, res) {
    try {
        await Moralis.start({
            apiKey: process.env.MORALIS_API_KEY,
        });
        console.log("Moralis started");
    } catch (error) {
        console.log("Moralis not started. \n" + error);
        res.status(400).send(JSON.stringify(error));
    }
    res.send("Moralis started");
});

router.post("/stream/order/create", async function (req, res) {
    try {
        console.log(req.body);
        const streamConfig = {
            chains: [EvmChain.GOERLI],
            description: "Monitor Order events [GOERLI]",
            tag: "order",
            abi: Order.abi,
            includeContractLogs: true,
            topic0: [
                "CallbackCreated(uint256,address)",
                "Lended(uint256,address,uint256)",
                "Repayed(uint256,address,uint256)",
            ],
            //0x0c5a7d625337b6f7e1cee193ce2c68a6420bfd67
            webhookUrl: process.env.WEBHOOK_URL || "" + "/hook/open/order",
        };
        // Moralis SDK Core Error: [C0006] Request failed, Bad Request(400):
        // Could not POST to https://easy-hook-catcher.vercel.app/api/webhook. Please check your webhook URL.


        const stream = await Moralis.Streams.add(streamConfig);
        console.log("Stream opened");
        res.status(200).send(JSON.stringify(stream));
    } catch (error) {
        console.log("Stream not opened. \n" + error);
        res.status(400).send(JSON.stringify(error));
    }
});

router.post("/stream/order/addAddress", async function (req, res) {
    try {
        const resp = await Moralis.Streams.addAddress({
            id: req.body.stream.id,
            address: req.body.address,
        });
        res.status(200).send(JSON.stringify(resp.toJSON()));
    } catch (error) {
        console.log("Stream not opened. \n" + error);
        res.status(400).send(JSON.stringify(error));
    }
});

router;

export { router as MoralisRouter };
