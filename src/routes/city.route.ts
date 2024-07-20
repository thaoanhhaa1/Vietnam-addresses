import express from 'express';
import { getAllCity } from '../controllers/city.controller';

const router = express.Router();

router.get('/', getAllCity);

export default router;
