export declare type Cache = {
    id: string;
    userId: string;
    workspaceId: string;
    name: string;
    description?: string;
    host: string;
    port: number;
    createdAt: string;
};
export declare class CacheApi {
    private url;
    private apiKey;
    constructor(url: string, apiKey: string);
    getMany: () => Promise<Cache[]>;
    getOne: (cacheId: string) => Promise<Cache>;
    create: (cache: {
        name: string;
        description?: string;
        host: string;
        port: number;
        workspaceId: string;
    }) => Promise<{
        id: string;
    }>;
    delete: (cacheId: string) => Promise<undefined>;
}
