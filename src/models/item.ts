import { Schema, Types, model, Model } from "mongoose";
import { SpaceShip } from "../intefaces/spaceShip";

const itemSchema = new Schema<SpaceShip>(
    {
        shipType: {
            type: String,
            enum: [ "vehículos lanzadera", "naves no tripuladas o robóticas", "naves espaciales tripuladas" ],
            required: true,
        },
        destination: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const itemModel =  model("items", itemSchema);
export default itemModel;