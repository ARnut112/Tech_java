function calculateBMR (weight , height , age){
    console.log("ค่าน้ำหนักที่รับมา:", weight);
    console.log("ค่าส่วนสูงที่รับมา:", height);
    console.log("ค่าอายุที่รับมา:", age);

    let w = parseFloat (weight);
    let h = parseFloat (height);
    let a = parseFloat (age);

    let BMR = (10 * w) + (6.25 * h) - (5 * a) + 5;
    return BMR;
}
function showBMR() {
    let weight = document.getElementById("InputWeight").value;
    let height = document.getElementById("InputHeight").value;
    let age = document.getElementById("InputAge").value;
    let result = calculateBMR(weight, height, age);

    document.getElementById("Show_value").textContent = result;
}