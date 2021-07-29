import { fetchJson } from "./fetch";

export type Cache = {
  id: string;
  userId: string;
  workspaceId: string;
  name: string;
  description?: string;
  host: string;
  port: number;
  createdAt: string;
};

export class CacheApi {
  constructor(private url: string, private apiKey: string) {}

  getMany = async () => {
    return fetchJson({
      url: `${this.url}/v1/caches`,
      apiKey: this.apiKey,
      method: "GET",
    }) as Promise<Array<Cache>>;
  };

  getOne = async (cacheId: string) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}`,
      apiKey: this.apiKey,
      method: "GET",
    }) as Promise<Cache>;
  };

  create = async (cache: {
    id?: string;
    name: string;
    description?: string;
    host: string;
    port: number;
    workspaceId: string;
  }) => {
    return fetchJson({
      url: `${this.url}/v1/caches`,
      apiKey: this.apiKey,
      body: cache,
      method: "POST",
    }) as Promise<{ id: string }>;
  };

  delete = async (cacheId: string) => {
    return fetchJson({
      url: `${this.url}/v1/caches/${cacheId}`,
      apiKey: this.apiKey,
      method: "DELETE",
    }) as Promise<undefined>;
  };
}
