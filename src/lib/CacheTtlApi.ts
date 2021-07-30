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

  getMany = async ({
    workspaceId,
    cacheId,
  }: {
    workspaceId: string;
    cacheId: string;
  }) => {
    return fetchJson({
      url: `${this.url}/v1/workspaces/${workspaceId}/caches/${cacheId}/cache-ttls`,
      apiKey: this.apiKey,
      method: "GET",
    }) as Promise<Array<CacheTtl>>;
  };

  getOne = async ({
    workspaceId,
    cacheId,
    cacheTtlKey,
  }: {
    workspaceId: string;
    cacheId: string;
    cacheTtlKey: string;
  }) => {
    return fetchJson({
      url: `${this.url}/v1/workspaces/${workspaceId}/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
      apiKey: this.apiKey,
      method: "GET",
    }) as Promise<CacheTtl>;
  };

  create = async (cacheTtl: {
    name?: string;
    key: string;
    type: "QUERY" | "TEMPLATE" | "TABLE";
    value: number;
    workspaceId: string;
    cacheId: string;
  }) => {
    return fetchJson({
      url: `${this.url}/v1/workspaces/${cacheTtl.workspaceId}/caches/${cacheTtl.cacheId}/cache-ttls`,
      apiKey: this.apiKey,
      body: cacheTtl,
      method: "POST",
    }) as Promise<CacheTtl>;
  };

  update = async ({
    workspaceId,
    cacheId,
    cacheTtlKey,
    update,
  }: {
    workspaceId: string;
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
      url: `${this.url}/v1/workspaces/${workspaceId}/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
      apiKey: this.apiKey,
      body: update,
      method: "PATCH",
    }) as Promise<CacheTtl>;
  };

  delete = async ({
    workspaceId,
    cacheId,
    cacheTtlKey,
  }: {
    workspaceId: string;
    cacheId: string;
    cacheTtlKey: string;
  }) => {
    return fetchJson({
      url: `${this.url}/v1/workspaces/${workspaceId}/caches/${cacheId}/cache-ttls/${cacheTtlKey}`,
      apiKey: this.apiKey,
      method: "DELETE",
    }) as Promise<undefined>;
  };
}
