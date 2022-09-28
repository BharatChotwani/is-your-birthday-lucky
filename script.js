const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const outPut = document.querySelector("#out-put");

function isBirthLucky(){
    const birthDate = dateOfBirth.value ;
    const sum = calculateSum(birthDate);
    if(sum && birthDate){
    compareValues(sum, luckyNumber.value)}
    else{
        outPut.innerText = "Please fill the Fields 😡 "
    }
}


function calculateSum(birthDate){
    birthDate = birthDate.replaceAll("-","")
    let sum=0;
    for(var i = 0; i<birthDate.length ; i++){
        sum = sum+ Number(birthDate.charAt(i))
    }
    return sum;
}

function compareValues(sum, luckyNr){
if(luckyNr > 0) {
    if(sum % luckyNr === 0){
    outPut.innerText = "Yaay! your birthday is lucky 🤩🥳🎉"
}
else{
    outPut.innerText = "Sorry! your birthday isn't lucky 🙁"
}
} else{
    outPut.innerText = "Please Enter Valid Lucky Number 🙁"
    outPut.style.backgroundColor = "black";
}

}


checkNumberBtn.addEventListener("click", isBirthLucky);