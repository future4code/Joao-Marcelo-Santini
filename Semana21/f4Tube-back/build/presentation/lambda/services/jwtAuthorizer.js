"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
class JwtAuthorizer {
    constructor() {
        this.JWT_SECRET = process.env.JWT_SECRET || "";
    }
    generateToken(input, expiresIn) {
        const token = jwt.sign({
            id: input.id,
        }, this.JWT_SECRET, {
            expiresIn
        });
        return token;
    }
    getUsersInfoFromToken(token) {
        const result = jwt.verify(token, this.JWT_SECRET); // userId, type
        return {
            id: result.id,
            userDevice: result.userDevice
        };
    }
}
exports.JwtAuthorizer = JwtAuthorizer;
