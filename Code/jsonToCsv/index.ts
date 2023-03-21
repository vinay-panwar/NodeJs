import { parse } from 'json2csv';

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
const csv = parse(obj, { delimiter: ',', header: true });
console.log(csv);
