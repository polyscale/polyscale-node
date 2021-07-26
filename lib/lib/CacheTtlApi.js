"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheTtlApi = void 0;
const fetch_1 = require("./fetch");
class CacheTtlApi {
    constructor(url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
        this.getMany = async (cacheId) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls`,
                apiKey: this.apiKey,
                method: "GET",
            });
        };
        this.getOne = async (cacheId, cacheTtlKey) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
                apiKey: this.apiKey,
                method: "GET",
            });
        };
        this.create = async (cacheId, cacheTtl) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls`,
                apiKey: this.apiKey,
                body: cacheTtl,
                method: "POST",
            });
        };
        this.update = async (cacheId, cacheTtlKey, cacheTtl) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
                apiKey: this.apiKey,
                body: cacheTtl,
                method: "PATCH",
            });
        };
        this.delete = async (cacheId, cacheTtlKey) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
                apiKey: this.apiKey,
                method: "DELETE",
            });
        };
    }
}
exports.CacheTtlApi = CacheTtlApi;
//# sourceMappingURL=CacheTtlApi.js.map