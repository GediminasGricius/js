// Failo nuskaitymas
const fs=require("fs");
const input=fs.readFileSync(process.argv[2]).toString().split(" ").map(Number);
console.log(typeof input[0]);
let minT=input[0];
let minD=1;
let maxT=input[0];
let maxD=1;
input.forEach( (d,i)=>{
    if (minT>d){
        minT=d;
        minD=i+1;
    }
    if (maxT<d){
        maxT=d;
        maxD=i+1;
    }
});
console.log(`Min: ${minT}, ${minD}  Max: ${maxT}, ${maxD}`);