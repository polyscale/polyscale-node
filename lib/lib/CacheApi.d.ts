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
    getOne: ({ cacheId }: {
        cacheId: string;
    }) => Promise<Cache>;
    create: ({ ...body }: {
        name: string;
        description?: string;
        host: string;
        port: number;
    }) => Promise<{
        id: string;
    }>;
    purge: ({ cacheId }: {
        cacheId: string;
    }) => Promise<unknown>;
    delete: ({ cacheId }: {
        cacheId: string;
    }) => Promise<undefined>;
}
