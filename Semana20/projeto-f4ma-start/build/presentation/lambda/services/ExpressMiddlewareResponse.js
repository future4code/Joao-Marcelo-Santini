"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MiddlewareResponse {
    constructor() {
        this.data = {
            statusCode: 200
        };
    }
    set endRequest(cb) {
        this._endRequest = cb;
    }
    get endRequest() {
        return this._endRequest;
    }
    status(code) {
        this.data.statusCode = code;
        return this;
    }
    sendStatus(code) {
        this.data.statusCode = code;
        this.endRequest && this.endRequest();
    }
    setHeaders(headers) {
        this.data.headers = headers;
    }
    send(body) {
        this.data.body = body;
        this.endRequest && this.endRequest();
    }
}
exports.MiddlewareResponse = MiddlewareResponse;
exports.getMiddlewareResponse = () => {
    return new MiddlewareResponse();
};
