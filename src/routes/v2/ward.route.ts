import express from 'express';
import { getAllWard } from '../../controllers/v2/ward.controller';

const router = express.Router();

router.get('/', getAllWard);

export default router;
