export declare const fetchJson: ({ url, method, apiKey, body, }: {
    url: string;
    method: "GET" | "POST" | "PATCH" | "DELETE";
    apiKey: string;
    body?: Record<string, any> | undefined;
}) => Promise<unknown>;
