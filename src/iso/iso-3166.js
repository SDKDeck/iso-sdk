const data = require("./iso-3166-data.json")

data.getByAlpha2Code = function(code) {
    return this.find(record => record.alpha2 === code);
}

data.getByAlpha3Code = function(code) {
    return this.find(record => record.alpha3 === code);
}

data.getByNumericCode = function(code) {
    return this.find(record => record.no == code);
}

data.getByName = function(name) {
    return this.find(record => record.name.toString().toLowerCase().indexOf(name) > -1);
}

module.exports = data