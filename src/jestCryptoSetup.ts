import crypto from "crypto";

// Define crypto.randomUUID() on the global object:
Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
});

// Note: Created to resolve Jest's Error: Uncaught [TypeError: crypto.randomUUID is not a function] but can be used for other purposes.

// Refs:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/
// - https://stackoverflow.com/a/63749793/11841906
// - https://jestjs.io/docs/configuration#setupfilesafterenv-array
