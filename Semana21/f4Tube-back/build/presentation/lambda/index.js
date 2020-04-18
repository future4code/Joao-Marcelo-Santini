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
const ExpressMiddleware_1 = require("./services/ExpressMiddleware");
const routes_1 = __importDefault(require("../routes"));
const ExpressMiddlewareResponse_1 = require("./services/ExpressMiddlewareResponse");
const LambdaMiddlewareMapper_1 = require("./services/LambdaMiddlewareMapper");
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mappedEvent = LambdaMiddlewareMapper_1.LambdaMiddlewareMapper.toMiddlewareRequest(event);
        console.log("Event: ", mappedEvent);
        const mw = new ExpressMiddleware_1.ExpressMiddleware(routes_1.default, mappedEvent, ExpressMiddlewareResponse_1.getMiddlewareResponse());
        const response = yield mw.execute();
        const mappedResponse = LambdaMiddlewareMapper_1.LambdaMiddlewareMapper.toLambdaResponse(response);
        console.log("Response: ", mappedResponse);
        return mappedResponse;
    }
    catch (err) {
        console.log("Error: ", err);
        const errorResponse = LambdaMiddlewareMapper_1.LambdaMiddlewareMapper.toLambdaResponse({
            body: Object.assign({}, err.body),
            headers: {},
            statusCode: err.statusCode || 400,
        });
        console.log("ErrorResponse: ", errorResponse);
        return errorResponse;
    }
});
