import { Request, Response } from 'express';
import Ward from '../models/ward';

export const getAllWard = async (req: Request, res: Response) => {
    try {
        const filter = req.query.districtId
            ? { parent_id: req.query.districtId }
            : {};

        const districts = await Ward.find(filter);

        res.json(districts);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
