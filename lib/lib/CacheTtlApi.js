"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheTtlApi = void 0;
const fetch_1 = require("./fetch");
class CacheTtlApi {
    constructor(url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
        this.getMany = async ({ cacheId }) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls`,
                apiKey: this.apiKey,
                method: "GET",
            });
        };
        this.getOne = async ({ cacheId, cacheTtlKey, }) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
                apiKey: this.apiKey,
                method: "GET",
            });
        };
        this.create = async (cacheTtl) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches/${cacheTtl.cacheId}/cache-ttls`,
                apiKey: this.apiKey,
                body: cacheTtl,
                method: "POST",
            });
        };
        this.update = async ({ cacheId, cacheTtlKey, update, }) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
                apiKey: this.apiKey,
                body: update,
                method: "PATCH",
            });
        };
        this.delete = async ({ cacheId, cacheTtlKey, cacheTtlType, }) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlType}/${cacheTtlKey}`,
                apiKey: this.apiKey,
                method: "DELETE",
            });
        };
    }
}
exports.CacheTtlApi = CacheTtlApi;
//# sourceMappingURL=CacheTtlApi.js.map