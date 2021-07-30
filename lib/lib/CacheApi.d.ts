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
    getMany: (workspaceId: string) => Promise<Cache[]>;
    getOne: (workspaceId: string, cacheId: string) => Promise<Cache>;
    create: (workspaceId: string, cache: {
        id?: string | undefined;
        name: string;
        description?: string | undefined;
        host: string;
        port: number;
        workspaceId: string;
    }) => Promise<{
        id: string;
    }>;
    delete: (workspaceId: string, cacheId: string) => Promise<undefined>;
}
