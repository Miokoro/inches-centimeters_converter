const enterUnit = document.getElementById("enterUnit");
const converting = document.getElementById("converting");
const unitChoice = document.getElementById("unitChoice");
const result = document.getElementById("result");

function sub(){
    if(enterUnit.value.trim().toLowerCase() == "inches"){
        converting.textContent = "Converting to inches means enter in a certain number of centimeters to convert to inches";
    }
    else if(enterUnit.value.trim().toLowerCase() == "centimeters"){
        converting.textContent = "Converting to centimeters means enter in a certain number of inches to convert to centimeters";
    }
    else{
        converting.textContent = "Invalid unit";
    }
}

function convert(){
    if(enterUnit.value == "inches"){
        let resultF = parseFloat(unitChoice.value) / 2.54;
        result.textContent = resultF + "in";
    }
    else if(enterUnit.value == "centimeters"){
        let resultF = parseFloat(unitChoice.value) * 2.54;
        result.textContent = resultF + "cm";
    }
    else{
        let resultF = "Invalid number";
        result.textContent = resultF;
    }
}