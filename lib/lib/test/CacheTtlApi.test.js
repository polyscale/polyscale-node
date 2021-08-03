"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CacheTtlApi_1 = require("../CacheTtlApi");
const fetch_1 = require("../fetch");
const URL = "some-url";
const KEY = "some-key";
const ID = "some-id";
const TTL_KEY = "some-key";
jest.mock("../fetch.ts", () => ({
    fetchJson: jest.fn(),
}));
afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
});
describe("CacheApi", () => {
    let api = new CacheTtlApi_1.CacheTtlApi(URL, KEY);
    test("CacheApi.getMany", async () => {
        await api.getMany({ cacheId: ID });
        expect(fetch_1.fetchJson).toHaveBeenCalledWith({
            url: `${URL}/v1/caches/${ID}/cache-ttls`,
            apiKey: KEY,
            method: "GET",
        });
    });
    test("CacheApi.getOne", async () => {
        await api.getOne({ cacheId: ID, cacheTtlKey: TTL_KEY });
        expect(fetch_1.fetchJson).toHaveBeenCalledWith({
            url: `${URL}/v1/caches/${ID}/cache-ttls/${TTL_KEY}`,
            apiKey: KEY,
            method: "GET",
        });
    });
    test("CacheApi.create", async () => {
        const BODY = {
            name: "some-name",
            key: TTL_KEY,
            type: "TEMPLATE",
            value: 20,
            cacheId: ID,
        };
        await api.create(BODY);
        expect(fetch_1.fetchJson).toHaveBeenCalledWith({
            url: `${URL}/v1/caches/${ID}/cache-ttls`,
            apiKey: KEY,
            method: "POST",
            body: BODY,
        });
    });
    test("CacheApi.delete", async () => {
        await api.delete({ cacheId: ID, cacheTtlKey: TTL_KEY });
        expect(fetch_1.fetchJson).toHaveBeenCalledWith({
            url: `${URL}/v1/caches/${ID}/cache-ttls/${TTL_KEY}`,
            apiKey: KEY,
            method: "DELETE",
        });
    });
});
//# sourceMappingURL=CacheTtlApi.test.js.map