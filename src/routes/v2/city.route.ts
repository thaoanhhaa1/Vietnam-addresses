import express from 'express';
import { getAllCity } from '../../controllers/v2/city.controller';

const router = express.Router();

router.get('/', getAllCity);

export default router;
