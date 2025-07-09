import { Request, Response } from 'express';
import Redis from '../../configs/redis.config';
import District from '../../models/v1/district';

export const getAllDistrict = async (req: Request, res: Response) => {
    try {
        const filter = req.query.cityId ? { parent_id: req.query.cityId } : {};

        const districtsRedis = await Redis.getInstance()
            .getClient()
            .get(`districts::${JSON.stringify(filter)}`);

        if (districtsRedis) return res.json(JSON.parse(districtsRedis));

        const districts = await District.find(
            filter,
            {},
            {
                sort: { name: 1 },
            },
        );

        Redis.getInstance()
            .getClient()
            .set(
                `districts::${JSON.stringify(filter)}`,
                JSON.stringify(districts),
            );

        res.json(districts);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
