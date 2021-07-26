export declare type TtlType = "QUERY" | "TEMPLATE" | "TABLE";
export declare type CacheTtl = {
    value: number;
    key: string;
    type: TtlType;
    cacheId: string;
    name?: string;
};
export declare class CacheTtlApi {
    private url;
    private apiKey;
    constructor(url: string, apiKey: string);
    getMany: (cacheId: string) => Promise<CacheTtl[]>;
    getOne: (cacheId: string, cacheTtlKey: string) => Promise<CacheTtl>;
    create: (cacheId: string, cacheTtl: {
        name?: string;
        key: string;
        type: "QUERY" | "TEMPLATE" | "TABLE";
        value: number;
    }) => Promise<CacheTtl>;
    update: (cacheId: string, cacheTtlKey: string, cacheTtl: {
        name?: string;
        value?: number;
    }) => Promise<CacheTtl>;
    delete: (cacheId: string, cacheTtlKey: string) => Promise<undefined>;
}
