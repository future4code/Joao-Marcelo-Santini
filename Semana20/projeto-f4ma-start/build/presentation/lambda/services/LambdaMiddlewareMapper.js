"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressMiddlewareRequest_1 = require("./ExpressMiddlewareRequest");
class LambdaMiddlewareMapper {
    static toMiddlewareRequest(event) {
        return ExpressMiddlewareRequest_1.getMiddlewareRequest({
            url: event.url,
            path: event.path,
            headers: event.headers,
            params: event.pathParams,
            query: event.queryStringParameters,
            method: event.httpMethod,
            body: event.body && JSON.parse(event.body)
        });
    }
    static toLambdaResponse(data) {
        return {
            headers: data.headers,
            body: JSON.stringify(data.body),
            statusCode: data.statusCode
        };
    }
}
exports.LambdaMiddlewareMapper = LambdaMiddlewareMapper;
