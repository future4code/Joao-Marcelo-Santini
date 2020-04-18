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
            headers: Object.assign(Object.assign({}, data.headers), { "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Methods": "*", "Access-Control-Allow-Origin": "*" }),
            body: JSON.stringify(data.body),
            statusCode: data.statusCode
        };
    }
}
exports.LambdaMiddlewareMapper = LambdaMiddlewareMapper;
