var markdownpdf = require("markdown-pdf");

var mdDocs = ["./jp/README.md", "./en/README.md"],
  pdfDocs = mdDocs.map(function (d) {
    return d.replace("README.md", "curriculum-vitae.pdf");
  });

markdownpdf({ cssPath: "./pdfstyle.css" })
  .from(mdDocs)
  .to(pdfDocs, function () {
    pdfDocs.forEach(function (d) {
      console.log("Created", d);
    });
  });
