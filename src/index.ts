import cors from 'cors';
import dotenv from 'dotenv';
import express, {
    ErrorRequestHandler,
    NextFunction,
    Request,
    Response,
} from 'express';
import Redis from './configs/redis.config';
import connectDB from './db';
import router from './routes';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(
    (
        _err: ErrorRequestHandler,
        _req: Request,
        res: Response,
        _next: NextFunction,
    ) => {
        res.status(404).json({ message: 'Resource not found' });
    },
);

Redis.getInstance()
    .connect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch(console.log);
