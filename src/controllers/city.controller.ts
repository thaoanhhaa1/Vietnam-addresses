import { Request, Response } from 'express';
import City from '../models/city';

export const getAllCity = async (_req: Request, res: Response) => {
    try {
        const cities = await City.find(
            {},
            {},
            {
                sort: { name: 1 },
            },
        );

        res.json(cities);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
