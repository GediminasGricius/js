const fs=require("fs");
const input=fs.readFileSync(process.argv[2]).toString().split("\r\n");

let mas2d=[];
input.forEach((l)=>{
    mas2d.push(l.split(" ").map(Number));   
});

let n=mas2d.length;

for (i=0; i<n; i++){ 
    mas2d[i][i]=0;
    mas2d[n-1-i][i]=0;
}

console.log(mas2d);