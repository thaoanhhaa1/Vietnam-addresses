import { Request, Response } from 'express';
import Redis from '../../configs/redis.config';
import City from '../../models/v1/city';

export const getAllCity = async (_req: Request, res: Response) => {
    try {
        const citiesRedis = await Redis.getInstance().getClient().get('cities');
        console.log('🚀 ~ getAllCity ~ citiesRedis:', citiesRedis);

        if (citiesRedis) return res.json(JSON.parse(citiesRedis));

        const cities = await City.find(
            {},
            {},
            {
                sort: { name: 1 },
            },
        );

        Redis.getInstance().getClient().set('cities', JSON.stringify(cities));

        res.json(cities);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
