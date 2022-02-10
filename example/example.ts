import assert from "assert";
import { CacheTtl, PolyScale } from "../src/main";

const polyscale = new PolyScale({
  url: "http://localhost:8000",
  apiKey: process.env.API_KEY ?? "some-api-key",
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
      database: "mysql",
      cachingEnabled: true,
      defaultCachingBehaviour: "autoCached",
    });

    console.dir(cache);

    let ttls: Array<CacheTtl>;

    await polyscale.cacheTtl.create({
      cacheId: cache.id,
      type: "AUTO",
      key: "some-template",
    });

    ttls = await polyscale.cacheTtl.getMany({ cacheId: cache.id });

    assert(ttls.length === 1, "Expected 1 ttl");
    assert(
      ttls.find((d) => d.type === "AUTO"),
      "Expected AUTO ttl"
    );

    await polyscale.cacheTtl.create({
      cacheId: cache.id,
      type: "MANUAL",
      key: "some-template",
    });

    ttls = await polyscale.cacheTtl.getMany({ cacheId: cache.id });

    assert(ttls.length === 1, "Expected 1 ttl");
    assert(
      ttls.find((d) => d.type === "MANUAL"),
      "Expected MANUAL ttl"
    );

    await polyscale.cacheTtl.create({
      cacheId: cache.id,
      type: "TABLE",
      value: 5,
      key: "tableA",
    });

    ttls = await polyscale.cacheTtl.getMany({ cacheId: cache.id });

    assert(ttls.length === 2, "Expected 2 ttls");

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
      cacheTtlType: "TABLE",
    });

    await polyscale.cacheTtl.delete({
      cacheId: cache.id,
      cacheTtlKey: "some-template",
      cacheTtlType: "MANUAL",
    });

    ttls = await polyscale.cacheTtl.getMany({ cacheId: cache.id });

    assert(ttls.length === 0, "Expected 0 ttls");

    await polyscale.cache.delete({
      cacheId: cache.id,
    });
  } catch (error) {
    console.error(error);
  }
};

void init();
