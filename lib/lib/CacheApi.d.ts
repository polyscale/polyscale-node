export declare type Cache = {
    id: string;
    userId: string;
    workspaceId: string;
    name: string;
    description?: string;
    host: string;
    port: number;
    database: "mysql" | "mariadb" | "postgres" | "mssql" | "graphql";
    cachingEnabled: boolean;
    defaultCachingBehaviour: "autoCached" | "uncached";
    createdAt: string;
    connectionUriTemplate: string;
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
        name: Cache["name"];
        description?: Cache["description"];
        host: Cache["host"];
        port: Cache["port"];
        database: Cache["database"];
        cachingEnabled: Cache["cachingEnabled"];
        defaultCachingBehaviour: Cache["defaultCachingBehaviour"];
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
