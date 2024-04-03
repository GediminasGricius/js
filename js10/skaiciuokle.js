//Kintamajam prisiskiriam HTML objekta
//const skaiciuotiBtn=document.getElementById("skaiciuoti");

//Paimti vieną elementą HTML objektą, mygtuką 
const skaiciuotiBtn = document.querySelector("#skaiciuoti");

//Prisiskiriame ivedimo lauka
const kainaInp = document.querySelector("#kaina");

//Prisiskiriame isvedimo div
const rezultatasDiv = document.querySelector("#rez");

const pokytisSelect = document.querySelector("#pokytis");

const error = document.querySelector("#error");

const procentasInp = document.querySelector("#procentas");

//Paimti visus elemtus, grazinamas masyvas
//const skaiciuotiBtn=document.querySelectorAll(".btn-success");

/*
skaiciuotiBtn.forEach((b)=>{
    console.log( b.innerHTML);
})
*/

// Išjungiame mygtuką
skaiciuotiBtn.disabled = true;
error.style.visibility = "hidden";
errorProc.style.visibility = "hidden";


skaiciuoti = () => {
    if (procentasInp.value >= 0 && procentasInp.value <= 100) {
        if (pokytisSelect.value == "Brangsta") {
            rezultatasDiv.innerHTML = kainaInp.value * (1 + (procentasInp.value / 100));
        } else {
            rezultatasDiv.innerHTML = kainaInp.value * (1 - (procentasInp.value / 100));


        }
    } else {
        errorProc.innerHTML = "Iveskite procenta nuo 0 iki 100"
        errorProc.style.visibility = "visible";
        procentasInp.className = "form-control is-invalid";
    }
    kainaInp.value = '';
    procentasInp.value = '';
    skaiciuotiBtn.disabled = true;
    procentasInp.className = "form-control ";
    //kainaInp.className = "form-control ";
    kainaInp.classList.remove('is-invalid','is-valid');
}




//Įjungiame mygtuką
ijungtiMygtuka = () => {
    if (kainaInp.value == '' || isNaN(kainaInp.value)) {
        skaiciuotiBtn.disabled = true;
        error.innerHTML = "Įveskite skaičių"
        error.style.visibility = "visible";
        kainaInp.className = "form-control is-invalid";
    } else {
        skaiciuotiBtn.disabled = false;
        //error.innerHTML=""
        error.style.visibility = "hidden";
        kainaInp.className = "form-control is-valid";
    }

}
ijungtiMygtukaProc = () => {
    if (procentasInp.value == '' || isNaN(procentasInp.value)) {
        skaiciuotiBtn.disabled = true;
        errorProc.innerHTML = "Įveskite skaičių"
        errorProc.style.visibility = "visible";
        procentasInp.className = "form-control is-invalid";
    } else {
        skaiciuotiBtn.disabled = false;
        //error.innerHTML=""
        errorProc.style.visibility = "hidden";
        procentasInp.className = "form-control is-valid";
    }

}


skaiciuotiBtn.onclick = skaiciuoti;
// Kai kažkoks elementas paspaudžiamas
//kainaInp.onclick=ijungtiMygtuka;

//kainaInp.onblur=ijungtiMygtuka;
/*
kainaInp.onfocus=()=>{
    console.log("focus");
}
*/
kainaInp.onkeyup = ijungtiMygtuka;
procentasInp.onkeyup = ijungtiMygtukaProc;

//onclick -paspausta
//ononfocuse, onblur - aktyvuojamas deaktivuojamas
//onkeypress, onkeyup, onkeydown - mygtuku paspaudimai
//onchange (įvyksta kai elementa nužymimas ir pakeičiama reikšmė), oninput (kai pasikeičia reikšmė) - reiksmes pasikeitimas