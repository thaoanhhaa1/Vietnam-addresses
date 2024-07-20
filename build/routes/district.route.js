"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const district_controller_1 = require("../controllers/district.controller");
const router = express_1.default.Router();
router.get('/', district_controller_1.getAllDistrict);
exports.default = router;
