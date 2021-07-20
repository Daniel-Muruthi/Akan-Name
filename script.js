let project = function(){
    const male = {
        Sunday: "Kwasi",
        Monday: "Kwadwo",
        Tuesday: "Kwabena",
        Wednesday:"Kwaku",
        Thursday:  "Yaw",
        Friday: "Kofi",
        Saturday: "Kwame"
    }
    
    const female = {
        Sunday: "Akosua",
        Monday: "Adwoa",
        Tuesday: "Abenaa",
        Wednesday: "Akua",
        Thursday:  "Yaa",
        Friday: "Afua",
        Saturday: "Ama"
    }
    const months = {
        1 : "January",
        2 : "February",
        3 : "March",
        4 : "April",
        5 : "May",
        6 : "June",
        7 : "July",
        8 : "August",
        9 : "September",
        10 : "October",
        11 : "November",
        12 : "December"
    }
    
    
    document.getElementById("submitBody").addEventListener("click", function(){
        if(document.querySelector('input[name="gender"]:checked')==null){
                alert(`⚠ You have not selected a gender ⚠ `);
        }
        if ((document.querySelector('input[class="inputDate"]')==false)){
            while(true){
                alert(`⚠ You have not inputed your Date ⚠ `);
                break;
            }
        }
        if (document.querySelector('input[value="male"]:checked')){
            const dayInput = (document.querySelector(".inputDate")).value;
            let tarehe= new Date(dayInput);
            let siku =tarehe.getDate();
            let mwezi =tarehe.getMonth()+1;
            let mwaka = tarehe.getFullYear();
            // alert(`${siku}/${mwezi}/${mwaka}`);
            // alert(`The date is: ${siku}`)
            let clientDay = tarehe.toLocaleString('en-us', {weekday: "long"});
            alert(`The Date you entered is : ${clientDay}`);//get weekday name
            let akanMale=`Your Akan Name is ${male[clientDay]}`;
            return document.querySelector('.outputResults').textContent=akanMale;  
         }   
        if(document.querySelector('input[value="female"]:checked')){
            // let jina = "";
            // document.getElementById("jina").textContent=jina;
            // console.log(jina);
            let dayInput = (document.querySelector(".inputDate")).value;
            let tarehe= new Date(dayInput);
            let siku =tarehe.getDate();
            let mwezi =tarehe.getMonth()+1;
            let mwaka = tarehe.getFullYear();
            // alert(`${siku}/${mwezi}/${mwaka}`);
            // alert(`The date is: ${siku}`)
            let clientDay = tarehe.toLocaleString('en-us', {weekday: "long"});
            alert(`The Date you entered is : ${clientDay}`);
            // let akanMale= `Your Akan Name is${male[clientDay]}`;
            let akanFemale=` Your Akan Name is ${female[clientDay]}`
            return document.querySelector('.outputResults').textContent=akanFemale;

        }
    })
}
project();

document.querySelector('input[value="Try Again"]').addEventListener("click", function(){
    document.querySelector('.myForm').reset();
})
