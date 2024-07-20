import { Request, Response } from 'express';
import District from '../models/district';

export const getAllDistrict = async (req: Request, res: Response) => {
    try {
        const filter = req.query.cityId ? { parent_id: req.query.cityId } : {};

        const districts = await District.find(filter);

        res.json(districts);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
