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
    getMany: (workspaceId: string, cacheId: string) => Promise<CacheTtl[]>;
    getOne: (workspaceId: string, cacheId: string, cacheTtlKey: string) => Promise<CacheTtl>;
    create: (workspaceId: string, cacheId: string, cacheTtl: {
        name?: string;
        key: string;
        type: "QUERY" | "TEMPLATE" | "TABLE";
        value: number;
    }) => Promise<CacheTtl>;
    update: (workspaceId: string, cacheId: string, cacheTtlKey: string, cacheTtl: {
        name?: string;
        value?: number;
    }) => Promise<CacheTtl>;
    delete: (workspaceId: string, cacheId: string, cacheTtlKey: string) => Promise<undefined>;
}
