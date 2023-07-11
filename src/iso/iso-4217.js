const data = require("./iso-4217-data.min.json")

data.getByCode = function(code) {
    return this.find(record => record.code === code);
}

data.getByNumericCode = function(code) {
    return this.find(record => record.no == code);
}

data.getByName = function(name) {
    return this.find(record => record.name.toString().toLowerCase().indexOf(name) > -1);
}

module.exports = data