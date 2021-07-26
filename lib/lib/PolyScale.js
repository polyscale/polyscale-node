"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolyScale = void 0;
const CacheApi_1 = require("./CacheApi");
const CacheTtlApi_1 = require("./CacheTtlApi");
class PolyScale {
    constructor(options) {
        this.cache = new CacheApi_1.CacheApi(options.url, options.apiKey);
        this.cacheTtl = new CacheTtlApi_1.CacheTtlApi(options.url, options.apiKey);
    }
}
exports.PolyScale = PolyScale;
//# sourceMappingURL=PolyScale.js.map