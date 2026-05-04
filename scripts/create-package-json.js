const { argv } = require("node:process");
const fs = require("fs");

const cliArguments = argv.slice(2);

if (cliArguments[0] === "--esm") {
  fs.writeFileSync("dist/esm/package.json", JSON.stringify({ type: "module" }));
  console.log("ESM build's package.json created successfully!");
}

if (cliArguments[0] === "--cjs") {
  fs.writeFileSync(
    "dist/cjs/package.json",
    JSON.stringify({ type: "commonjs" }),
  );
  console.log("CJS build's package.json created successfully!");
}
