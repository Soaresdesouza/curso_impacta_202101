var moment = require('moment');
moment.locale('pt-BR');
const now = moment();
console.log(now.format("dd"));
console.log(now.format("ddd"));
console.log(now.format("MMM"));
console.log(now.format("L"));
console.log(now.format("DD/MM/yyyy"));
console.log(now.format("HH:mm:ss"));