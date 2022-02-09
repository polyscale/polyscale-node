import { fetchJson } from "./fetch";

export type TtlType = "AUTO" | "MANUAL" | "QUERY" | "TEMPLATE" | "TABLE";

type AutoTtl = {
  key: string;
  type: "AUTO";
  cacheId: string;
};

type ManualTtl = {
  key: string;
  type: "MANUAL";
  cacheId: string;
};

export type CacheTtl =
  | {
      value: number;
      key: string;
      type: "QUERY" | "TEMPLATE" | "TABLE";
      cacheId: string;
      name?: string;
    }
  | AutoTtl
  | ManualTtl;

export class CacheTtlApi {
  constructor(private url: string, private apiKey: string) {}

  getMany = async ({ cacheId }: { cacheId: string }) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls`,
      apiKey: this.apiKey,
      method: "GET",
    }) as Promise<Array<CacheTtl>>;
  };

  getOne = async ({
    cacheId,
    cacheTtlKey,
  }: {
    cacheId: string;
    cacheTtlKey: string;
  }) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
      apiKey: this.apiKey,
      method: "GET",
    }) as Promise<CacheTtl>;
  };

  create = async (cacheTtl: CacheTtl) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheTtl.cacheId}/cache-ttls`,
      apiKey: this.apiKey,
      body: cacheTtl,
      method: "POST",
    }) as Promise<CacheTtl>;
  };

  update = async ({
    cacheId,
    cacheTtlKey,
    update,
  }: {
    cacheId: string;
    cacheTtlKey: string;
    update:
      | {
          name: string;
          value: number;
        }
      | {
          name?: string;
          value: number;
        }
      | {
          name: string;
          value?: number;
        };
  }) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
      apiKey: this.apiKey,
      body: update,
      method: "PATCH",
    }) as Promise<CacheTtl>;
  };

  delete = async ({
    cacheId,
    cacheTtlKey,
    cacheTtlType,
  }: {
    cacheId: string;
    cacheTtlKey: string;
    cacheTtlType: TtlType;
  }) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}/cache-ttls/${cacheTtlType}/${cacheTtlKey}`,
      apiKey: this.apiKey,
      method: "DELETE",
    }) as Promise<undefined>;
  };
}
