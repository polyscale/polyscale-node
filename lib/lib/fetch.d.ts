export declare class PolyScaleError extends Error {
    code: string;
    error: string;
    statusCode: number;
    constructor({ statusCode, code, error, message, }: {
        statusCode: number;
        code: string;
        error: string;
        message: string;
    });
}
export declare const fetchJson: ({ url, method, apiKey, body, }: {
    url: string;
    method: "GET" | "POST" | "PATCH" | "DELETE";
    apiKey: string;
    body?: Record<string, any> | undefined;
}) => Promise<unknown>;
