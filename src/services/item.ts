import { SpaceShip } from "../intefaces/spaceShip";
import itemModel from "../models/item";

const insertShip = async (item: SpaceShip) => {
    const responseInsert = await itemModel.create(item);
    return responseInsert;
}

const getShips = async () => {
    const responseItem = await itemModel.find({});
    return responseItem;
};
export { insertShip, getShips }