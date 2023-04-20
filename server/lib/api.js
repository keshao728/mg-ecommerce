"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const checkout_1 = require("./checkout");
exports.app = (0, express_1.default)();
/**
 * Catch async errors when awaiting promises
 */
function runAsync(callback) {
    return (req, res, next) => {
        callback(req, res, next).catch(next);
    };
}
/**
 * Checkouts
 */
exports.app.post("/checkouts/", runAsync(async ({ body }, res) => {
    res.send(await (0, checkout_1.createStripeCheckoutSession)(body.line_items));
}));
//# sourceMappingURL=api.js.map