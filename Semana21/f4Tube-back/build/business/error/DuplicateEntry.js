"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
class DuplicateEntryError extends BaseError_1.BaseError {
    constructor(message) {
        super(401, message);
    }
}
exports.DuplicateEntryError = DuplicateEntryError;
