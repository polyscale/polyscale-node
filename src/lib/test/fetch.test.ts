import fetch from "node-fetch";
import { mockImplementOnce } from "../../test/utils";
import { fetchJson, PolyScaleError } from "../fetch";

jest.mock("node-fetch");

afterEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

describe("fetch", () => {
  test("PolyScaleError", () => {
    const error = new PolyScaleError({
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
      mockImplementOnce(fetch, () => ({
        status: 200,
        json: () => Promise.resolve("some-value"),
      }));

      const data = await fetchJson({
        url: "some-url",
        method: "GET",
        apiKey: "some-key",
      });

      expect(fetch).toHaveBeenCalledWith("some-url", {
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
      mockImplementOnce(fetch, () => ({
        status: 204,
      }));

      const data = await fetchJson({
        url: "some-url",
        method: "GET",
        apiKey: "some-key",
      });

      expect(fetch).toHaveBeenCalledWith("some-url", {
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
      mockImplementOnce(fetch, () => ({
        status: 400,
        json: () => ({
          message: "some-message",
          error: "some-error",
          code: "some-code",
          statusCode: 400,
        }),
      }));

      try {
        await fetchJson({
          url: "some-url",
          method: "GET",
          apiKey: "some-key",
        });
      } catch (error) {
        expect(fetch).toHaveBeenCalledWith("some-url", {
          method: "GET",
          body: undefined,
          headers: {
            Accepts: "application/json",
            Authorization: "Bearer some-key",
            "Content-Type": "application/json",
          },
        });

        expect(error as PolyScaleError).toBeInstanceOf(PolyScaleError);
        expect((error as PolyScaleError).statusCode).toEqual(400);
        expect((error as PolyScaleError).code).toEqual("some-code");
        expect((error as PolyScaleError).error).toEqual("some-error");
        expect((error as PolyScaleError).message).toEqual("some-message");
      }
    });
  });
});
