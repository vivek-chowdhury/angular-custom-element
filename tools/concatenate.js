const fs = require("fs-extra");
const concat = require("concat");

concatenate = async () => {
  const files = [
    "dist/angular-custom-element/runtime-es2015.js",
    "dist/angular-custom-element/polyfills-es2015.js",
    "dist/angular-custom-element/main-es2015.js",
  ];

  const filesEs5 = [
    "dist/angular-custom-element/runtime-es5.js",
    "dist/angular-custom-element/polyfills-es5.js",
    "dist/angular-custom-element/main-es5.js",
  ];
  await fs.ensureDir("output");
  await concat(files, "output/app-dialog-es2015.js");
  await concat(filesEs5, "output/app-dialog-es5.js");
};
concatenate();
