# @polyscale/polyscale-node

Client for interacting with the PolyScale API.

## Example Usage

```typescript
import PolyScale from "../src/client";

const polyscale = new PolyScale({
  url: "https://url-to-api.com",
  apiKey: "some-api-key",
});

/**
 * Basic usage
 */
polyscale.cache
  .create({
    name: "Example Cache",
    host: "localhost",
    port: 4000,
    workspaceId: "some-id",
  })
  .then((cache) => {
    console.dir(cache);

    polyscale.cacheTtl.create(cache.id, {
      type: "TABLE",
      value: 5,
      key: "tableA",
    });
  })
  .catch((error) => {
    console.error(error);
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
      workspaceId: "some-id",
    });

    console.dir(cache);

    await polyscale.cacheTtl.create(cache.id, {
      type: "TABLE",
      value: 5,
      key: "tableA",
    });
  } catch (error) {
    console.error(error);
  }
};

init();
```

## License
