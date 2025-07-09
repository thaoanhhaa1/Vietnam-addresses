"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWard = void 0;
const redis_config_1 = __importDefault(require("../../configs/redis.config"));
const ward_1 = __importDefault(require("../../models/v1/ward"));
const getAllWard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query.districtId
            ? { parent_id: req.query.districtId }
            : {};
        const wardsRedis = yield redis_config_1.default.getInstance()
            .getClient()
            .get(`wards::${JSON.stringify(filter)}`);
        if (wardsRedis)
            return res.json(JSON.parse(wardsRedis));
        const districts = yield ward_1.default.find(filter, {}, {
            sort: { name: 1 },
        });
        redis_config_1.default.getInstance()
            .getClient()
            .set(`wards::${JSON.stringify(filter)}`, JSON.stringify(districts));
        res.json(districts);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllWard = getAllWard;
