"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = exports.signInSchema = exports.signUpSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.signInSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.createBlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(3),
    content: zod_1.default.string().min(3),
});
exports.updateBlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(3),
    content: zod_1.default.string().min(3),
    id: zod_1.default.string()
});
