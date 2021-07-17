const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

//Beginning of the input section

let yearInput = document.querySelector("the input class").value;
let monthInput =

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