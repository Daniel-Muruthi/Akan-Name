const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

//Beginning of the input section

let dayInput = document.querySelector(".day").value;
let monthInput =document.querySelector(".submitBtn").addEventListener('click', function (){
    const siku =document.querySelector(".month").getDate();
    const mwezi =document.querySelector(".month").getMonth() + 1;
    const mwaka = document.querySelector(".month").getFullYear();
    // let compiledDate=`${siku}/${mwezi}/${mwaka}`;
    let clientDate = new Date(Number(`${siku}/${mwezi}/${mwaka}`));
    let clientDay = clientDate.toLocaleString('en-us', {weekday: 'long'});
    console.log(clientDay);
});
//extracting day




let yearInput = document.querySelector(".year").value;

let tarehe = `${monthInput},${dayInput},${yearInput}`;

let clientDate = new Date(tarehe);//add Number
alert(monthInput);

//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//Implementation two starts here

const ndume = {
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday:"Kwaku",
    Thursday:  "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame"
}

const jike = {
    Sunday: "Akosua",
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday:  "Yaa",
    Friday: "Afua",
    Saturday: "Ama"
}