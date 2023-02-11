var markdownpdf = require("markdown-pdf");

// markdownpdf().from("./jp/README.md").to("./jp/README.pdf", function () {
// console.log("Done")
// })

var mdDocs = ["./jp/README.md", "./en/README.md"],
  pdfDocs = mdDocs.map(function (d) {
    return d.replace(".md", ".pdf");
  });

markdownpdf({ cssPath: "./pdfstyle.css" })
  .from(mdDocs)
  .to(pdfDocs, function () {
    pdfDocs.forEach(function (d) {
      console.log("Created", d);
    });
  });
