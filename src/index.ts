import cors from 'cors';
import dotenv from 'dotenv';
import express, {
    ErrorRequestHandler,
    NextFunction,
    Request,
    Response,
} from 'express';
import connectDB from './db';
import router from './routes';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
