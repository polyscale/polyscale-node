import { CacheApi } from "./CacheApi";
import { CacheTtlApi } from "./CacheTtlApi";

type Options = {
  apiKey: string;
  url: string;
};

export class PolyScale {
  cache: CacheApi;
  cacheTtl: CacheTtlApi;

  constructor(options: Options) {
    this.cache = new CacheApi(options.url, options.apiKey);
    this.cacheTtl = new CacheTtlApi(options.url, options.apiKey);
  }
}
