"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const city_route_1 = __importDefault(require("./city.route"));
const ward_route_1 = __importDefault(require("./ward.route"));
const router = express_1.default.Router();
router.use('/cities', city_route_1.default);
router.use('/wards', ward_route_1.default);
exports.default = router;
