"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheApi = void 0;
const fetch_1 = require("./fetch");
class CacheApi {
    constructor(url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
        this.getMany = async ({ workspaceId }) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/workspaces/${workspaceId}/caches`,
                apiKey: this.apiKey,
                method: "GET",
            });
        };
        this.getOne = async ({ workspaceId, cacheId, }) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/workspaces/${workspaceId}/caches/${cacheId}`,
                apiKey: this.apiKey,
                method: "GET",
            });
        };
        this.create = async ({ workspaceId, ...rest }) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/workspaces/${workspaceId}/caches`,
                apiKey: this.apiKey,
                body: { ...rest, workspaceId },
                method: "POST",
            });
        };
        this.delete = async ({ workspaceId, cacheId, }) => {
            return fetch_1.fetchJson({
                url: `${this.url}/v1/workspaces/${workspaceId}/caches/${cacheId}`,
                apiKey: this.apiKey,
                method: "DELETE",
            });
        };
    }
}
exports.CacheApi = CacheApi;
//# sourceMappingURL=CacheApi.js.map