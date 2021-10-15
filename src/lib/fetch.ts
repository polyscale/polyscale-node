import fetch from "node-fetch";

export class PolyScaleError extends Error {
  code: string;
  error: string;
  statusCode: number;

  constructor({
    statusCode,
    code,
    error,
    message,
  }: {
    statusCode: number;
    code: string;
    error: string;
    message: string;
  }) {
    super(message);

    this.code = code;
    this.error = error;
    this.statusCode = statusCode;
  }
}

export const fetchJson = async ({
  url,
  method,
  apiKey,
  body,
}: {
  url: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  apiKey: string;
  body?: Record<string, any>;
}) => {
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accepts: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 204) {
    return undefined;
  }

  if (response.status >= 400) {
    const parsedBody = await response.json();

    throw new PolyScaleError({
      message: `${parsedBody.message}`,
      error: parsedBody.error,
      code: parsedBody.code,
      statusCode: parsedBody.statusCode,
    });
  }

  return response.json() as unknown;
};
