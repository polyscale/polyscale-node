"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CacheApi_1 = require("../CacheApi");
const fetch_1 = require("../fetch");
const URL = "some-url";
const KEY = "some-key";
const ID = "some-id";
jest.mock("../fetch.ts", () => ({
    fetchJson: jest.fn(),
}));
afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
});
describe("CacheApi", () => {
    let api = new CacheApi_1.CacheApi(URL, KEY);
    test("CacheApi.getMany", async () => {
        await api.getMany();
        expect(fetch_1.fetchJson).toHaveBeenCalledWith({
            url: `${URL}/v1/caches`,
            apiKey: KEY,
            method: "GET",
        });
    });
    test("CacheApi.getOne", async () => {
        await api.getOne({ cacheId: ID });
        expect(fetch_1.fetchJson).toHaveBeenCalledWith({
            url: `${URL}/v1/caches/${ID}`,
            apiKey: KEY,
            method: "GET",
        });
    });
    test("CacheApi.create", async () => {
        const BODY = {
            name: "some-name",
            descrption: "some-description",
            host: "some-host",
            port: 3000,
        };
        await api.create(BODY);
        expect(fetch_1.fetchJson).toHaveBeenCalledWith({
            url: `${URL}/v1/caches`,
            apiKey: KEY,
            method: "POST",
            body: BODY,
        });
    });
    test("CacheApi.delete", async () => {
        await api.delete({ cacheId: ID });
        expect(fetch_1.fetchJson).toHaveBeenCalledWith({
            url: `${URL}/v1/caches/${ID}`,
            apiKey: KEY,
            method: "DELETE",
        });
    });
});
//# sourceMappingURL=CacheApi.test.js.map