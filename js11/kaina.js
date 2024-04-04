// Sukurkite skaičiuoklę kuri būtų skirta suskaičiuoti prekės pabrangimą arba atpigimą tam tikru procentu.Jūsų skaičiuoklėje turėtų būti įvedami tokie duomenys:
// 1. pradinė kaina(įvedimo laukas)
// 2. kainos pokytis(pasirinkimo laukas: brangsta, pinga)
// 3. procentai

// Jūsų sukurtas puslapis turėtų pateikti apskaičiuotą kainą pritaikius kainos pokytį procentais.

// Keletas reikalavimų Jūsų puslapiui:
// 1. Prieš įvedant duomenis visi laukeliai turi būti bespalviai
// 2. Įvedant duomenis turi tikrinti ar įvesti duomenys teisingi, įvedus neteisingus duomenis tas laukelis turėtų nusidažyti raudonai įvedus duomenis teisingai - laukelis turėtų nusidažyti žaliai
// 3. Jei duomenys yra neįvesti arba įvesti neteisingai skaičiavimo mygtukas turi būti išjungtas
// 4. Procentų skaičius turi būti įvedamas ne didesnis nei 100 ir ne mažesnis už 0
// 5. Turi būti išvedami pranešimai(tekstiniai apie klaidas)

//Kintamajam prisiskiriam HTML objekta
//const skaiciuotiBtn=document.getElementById("skaiciuoti");

//Paimti vieną elementą HTML objektą, mygtuką 
const skaiciuotiBtn = document.querySelector("#skaiciuoti");

//Prisiskiriame ivedimo lauka
const kainaInp = document.querySelector("#kaina");

const procInp = document.getElementById("procentai");
//Prisiskiriame isvedimo div
const rezultatasDiv = document.querySelector("#rez");

const optionSelect = document.querySelector("#option");

const error = document.querySelector("#error");
const message = document.querySelector("#message");

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
message.style.visibility = "hidden";

skaiciuoti = () => {
    if (optionSelect.value === "higher") {
        const price = parseInt(kainaInp.value) + ((kainaInp.value * procInp.value) / 100);
        rezultatasDiv.innerHTML = `Galutinė produkto kaina: ${price} Eur`;
    }
    if (optionSelect.value === "lower") {
        const price = kainaInp.value - ((kainaInp.value * procInp.value) / 100);
        rezultatasDiv.innerHTML = `Galutinė produkto kaina: ${price} Eur`;
    }
    console.log(typeof kainaInp.value);
    kainaInp.value = '';
    procInp.value = '';
    skaiciuotiBtn.disabled = true;
}

//Įjungiame mygtuką

ijungtiMygtuka = () => {
    if (kainaInp.value == '' || isNaN(kainaInp.value)) {
        skaiciuotiBtn.disabled = true;
        error.innerHTML = "Įveskite kaina"
        error.style.visibility = "visible";
        kainaInp.className = "form-control is-invalid";
    } else {
        
        //error.innerHTML=""
        error.style.visibility = "hidden";
        kainaInp.className = "form-control is-valid";
        if ((procInp.value > 100 || procInp.value < 0)) {
            skaiciuotiBtn.disabled = true;
        }else{
            skaiciuotiBtn.disabled = false;
        }
    }

    
}

ijungtiMygtuka2 = () => {
    if (procInp.value == '' || isNaN(procInp.value)) {
        skaiciuotiBtn.disabled = true;
        message.innerHTML = "Įveskite skaičių nuo 0 iki 100"
        message.style.visibility = "visible";
        procInp.className = "form-control is-invalid";
    } else if (procInp.value > 100 || procInp.value < 0) {
        skaiciuotiBtn.disabled = true;
        message.innerHTML = "Įveskite skaičių nuo 0 iki 100"
        message.style.visibility = "visible";
        procInp.className = "form-control is-invalid";
    } else if (kainaInp.value == '') {
        skaiciuotiBtn.disabled = true;
        error.innerHTML = "Įveskite skaičių"
        error.style.visibility = "visible";
        kainaInp.className = "form-control is-invalid";
    } else {
        skaiciuotiBtn.disabled = false;
        message.style.visibility = "hidden";
        procInp.className = "form-control is-valid";
    }
}

skaiciuotiBtn.onclick = skaiciuoti;

kainaInp.oninput = ijungtiMygtuka;
procInp.oninput = ijungtiMygtuka2;

