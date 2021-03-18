const fs = require('fs')
const xml2js = require('xml2js')
const util = require('util')

let json = fs.readFileSync('products.json');
let products = JSON.parse(json);


let xml = fs.readFileSync('products.xml')
let xmlParser = new xml2js.Parser();



module.exports = {
    json_load: function load() {
        return products.products;
    },
    xml_load: function load() {
        let xproducts;
        xmlParser.parseString(xml, function (err, result) {
            xproducts = result['products']['product']
        });
        return xproducts;
    }
};

