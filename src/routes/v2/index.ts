import express from 'express';
import city from './city.route';
import ward from './ward.route';

const router = express.Router();

router.use('/cities', city);
router.use('/wards', ward);

export default router;
