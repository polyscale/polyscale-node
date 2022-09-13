"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheApi = void 0;
const fetch_1 = require("./fetch");
class CacheApi {
    constructor(url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
        this.getMany = async () => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches`,
                apiKey: this.apiKey,
                method: "GET",
            });
        };
        this.getOne = async ({ cacheId }) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches/${cacheId}`,
                apiKey: this.apiKey,
                method: "GET",
            });
        };
        this.create = async ({ ...body }) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches`,
                apiKey: this.apiKey,
                body: { ...body },
                method: "POST",
            });
        };
        this.purge = async ({ cacheId }) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches/${cacheId}/purge`,
                apiKey: this.apiKey,
                method: "PUT",
                body: {},
            });
        };
        this.delete = async ({ cacheId }) => {
            return (0, fetch_1.fetchJson)({
                url: `${this.url}/v1/caches/${cacheId}`,
                apiKey: this.apiKey,
                method: "DELETE",
            });
        };
    }
}
exports.CacheApi = CacheApi;
//# sourceMappingURL=CacheApi.js.map