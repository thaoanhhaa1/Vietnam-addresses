import express from 'express';
import city from './city.route';
import district from './district.route';
import ward from './ward.route';

const router = express.Router();

router.use('/cities', city);
router.use('/districts', district);
router.use('/wards', ward);

export default router;
