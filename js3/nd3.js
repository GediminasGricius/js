// Failo nuskaitymas
const fs=require("fs");
const input=fs.readFileSync(process.argv[2]).toString().split("\r\n");

let mas2d=[];
input.forEach((l)=>{
    mas2d.push(l.split(" "));   
});


/*
const mas2d=[
  [3, 2, 5, 9],
  [6, 9, 3, 5],
  [7, 8, 9, 2],
  [7, 10, 2, 1],
];
*/
/*

// Kai masyvas yra [4,4]

for (let i=0; i<4; i++){
    let s="";
    for (let y=0; y<4; y++){
        s+=`${mas2d[i][y]} `;
    }
    console.log(s);
}
console.log("---------------");
for (let i=0; i<4; i++){
    let s="";
    for (let y=0; y<4; y++){
        s+=`${mas2d[y][i]} `;
    }
    console.log(s);
}
*/

// Kai masyvas yra bet kokio dydžio [n,n]
const n=mas2d.length;
for (let i=0; i<n; i++){
    let s="";
    for (let y=0; y<n; y++){
        s+=`${mas2d[i][y]} `;
    }
    console.log(s);
}
console.log("---------------");
for (let i=0; i<n; i++){
    let s="";
    for (let y=0; y<n; y++){
        s+=`${mas2d[y][i]} `;
    }
    console.log(s);
}