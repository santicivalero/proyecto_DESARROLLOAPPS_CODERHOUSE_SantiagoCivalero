const fs = require("fs");
const path = require("path");

const imagesDir = path.resolve(__dirname, "assets/images");
const outputFile = path.resolve(__dirname, "imageAssets.js");

const files = fs.readdirSync(imagesDir);
const imports = files
  .map((file) => `"${file}": require("./assets/images/${file}")`)
  .join(",\n");

const content = `const images = {\n${imports}\n};\n\nexport default images;`;

fs.writeFileSync(outputFile, content);
console.log("imageAssets.js generado con éxito.");
