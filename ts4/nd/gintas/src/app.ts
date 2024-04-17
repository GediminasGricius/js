
import { Registration } from "./registration.js";

    const firstName = <HTMLInputElement>document.getElementById('firstName');
    const lastName = <HTMLInputElement>document.getElementById('lastName');
    const birthYear = <HTMLInputElement>document.getElementById('birthYear');
    const email = <HTMLInputElement>document.getElementById('email');
    const phone = <HTMLInputElement>document.getElementById('phone');
    const addRegistrationBtn =<HTMLButtonElement>document.getElementById(`addRegistration`);
       const loadDataButton=<HTMLButtonElement>document.getElementById(`loadData`);
    const dataTableBody=<HTMLElement>document.getElementById(`dataTableBody`);
       let registrationData:Registration[];
       const dataTable =<HTMLElement>document.getElementById("dataTable");
       const editForm =<HTMLElement>document.getElementById("editForm");
    
    
       addRegistrationBtn.onclick=()=>{
    const gender = <HTMLInputElement | null>document.querySelector('input[name="gender"]:checked');
    let reg:Registration;
    if (gender!=null){
         reg={
            firstName:firstName.value,
            lastName:lastName.value,
            birthYear:birthYear.value,
            gender:gender.value,
            phone:phone.value,
            email:email.value,
        }
    }else{
         reg={
            firstName:firstName.value,
            lastName:lastName.value,
            birthYear:birthYear.value,
            phone:phone.value,
            email:email.value,
        } 
    }
    
  
    fetch("https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/Registracija.json",{
method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(reg)
    })
    
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Irasas pridetas");
        console.log(data);

    })
}

const showData=()=>{
    dataTableBody.innerHTML="";
registrationData.forEach((reg)=>{
    const tr = document.createElement("tr");

    const tdVardas=document.createElement("td");
        tdVardas.innerHTML=reg.firstName;
    
        const tdPavarde=document.createElement("td");
        tdPavarde.innerHTML=reg.lastName;
    
        const tdGimimoMetai=document.createElement("td");
        tdGimimoMetai.innerHTML=reg.birthYear.toString();
   
        const tdV=document.createElement("td");
  tr.appendChild(tdVardas); 
  tr.appendChild(tdPavarde); 
  tr.appendChild(tdGimimoMetai); 
  tr.appendChild(tdV); 

dataTableBody.appendChild(tr);
tr.onclick=()=>{
    dataTable.style.display="none";
    editForm.style.display="block";
    (<HTMLInputElement>document.getElementById("firstNameEdit")).value=reg.firstName;
    (<HTMLInputElement>document.getElementById("lastNameEdit")).value=reg.lastName;
    (<HTMLInputElement>document.getElementById("birthYearEdit")).value=reg.birthYear.toString();
   //<HTMLInputElement>document.getElementById("genderEdit")).value=reg.gender.toString();
    (<HTMLInputElement>document.getElementById("phoneEdit")).value=reg.phone;
    (<HTMLInputElement>document.getElementById("emailEdit")).value=reg.email;

    if (reg.gender=='vyras'){
        (<HTMLInputElement>document.getElementById('maleEdit')).checked=true;
        (<HTMLInputElement>document.getElementById('femaleEdit')).checked=false;
    }else{
        (<HTMLInputElement>document.getElementById('maleEdit')).checked=false;
        (<HTMLInputElement>document.getElementById('femaleEdit')).checked=true;
    }
   
    (<HTMLButtonElement>document.getElementById("updateRegistration")).onclick=()=>{
        const upReg:Registration={
    firstName:(<HTMLInputElement>document.getElementById("firstNameEdit")).value,
    lastName:(<HTMLInputElement>document.getElementById("lastNameEdit")).value,
    birthYear:(<HTMLInputElement>document.getElementById("birthYearEdit")).value,
    //gender:(<HTMLInputElement>document.getElementById("genderEdit")).value,
    gender: (<HTMLInputElement>document.querySelector('input[name="genderEdit"]:checked')).value,
    phone:(<HTMLInputElement>document.getElementById("phoneEdit")).value,
    email:(<HTMLInputElement>document.getElementById("emailEdit")).value,
        }
fetch(`https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/Registracija/${reg.id}.json`,{
method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(upReg)
    })
    
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Irasas atnaujintas");
        console.log(data);
        dataTable.style.display="block";
        editForm.style.display="none";
        loadData();


    })
    };
    

}


})

}

const loadData=()=>{
    fetch("https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/Registracija.json",{
        method:"GET",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((data: {[key:string]:Registration})=>{
// Object.keys(data)
registrationData=[];
Object.keys(data).forEach((k)=>{
    // data[k].id=k  id priskyrimas
    registrationData.push({id:k,...data[k]});
})
showData();
console.log(Object.keys(data));
    })
}
loadDataButton.onclick=loadData;
