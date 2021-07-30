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
    getMany: ({ workspaceId, cacheId, }: {
        workspaceId: string;
        cacheId: string;
    }) => Promise<CacheTtl[]>;
    getOne: ({ workspaceId, cacheId, cacheTtlKey, }: {
        workspaceId: string;
        cacheId: string;
        cacheTtlKey: string;
    }) => Promise<CacheTtl>;
    create: (cacheTtl: {
        name?: string;
        key: string;
        type: "QUERY" | "TEMPLATE" | "TABLE";
        value: number;
        workspaceId: string;
        cacheId: string;
    }) => Promise<CacheTtl>;
    update: ({ workspaceId, cacheId, cacheTtlKey, update, }: {
        workspaceId: string;
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
    delete: ({ workspaceId, cacheId, cacheTtlKey, }: {
        workspaceId: string;
        cacheId: string;
        cacheTtlKey: string;
    }) => Promise<undefined>;
}
