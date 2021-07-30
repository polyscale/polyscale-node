import { PolyScale } from "../src/main";

const polyscale = new PolyScale({
  url: "http://localhost:8000",
  apiKey: "some-api-key",
});

const workspaceId = "3b0a3ed0-34ed-4277-b7c5-b9954e85fef2";

/**
 * Using Async/Await
 */
const init = async () => {
  try {
    const cache = await polyscale.cache.create({
      id: "94a53ba7-6a3b-4a8c-888d-aaec02a6d141",
      name: "Example Cache",
      host: "localhost",
      port: 4000,
      workspaceId,
    });

    console.dir(cache);

    await polyscale.cacheTtl.create({
      workspaceId,
      cacheId: cache.id,
      type: "TABLE",
      value: 5,
      key: "tableA",
    });

    await polyscale.cacheTtl.update({
      workspaceId,
      cacheId: cache.id,
      cacheTtlKey: "tableA",
      update: {
        value: 30,
      },
    });

    await polyscale.cacheTtl.delete({
      workspaceId,
      cacheId: cache.id,
      cacheTtlKey: "tableA",
    });

    await polyscale.cache.delete({
      workspaceId,
      cacheId: cache.id,
    });
  } catch (error) {
    console.error(error);
  }
};

init();
