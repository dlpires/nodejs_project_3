var pdf = require("html-pdf");

class PDFWriter{
    static WritePDF(filePath, html){
        pdf.create(html,{}).toFile(filePath, (err) => {})
    }
}

module.exports = PDFWriter;