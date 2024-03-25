// Failo nuskaitymas
const fs=require("fs");
const input=fs.readFileSync("data.csv").toString().split(" ");
console.log(input);

const mas=Array(10).fill(0);
input.forEach((x)=> mas[x]++ );
mas.forEach((d,i)=> console.log(`[${i}]=>${d}`));

