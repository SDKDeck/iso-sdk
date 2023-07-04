const data = [
    {
        "code": "PHP",
        "no": 608,
        "decimals": 2,
        "name": "Philippine Peso"
    }
]

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