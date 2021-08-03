"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const utils_1 = require("../../test/utils");
const fetch_1 = require("../fetch");
jest.mock("node-fetch");
afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
});
describe("fetch", () => {
    test("PolyScaleError", () => {
        const error = new fetch_1.PolyScaleError({
            statusCode: 400,
            code: "some-code",
            error: "some-error",
            message: "some-message",
        });
        expect(error.statusCode).toEqual(400);
        expect(error.code).toEqual("some-code");
        expect(error.error).toEqual("some-error");
        expect(error.message).toEqual("some-message");
    });
    describe("fetchJson", () => {
        it("succeeds", async () => {
            utils_1.mockImplementOnce(node_fetch_1.default, () => ({
                status: 200,
                json: () => Promise.resolve("some-value"),
            }));
            const data = await fetch_1.fetchJson({
                url: "some-url",
                method: "GET",
                apiKey: "some-key",
            });
            expect(node_fetch_1.default).toHaveBeenCalledWith("some-url", {
                method: "GET",
                body: undefined,
                headers: {
                    Accepts: "application/json",
                    Authorization: "Bearer some-key",
                    "Content-Type": "application/json",
                },
            });
            expect(data).toEqual("some-value");
        });
        it("returns nothing for 204 responses", async () => {
            utils_1.mockImplementOnce(node_fetch_1.default, () => ({
                status: 204,
            }));
            const data = await fetch_1.fetchJson({
                url: "some-url",
                method: "GET",
                apiKey: "some-key",
            });
            expect(node_fetch_1.default).toHaveBeenCalledWith("some-url", {
                method: "GET",
                body: undefined,
                headers: {
                    Accepts: "application/json",
                    Authorization: "Bearer some-key",
                    "Content-Type": "application/json",
                },
            });
            expect(data).toEqual(undefined);
        });
        it("throws a PolyScaleError on >=400 responses", async () => {
            utils_1.mockImplementOnce(node_fetch_1.default, () => ({
                status: 400,
                json: () => ({
                    message: "some-message",
                    error: "some-error",
                    code: "some-code",
                    statusCode: 400,
                }),
            }));
            try {
                await fetch_1.fetchJson({
                    url: "some-url",
                    method: "GET",
                    apiKey: "some-key",
                });
            }
            catch (error) {
                expect(node_fetch_1.default).toHaveBeenCalledWith("some-url", {
                    method: "GET",
                    body: undefined,
                    headers: {
                        Accepts: "application/json",
                        Authorization: "Bearer some-key",
                        "Content-Type": "application/json",
                    },
                });
                expect(error).toBeInstanceOf(fetch_1.PolyScaleError);
                expect(error.statusCode).toEqual(400);
                expect(error.code).toEqual("some-code");
                expect(error.error).toEqual("some-error");
                expect(error.message).toEqual("some-message");
            }
        });
    });
});
//# sourceMappingURL=fetch.test.js.map