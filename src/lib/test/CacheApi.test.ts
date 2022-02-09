import { Cache, CacheApi } from "../CacheApi";
import { fetchJson } from "../fetch";

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
  let api = new CacheApi(URL, KEY);

  test("CacheApi.getMany", async () => {
    await api.getMany();

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches`,
      apiKey: KEY,
      method: "GET",
    });
  });

  test("CacheApi.getOne", async () => {
    await api.getOne({ cacheId: ID });

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches/${ID}`,
      apiKey: KEY,
      method: "GET",
    });
  });

  test("CacheApi.create", async () => {
    const BODY = {
      name: "some-name",
      description: "some-description",
      host: "some-host",
      port: 3000,
      database: "mysql" as Cache["database"],
      cachingEnabled: true,
      defaultCachingBehaviour: "autoCached" as "autoCached",
    };

    await api.create(BODY);

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches`,
      apiKey: KEY,
      method: "POST",
      body: BODY,
    });
  });

  test("CacheApi.purge", async () => {
    await api.purge({ cacheId: ID });

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches/${ID}/purge`,
      apiKey: KEY,
      method: "PUT",
      body: {},
    });
  });

  test("CacheApi.delete", async () => {
    await api.delete({ cacheId: ID });

    expect(fetchJson).toHaveBeenCalledWith({
      url: `${URL}/v1/caches/${ID}`,
      apiKey: KEY,
      method: "DELETE",
    });
  });
});
