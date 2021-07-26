import { fetchJson } from "./fetch";

export type TtlType = "QUERY" | "TEMPLATE" | "TABLE";

export type CacheTtl = {
  value: number;
  key: string;
  type: TtlType;
  cacheId: string;
  name?: string;
};

export class CacheTtlApi {
  constructor(private url: string, private apiKey: string) {}

  getMany = async (cacheId: string) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls`,
      apiKey: this.apiKey,
      method: "GET",
    }) as Promise<Array<CacheTtl>>;
  };

  getOne = async (cacheId: string, cacheTtlKey: string) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
      apiKey: this.apiKey,
      method: "GET",
    }) as Promise<CacheTtl>;
  };

  create = async (
    cacheId: string,
    cacheTtl: {
      name?: string;
      key: string;
      type: "QUERY" | "TEMPLATE" | "TABLE";
      value: number;
    }
  ) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls`,
      apiKey: this.apiKey,
      body: cacheTtl,
      method: "POST",
    }) as Promise<CacheTtl>;
  };

  update = async (
    cacheId: string,
    cacheTtlKey: string,
    cacheTtl: {
      name?: string;
      value?: number;
    }
  ) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
      apiKey: this.apiKey,
      body: cacheTtl,
      method: "PATCH",
    }) as Promise<CacheTtl>;
  };

  delete = async (cacheId: string, cacheTtlKey: string) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
      apiKey: this.apiKey,
      method: "DELETE",
    }) as Promise<undefined>;
  };
}
