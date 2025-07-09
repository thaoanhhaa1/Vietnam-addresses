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
exports.getAllDistrict = void 0;
const redis_config_1 = __importDefault(require("../../configs/redis.config"));
const district_1 = __importDefault(require("../../models/v1/district"));
const getAllDistrict = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query.cityId ? { parent_id: req.query.cityId } : {};
        const districtsRedis = yield redis_config_1.default.getInstance()
            .getClient()
            .get(`districts::${JSON.stringify(filter)}`);
        if (districtsRedis)
            return res.json(JSON.parse(districtsRedis));
        const districts = yield district_1.default.find(filter, {}, {
            sort: { name: 1 },
        });
        redis_config_1.default.getInstance()
            .getClient()
            .set(`districts::${JSON.stringify(filter)}`, JSON.stringify(districts));
        res.json(districts);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllDistrict = getAllDistrict;
