//Pradedamas krovimas
fetch("https://restcountries.com/v3.1/name/cuba")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Valstybė:");
        console.log(data[0].name.common);
        if (!data[0].borders){
            //throw new Error('Šalis kaimynų neturi')
            return fetch(`https://restcountries.com/v3.1/alpha?codes=`) 
        }else{
            return fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(',')}`) 
        }
        
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Kaimynės:");
        data.forEach((c)=>{
            console.log(c.name.common);
        })
    })
    .catch(()=>{
        
    })

