const fs = require("fs");
const util = require("util");

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }
    
    async Read(filePath){
        try {
            return await this.reader(filePath,"utf8");
        } catch (error) {
            console.log("Error:", error);
            return undefined;
        }
    }
}

module.exports = Reader;