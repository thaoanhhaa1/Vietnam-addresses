import { Request, Response } from 'express';
import Redis from '../../configs/redis.config';
import Ward from '../../models/v2/ward';

export const getAllWard = async (req: Request, res: Response) => {
    try {
        const filter = req.query.cityId ? { parent_id: req.query.cityId } : {};

        const wardsRedis = await Redis.getInstance()
            .getClient()
            .get(`wards-v2::${JSON.stringify(filter)}`);

        if (wardsRedis) return res.json(JSON.parse(wardsRedis));

        const districts = await Ward.find(
            filter,
            {},
            {
                sort: { name: 1 },
            },
        );

        Redis.getInstance()
            .getClient()
            .set(
                `wards-v2::${JSON.stringify(filter)}`,
                JSON.stringify(districts),
            );

        res.json(districts);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
