"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchJson = exports.PolyScaleError = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class PolyScaleError extends Error {
    constructor({ statusCode, code, error, message, }) {
        super(message);
        this.code = code;
        this.error = error;
        this.statusCode = statusCode;
    }
}
exports.PolyScaleError = PolyScaleError;
const fetchJson = async ({ url, method, apiKey, body, }) => {
    const response = await (0, node_fetch_1.default)(url, {
        method,
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            Accepts: "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    if (response.status === 204) {
        return undefined;
    }
    if (response.status >= 400) {
        const parsedBody = await response.json();
        throw new PolyScaleError({
            message: `${parsedBody.message}`,
            error: parsedBody.error,
            code: parsedBody.code,
            statusCode: parsedBody.statusCode,
        });
    }
    return response.json();
};
exports.fetchJson = fetchJson;
//# sourceMappingURL=fetch.js.map