var data = new Date();

console.log(data.getDate())

console.log(data.getHours())

console.log(data.getMinutes())

console.log(data.getSeconds())

console.log(data.getDay())

console.log(data.getFullYear())

console.log((data).toLocaleString())

console.log(data.getMilliseconds())

console.log(Date.parse(new Date()))


var dias = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"]

console.log(dias[data.getDay()])