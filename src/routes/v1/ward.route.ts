import express from 'express';
import { getAllWard } from '../../controllers/v1/ward.controller';

const router = express.Router();

router.get('/', getAllWard);

export default router;
