"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MiddlewareRequest {
    constructor(props) {
        this.props = props;
    }
    get url() {
        return this.props.url;
    }
    get path() {
        return this.props.path;
    }
    get body() {
        return this.props.body;
    }
    get params() {
        return this.props.params;
    }
    set params(newParams) {
        this.props.params = newParams;
    }
    get query() {
        return this.props.query;
    }
    get headers() {
        return this.props.headers;
    }
    get method() {
        return this.props.method;
    }
}
exports.MiddlewareRequest = MiddlewareRequest;
exports.getMiddlewareRequest = (props) => {
    return new MiddlewareRequest(props);
};
