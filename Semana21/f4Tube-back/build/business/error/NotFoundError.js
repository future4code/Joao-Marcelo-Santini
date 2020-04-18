"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
class NotFoundError extends BaseError_1.BaseError {
    constructor(message) {
        super(404, message);
    }
}
exports.NotFoundError = NotFoundError;
