"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MResource = exports.MCounter = void 0;
const counter_1 = __importDefault(require("./schemas/counter"));
exports.MCounter = counter_1.default;
const resource_1 = __importDefault(require("./schemas/resource"));
exports.MResource = resource_1.default;
