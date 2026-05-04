const fs = require("fs");

fs.copyFileSync("./src/style.css", `./dist/style.css`);

console.log("CSS copied successfully!");
