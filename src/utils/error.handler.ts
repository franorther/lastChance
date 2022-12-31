import { Response } from "express";

const handleHtttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(500);
    res.send({ error });
};

export { handleHtttp};