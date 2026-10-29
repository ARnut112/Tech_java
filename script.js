function calculateBMI(height , weight){
    let x = height / 100
    let BMI = weight / (x * x)
    return BMI.toFixed(2);
}

function getBMIStatus (bmi){
    if(bmi < 18.5 ){
        return "น้ำหนักน้อย / ผอม"
    }else if(bmi >18.5 && bmi < 24.9){
        return "น้ำหนักปกติ (สุขภาพดี)"
    }else if(bmi > 25.0 && bmi < 29.9){
        return "ท้วม / น้ำหนักเกิน"
    }else{
        return "อ้วน"
    }
}
function display (elementId , value){
    document.getElementById(elementId).innerHTML = value
}
let InputHeight = prompt("Input your Height :");
let Inputweight = prompt("Input your weight :");
let result = parseFloat(calculateBMI(InputHeight,Inputweight))

console.log(result)
console.log(getBMIStatus(result))
display("Show_value",getBMIStatus(result))