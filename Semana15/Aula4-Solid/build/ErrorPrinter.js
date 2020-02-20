"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("./AppError");
class ErrorPrinter extends AppError_1.AppError {
    printError(message, errorDate) {
        return `${message} - ${errorDate}`;
    }
}
exports.ErrorPrinter = ErrorPrinter;
//# sourceMappingURL=ErrorPrinter.js.map