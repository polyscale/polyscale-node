import { CacheTtlApi } from "../CacheTtlApi";
import { fetchJson } from "../fetch";

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
  let api = new CacheTtlApi(URL, KEY);

  test("CacheApi.getMany", async () => {
    await api.getMany({ cacheId: ID });

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches/${ID}/cache-ttls`,
      apiKey: KEY,
      method: "GET",
    });
  });

  test("CacheApi.getOne", async () => {
    await api.getOne({ cacheId: ID, cacheTtlKey: TTL_KEY });

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches/${ID}/cache-ttls/${TTL_KEY}`,
      apiKey: KEY,
      method: "GET",
    });
  });

  test("CacheApi.create", async () => {
    const BODY = {
      name: "some-name",
      key: TTL_KEY,
      type: "TEMPLATE" as "QUERY" | "TEMPLATE" | "TABLE",
      value: 20,
      cacheId: ID,
    };

    await api.create(BODY);

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches/${ID}/cache-ttls`,
      apiKey: KEY,
      method: "POST",
      body: BODY,
    });
  });

  test("CacheApi.delete", async () => {
    await api.delete({ cacheId: ID, cacheTtlKey: TTL_KEY });

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches/${ID}/cache-ttls/${TTL_KEY}`,
      apiKey: KEY,
      method: "DELETE",
    });
  });
});
