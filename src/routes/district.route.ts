import express from 'express';
import { getAllDistrict } from '../controllers/district.controller';

const router = express.Router();

router.get('/', getAllDistrict);

export default router;
