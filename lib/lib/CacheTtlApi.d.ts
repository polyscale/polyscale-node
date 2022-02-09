export declare type TtlType = "AUTO" | "MANUAL" | "QUERY" | "TEMPLATE" | "TABLE";
declare type AutoTtl = {
    key: string;
    type: "AUTO";
    cacheId: string;
};
declare type ManualTtl = {
    key: string;
    type: "MANUAL";
    cacheId: string;
};
export declare type CacheTtl = {
    value: number;
    key: string;
    type: "QUERY" | "TEMPLATE" | "TABLE";
    cacheId: string;
    name?: string;
} | AutoTtl | ManualTtl;
export declare class CacheTtlApi {
    private url;
    private apiKey;
    constructor(url: string, apiKey: string);
    getMany: ({ cacheId }: {
        cacheId: string;
    }) => Promise<CacheTtl[]>;
    getOne: ({ cacheId, cacheTtlKey, }: {
        cacheId: string;
        cacheTtlKey: string;
    }) => Promise<CacheTtl>;
    create: (cacheTtl: CacheTtl) => Promise<CacheTtl>;
    update: ({ cacheId, cacheTtlKey, update, }: {
        cacheId: string;
        cacheTtlKey: string;
        update: {
            name: string;
            value: number;
        } | {
            name?: string;
            value: number;
        } | {
            name: string;
            value?: number;
        };
    }) => Promise<CacheTtl>;
    delete: ({ cacheId, cacheTtlKey, cacheTtlType, }: {
        cacheId: string;
        cacheTtlKey: string;
        cacheTtlType: TtlType;
    }) => Promise<undefined>;
}
export {};
