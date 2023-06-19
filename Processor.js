class Processor{
    static Process(data){
        var splittedRows = data.split("\r\n");
        var rows = [];

        splittedRows.forEach(r => {
            var arr = r.split(",");
            rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;