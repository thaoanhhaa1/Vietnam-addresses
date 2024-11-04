import { createClient } from 'redis';

class Redis {
    private static instance: Redis;
    private client: any;

    private constructor() {
        this.client = createClient({
            url: process.env.REDIS_URL,
        });

        this.client.on('error', (err: any) =>
            console.log('Redis Client Error', err),
        );
    }

    public async connect() {
        await this.client.connect();
    }

    public getClient() {
        return this.client;
    }

    public static getInstance() {
        if (!Redis.instance) Redis.instance = new Redis();

        return Redis.instance;
    }
}

export default Redis;
