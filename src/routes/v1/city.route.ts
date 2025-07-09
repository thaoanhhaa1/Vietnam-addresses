import express from 'express';
import { getAllCity } from '../../controllers/v1/city.controller';

const router = express.Router();

router.get('/', getAllCity);

export default router;
