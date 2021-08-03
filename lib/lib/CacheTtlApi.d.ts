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
    getMany: ({ cacheId }: {
        cacheId: string;
    }) => Promise<CacheTtl[]>;
    getOne: ({ cacheId, cacheTtlKey, }: {
        cacheId: string;
        cacheTtlKey: string;
    }) => Promise<CacheTtl>;
    create: (cacheTtl: {
        name?: string;
        key: string;
        type: "QUERY" | "TEMPLATE" | "TABLE";
        value: number;
        cacheId: string;
    }) => Promise<CacheTtl>;
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
    delete: ({ cacheId, cacheTtlKey, }: {
        cacheId: string;
        cacheTtlKey: string;
    }) => Promise<undefined>;
}
