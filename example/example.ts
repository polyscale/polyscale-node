import { PolyScale } from "../src/main";

const polyscale = new PolyScale({
  url: "http://localhost:8000",
  apiKey: "some-api-key",
});

/**
 * Using Async/Await
 */
const init = async () => {
  try {
    const cache = await polyscale.cache.create({
      name: "Example Cache",
      host: "localhost",
      port: 4000,
    });

    console.dir(cache);

    await polyscale.cacheTtl.create({
      cacheId: cache.id,
      type: "TABLE",
      value: 5,
      key: "tableA",
    });

    await polyscale.cacheTtl.update({
      cacheId: cache.id,
      cacheTtlKey: "tableA",
      update: {
        value: 30,
      },
    });

    await polyscale.cacheTtl.delete({
      cacheId: cache.id,
      cacheTtlKey: "tableA",
    });

    await polyscale.cache.delete({
      cacheId: cache.id,
    });
  } catch (error) {
    console.error(error);
  }
};

init();
