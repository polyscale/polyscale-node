import { CacheApi } from "./CacheApi";
import { CacheTtlApi } from "./CacheTtlApi";
declare type Options = {
    apiKey: string;
    url: string;
};
export declare class PolyScale {
    cache: CacheApi;
    cacheTtl: CacheTtlApi;
    constructor(options: Options);
}
export {};
