import fetch from "node-fetch";

export const fetchJson = async ({
  url,
  method,
  apiKey,
  body,
}: {
  url: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
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

    throw new Error(parsedBody.message);
  }

  return response.json() as unknown;
};
