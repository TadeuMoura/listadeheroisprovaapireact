import {adicionar} from '../repository/heroRepository'
import { Router } from 'express'
const server=Router();

server.post('/heroi' , async (req, resp) => {
    try {
        const infoHero = req.body;
        const addHero = await adicionar (addHero);
        resp.send.resposta

    } catch (err) {
        resp.status(400).send({erro:err.message});
    }
})
export default server;