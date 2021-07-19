// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
// const female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
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
//Beginning of the input section


document.querySelector('.inputDate').addEventListener("change", function(){
    var jina = document.querySelector('.jina').textContent;
    console.log(jina);
    let dayInput = this.value;
    let tarehe= new Date(dayInput);
    let timeInput =function(){
        let siku =tarehe.getDate();
        let mwezi =tarehe.getMonth()+1;
        let mwaka = tarehe.getFullYear();
        // alert(`${siku}/${mwezi}/${mwaka}`);
        // alert(`The date is: ${siku}`)
        let clientDay = tarehe.toLocaleString('en-us', {weekday: "long"});
        alert(`The Date you entered was on a: ${clientDay}`);
        let i = Number(mwezi);// passing the mwezi/month value to variable i
        let monthName = months[i]
        console.log(monthName);//accessing the months object
        let akanMale= `Your Akan Name is${male[clientDay]}`;
        let akanFemale= `Your Akan Name is ${female[clientDay]}`;
        document.querySelector('.outputResults').textContent=akanMale;
        document.querySelector('.outputResults').textContent=akanFemale;

    };
    timeInput();
})

let genderReveal=(document.querySelector('.sexSubmit').textContent).toLowerCase;
if (genderReveal=="male"){

}else if(genderReveal=="female"){

}else{
    let output=document.querySelector('.outputResult').textContent;
    
}

// let genderValueCalculator = document.querySelector('.sexSubmit').addEventListener("change", function(){
//     let sexVerifier = function(){
//     let maleChecked=document.querySelector('Gender');
//     maleChecked.checked=true;
//     console.log(maleChecked);
//     let femaleChecked=document.querySelector('Gender');
//     femaleChecked.checked=true;
//     if (maleChecked==true){
//         return timeInput();
//     }else if (femaleChecked==true){
//        return timeInput();
//     }
//     else{
//         alert(`Input a sex`);
//     }
// }
// sexVerifier();
// });
// console.log (genderValueCalculator);




// sex
//getting client gender
// const malePerson=document.querySelector('.sexBtnMale').addEventListener('change', function(){
//     return `male`;
// })
// console.log(malePerson);
// const femalePerson=document.querySelector('.sexBtnFemale').addEventListener('change', function(){

//     return `female`;
// })
// console.log(femalePerson);
//onclick for sex button-->
// function muruthiFunction(){
//     document.querySelector('.sexBtn').classList.toggle("show");
// }
//----->

// let timeInput =document.querySelector(".submitBtn").addEventListener('click', function (){




// let dayInput = document.getElementsByClassName('.inputDate').value;
// console.log(typeof(dayInput));
// let chill = new Date(dayInput);
// console.log(chill);
//extracting day




// let yearInput = document.querySelector(".year");

// let tarehe = `${monthInput},${dayInput},${yearInput}`;

// let clientDate = new Date(tarehe);//add Number
// alert(monthInput);

//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//Implementation two starts here

// const months = {
//     1 : "January",
//     2 : "February",
//     3 : "March",
//     4 : "April",
//     5 : "May",
//     6 : "June",
//     7 : "July",
//     8 : "August",
//     9 : "September",
//     10 : "October",
//     11 : "November",
//     12 : "December"
// }

// const male = {
//     Sunday: "Kwasi",
//     Monday: "Kwadwo",
//     Tuesday: "Kwabena",
//     Wednesday:"Kwaku",
//     Thursday:  "Yaw",
//     Friday: "Kofi",
//     Saturday: "Kwame"
// }

// const female = {
//     Sunday: "Akosua",
//     Monday: "Adwoa",
//     Tuesday: "Abenaa",
//     Wednesday: "Akua",
//     Thursday:  "Yaa",
//     Friday: "Afua",
//     Saturday: "Ama"
// }

//name input
const identification=document.querySelector('.jina').textContent;


