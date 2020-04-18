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
const url_pattern_1 = __importDefault(require("url-pattern"));
class ExpressMiddleware {
    constructor(_app, _req, _res) {
        this._app = _app;
        this._req = _req;
        this._res = _res;
    }
    get app() {
        return this._app;
    }
    get req() {
        return this._req;
    }
    get res() {
        return this._res;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                this.res.endRequest = () => {
                    if (this.res.data.statusCode >= 200 && this.res.data.statusCode < 300) {
                        res(this.res.data);
                    }
                    else if (this.res.data.statusCode >= 400) {
                        rej(this.res.data);
                    }
                };
                const routeData = this.matchRoute();
                if (!routeData) {
                    rej({
                        statusCode: 404,
                        message: "Route not found"
                    });
                }
                routeData.handle(this.req, this.res);
            });
        });
    }
    matchRoute() {
        return this.app._router.stack.find((layer) => {
            if (!layer.route) {
                return false;
            }
            const methods = Object.keys(layer.route.methods) || "";
            const urlPattern = new url_pattern_1.default(layer.route.path);
            const pathsFromUrlPattern = urlPattern.match(this.req.path);
            if (methods[0].toLowerCase() === this.req.method.toLowerCase()) {
                if (pathsFromUrlPattern) {
                    this.req.params = Object.assign(Object.assign({}, this.req.params), pathsFromUrlPattern);
                    return true;
                }
                else {
                    if (layer.route.path === this.req.path) {
                        return true;
                    }
                }
            }
            return false;
        });
    }
}
exports.ExpressMiddleware = ExpressMiddleware;
