const date = new Date();
let year = (date.getFullYear());
let month = (date.getMonth())+1;
let day = date.getDate();

const dob=document.getElementById('dob');
const res = document.getElementById('r');
const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=>{
    const birth = dob.value;
    let birthYear=Number(birth.substring(0,4));
    let birthMonth=Number(birth.substring(5,7));
    let birthDay=Number(birth.substring(8,10));

    let age = year-birthYear;
    let monthdiff = month-birthMonth;
    let daydiff = day-birthDay;

    if(monthdiff<0 || (monthdiff === 0 && daydiff < 0))
        age=age-1
    if(birth.trim()==="")
        res.innerHTML=`<br>Select Your Date of Birth <br><br>`;
    else
        res.innerHTML=`<br>Your Age is ${age} <br><br>`;
  
})