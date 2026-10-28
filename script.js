function headsortails(){
    let round = Number(prompt ("คุณจะเล่นทั้งกี่รอบ"));
    console.log("คำตอบ : เฉลย")
    let correct = 0
    let not_correct = 0
for(var i=0 ; i < round ; i++){
    var answer = prompt ("หัว หรือ ก้อย");
    var random_answer = ""

    if(Math.floor(Math.random()*10 ) <= 4){random_answer = "หัว"}
    else{random_answer = "ก้อย"}

    if(answer == random_answer){
        alert("ตอบถูก") 
        correct++; 
    }else{
        alert("ตอบผิด")
        not_correct++;
    }
    document.getElementById("Show_value").innerHTML += "คุณตอบ " + answer +" และคำตอบคือ "+ random_answer +"<br>" 
    console.log(answer+":"+random_answer)
    document.getElementById("Show_value2").innerHTML = "คุณทายถูก "+correct+" ข้อ" + " และท้ายผิดไป " + not_correct+ " ข้อ "
}    
}
function Celsius (){
    let Fahrenheit = prompt ("ใส่ค่าฟาเรนไฮ");
    let value = (Fahrenheit-32) * 5/9
document.getElementById("Show_value").innerHTML = value.toFixed(2) + " °C"
}
function Fehrenheit(){
    let Celsius = prompt ("ใส่อุณหภูมิ องศาเซลเซียส");
    let value = (Celsius *9/5) + 32
    document.getElementById("Show_value").innerHTML = value
}
function getName (){
    return 
}
function sayHello (userName,userLastname){
    return "Hello " + userName + " " + userLastname
}
let userInput = prompt ("Input your Name");
let InputLastname = prompt ("Input Lastname");
alert(sayHello (userInput,InputLastname))