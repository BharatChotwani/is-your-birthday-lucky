const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outPut = document.querySelector("#out-put");

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
     outPut.innerText="Your birthday is lucky";
    }
    else {
        outPut.innerText="Your birthday isn't lucky";
    }
}

function checkBirthdayDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob) {
    compareValues(sum, luckyNumber.value)
    }
    else{
    outPut.innerText="Please enter both the fields 😤";}
}

function calculateSum(dob){
     dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index=0; index<dob.length; index++){
        sun = sum + Number(dob.charAt(index));
    }

    return sum;
}

checkNumber.addEventListener('click',checkBirthdayDateIsLucky)