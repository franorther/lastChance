import { Request, Response } from "express"
import { handleHtttp } from "../utils/error.handler";
import { insertShip, getShips } from "../services/item";

const getItem = (req: Request, res: Response) => {
    try {

    } catch (e) { //
        handleHtttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getShips();
        res.send(response);
    } catch (e) {
        handleHtttp(res, 'ERROR_GET_ITEMS')

    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHtttp(res, 'ERROR_UPDATE_ITEM')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        if (body.shipType === "naves espaciales tripuladas" && body.destination === "Moon") {
            console.log(body)
            const reponseItem = await insertShip(body)
            console.log(reponseItem)
            res.send(reponseItem);
        } else if (body.shipType === "naves espaciales tripuladas" && body.destination !== "Moon") {


            res.send({ "answer": "Ningun ser humano puede viajar tanto"});
        } else {
            console.log(body)
            const reponseItem = await insertShip(body)
            console.log(reponseItem)
            res.send({ "answer": "Nave spacial creada con exito y destino permitido"});
        }

    } catch (e) {
        handleHtttp(res, 'ERROR_POST_ITEM', e)
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHtttp(res, 'ERROR_DELETE_ITEM')
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }