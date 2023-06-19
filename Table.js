class Table {
    constructor(arr){
        this.header = arr[0];
        arr.shift(); //DELETE FIRST ROW
        this.rows = arr;
    }

    //NEEDED TO RETURN A VALUE
    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;