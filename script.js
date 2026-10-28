let round = Number(prompt ("คุณจะเล่นทั้งกี่รอบ"));
    console.log("คำตอบ : เฉลย")
    let correct = 0
    let not_correct = 0
for(var i=0 ; i < round ; i++){
    var answer = prompt ("หัว หรือ ก้อย");
    var random_answer = ""

    if(Math.floor(Math.random()*10 ) <= 4){
        random_answer = "หัว"
    }else{
        random_answer = "ก้อย"
    }

    if(answer == random_answer){
        alert("ตอบถูก") 
        correct++; 
    }else{
        alert("ตอบผิด")
        not_correct++;
    }
    document.getElementById("Game-list").innerHTML += "คุณตอบ " + answer +" และคำตอบคือ "+ random_answer +"<br>" 
    console.log(answer+":"+random_answer)
    document.getElementById("Game-list2").innerHTML = "คุณทายถูก "+correct+" ข้อ" + " และท้ายผิดไป " + not_correct+" ข้อ"
}