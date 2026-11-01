function letScore (){ //รับค่าจาก Button มาเก็บใน LetScore

    let score = Number (document.getElementById('InputScore').value); //เก็บค่า InputScore มาเก็บในตัวแปร score
    let name = document.getElementById('InputName').value; //เก็บค่าจาก InputName มาเก็บไว้ในตัวแปร name 

    showScore(score , name) //เอาค่าที่เก็บไว้ ส่งไปให้ function ต่างๆ 

    let grade = calculate(score) //เอา score ไปให้ function calculate เพื่อคำณวน และ return ค่ากลับมาเก็บไว้ใน grade เพื่อเอาไปแสดงใน บรรทัดที่ 10 

    document.getElementById('Show_value').innerHTML = " คุณ "+ name + " คุณได้"+grade ;  //นำค่าที่ return มาจาก calculate มาแสดง 
}
function showScore (score , name){ //ใช้โชว์ค่าที่รับมาเพื่อตรวจสอบฟังก์ชั่น เพื่อตรวจสอบการทำงาน รับค่าจาก Input 
    console.log(score , name)
    console.log(typeof (score) ,typeof (name))
}
function calculate (score){ //รับค่าจาก Input ที่ถูกส่งจาก letScore มาคำนวนใน Finction นี้ พร้อม return ค่าที่ผ่านเงื่อนไข ไปแสดง ต่อ
    let x = score 

    if(x >= 80){
        return "เกรด A"
    }else if (x >= 70){
        return "เกรด B"
    }else if (x >= 60){
        return "เกรด C"
    }else if (x >=50){
        return "เกรด D"
    }else {
        return "คุณคะแนนไม่ผ่าน"
    }
}