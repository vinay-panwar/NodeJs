"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json2csv_1 = require("json2csv");
const obj = [
    {
        name: 'name',
        data: new Date(),
    },
    {
        name: 'name',
        data: new Date(),
    },
    {
        name: 'name',
        data: new Date(),
    },
    {
        name: 'name',
        data: new Date(),
    },
    {
        name: 'name',
        data: new Date(),
    },
];
const csv = (0, json2csv_1.parse)(obj, { delimiter: ',', header: true });
console.log(csv);
//# sourceMappingURL=index.js.map