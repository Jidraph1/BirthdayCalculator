


const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]

const male ={
    Sunday : "Kwasi",
    Monday : "Kwadwo",
    Tuesday : "Kwabena",
    Wednesday : "Kwaku",
    Thursday : "Yaw",
    Friday : "Kofi",
    Saturday : "Kwame"
}

const female={
    Sunday : "Akosua",
    Monday : "Adwoa",
    Tuesday : "Abenna",
    Wednesday : "Akua",
    Thursday : "Yaa",
    Friday : "Afua",
    Saturday : "Ama"
}

const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
event.preventDefault();
const gender = document.querySelector('input[name="gender"]:checked').value
const dob = document.getElementById('DOB').value
const result = document.getElementById('result')
const date = new Date(dob)
const = date.getDay()
const dayOfThDay = days[day]
}

if(gender === 'Male') {
    alert( 'Your Akan name is ' = + make[dayOfTheWeek])
{ else {
    alert( 'Your Akan name is ' + female[dayOfTheWeek])
}
