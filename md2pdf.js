var markdownpdf = require("markdown-pdf");

var mdDocs = ["./jp/README.md", "./en/README.md"],
  pdfDocs = mdDocs.map(function (d) {
    if (d.includes("jp")) {
      return "curriculum-vitae-jp.pdf";
    } else {
      return "curriculum-vitae-en.pdf";
    }
  });

markdownpdf({ cssPath: "./pdfstyle.css" })
  .from(mdDocs)
  .to(pdfDocs, function () {
    pdfDocs.forEach(function (d) {
      console.log("Created", d);
    });
  });
