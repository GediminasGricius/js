// Failo nuskaitymas
const fs=require("fs");
const input=fs.readFileSync(process.argv[2]).toString().split(" ");


const mas=Array(10).fill(0);
input.forEach((x)=> mas[x]++ );
mas.forEach((d,i)=> console.log(`[${i}]=>${d}`));

