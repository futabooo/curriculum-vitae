const fs = require("fs");
const { mdToPdf } = require("md-to-pdf");

(async () => {
  await mdToPdf(
    { path: "./jp/README.md" },
    { dest: "./curriculum-vitae-jp.pdf" }
  );
  await mdToPdf(
    { path: "./en/README.md" },
    { dest: "./curriculum-vitae-en.pdf" }
  );
})();
