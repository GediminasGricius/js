const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthYear = document.getElementById('birthYear');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const addRegistrationBtn = document.getElementById(`addRegistration`);
const loadDataButton = document.getElementById(`loadData`);
const dataTableBody = document.getElementById(`dataTableBody`);
let registrationData;
const dataTable = document.getElementById("dataTable");
const editForm = document.getElementById("editForm");
addRegistrationBtn.onclick = () => {
    const gender = document.querySelector('input[name="gender"]:checked');
    let reg;
    if (gender != null) {
        reg = {
            firstName: firstName.value,
            lastName: lastName.value,
            birthYear: birthYear.value,
            gender: gender.value,
            phone: phone.value,
            email: email.value,
        };
    }
    else {
        reg = {
            firstName: firstName.value,
            lastName: lastName.value,
            birthYear: birthYear.value,
            phone: phone.value,
            email: email.value,
        };
    }
    fetch("https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/Registracija.json", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg)
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log("Irasas pridetas");
        console.log(data);
    });
};
const showData = () => {
    dataTableBody.innerHTML = "";
    registrationData.forEach((reg) => {
        const tr = document.createElement("tr");
        const tdVardas = document.createElement("td");
        tdVardas.innerHTML = reg.firstName;
        const tdPavarde = document.createElement("td");
        tdPavarde.innerHTML = reg.lastName;
        const tdGimimoMetai = document.createElement("td");
        tdGimimoMetai.innerHTML = reg.birthYear.toString();
        const tdV = document.createElement("td");
        tr.appendChild(tdVardas);
        tr.appendChild(tdPavarde);
        tr.appendChild(tdGimimoMetai);
        tr.appendChild(tdV);
        dataTableBody.appendChild(tr);
        tr.onclick = () => {
            dataTable.style.display = "none";
            editForm.style.display = "block";
            document.getElementById("firstNameEdit").value = reg.firstName;
            document.getElementById("lastNameEdit").value = reg.lastName;
            document.getElementById("birthYearEdit").value = reg.birthYear.toString();
            //<HTMLInputElement>document.getElementById("genderEdit")).value=reg.gender.toString();
            document.getElementById("phoneEdit").value = reg.phone;
            document.getElementById("emailEdit").value = reg.email;
            if (reg.gender == 'vyras') {
                document.getElementById('maleEdit').checked = true;
                document.getElementById('femaleEdit').checked = false;
            }
            else {
                document.getElementById('maleEdit').checked = false;
                document.getElementById('femaleEdit').checked = true;
            }
            document.getElementById("updateRegistration").onclick = () => {
                const upReg = {
                    firstName: document.getElementById("firstNameEdit").value,
                    lastName: document.getElementById("lastNameEdit").value,
                    birthYear: document.getElementById("birthYearEdit").value,
                    //gender:(<HTMLInputElement>document.getElementById("genderEdit")).value,
                    gender: document.querySelector('input[name="genderEdit"]:checked').value,
                    phone: document.getElementById("phoneEdit").value,
                    email: document.getElementById("emailEdit").value,
                };
                fetch(`https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/Registracija/${reg.id}.json`, {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(upReg)
                })
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    console.log("Irasas atnaujintas");
                    console.log(data);
                    dataTable.style.display = "block";
                    editForm.style.display = "none";
                    loadData();
                });
            };
        };
    });
};
const loadData = () => {
    fetch("https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/Registracija.json", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        // Object.keys(data)
        registrationData = [];
        Object.keys(data).forEach((k) => {
            // data[k].id=k  id priskyrimas
            registrationData.push(Object.assign({ id: k }, data[k]));
        });
        showData();
        console.log(Object.keys(data));
    });
};
loadDataButton.onclick = loadData;
export {};
