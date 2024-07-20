"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1', routes_1.default);
app.use((_err, _req, res, _next) => {
    res.status(404).json({ message: 'Resource not found' });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
