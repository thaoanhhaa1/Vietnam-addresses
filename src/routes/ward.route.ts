import express from 'express';
import { getAllWard } from '../controllers/ward.controller';

const router = express.Router();

router.get('/', getAllWard);

export default router;
