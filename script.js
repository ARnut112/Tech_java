let list_order = Number(prompt ("กรุงณาใส่จำนวนสินค้าของท่าน"));
let sum = 0
let countPremium = 0
document.getElementById("l_o").innerHTML = list_order

for(i = 1 ; i <= list_order ;i++){
    let price_order = Number(prompt ("ใส่ราคาสินค้าแต่ละชิ้น" + i));
    sum = sum + price_order
    document.getElementById("p_o").innerHTML += "สินค้าชิ้นที่ "+i +" ราคา " + price_order + " บาท <br>"
    if(price_order >=100){countPremium++;}
}
console.log(countPremium)
document.getElementById("show_sum").innerHTML = sum + " บาท"

if( countPremium >= 3){
    document.getElementById("p_c").innerHTML = "ได้รับสิทธิ์แลกซื้อน้ำ 1 แพ็คแล้วน้าา"
}if( countPremium < 3){
    document.getElementById("p_c").innerHTML = "เสียใจด้วยคุณยังไม่เข้าเงื่อนไข"
}