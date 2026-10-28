function toCelsius(fahrenheit){
    let value = (fahrenheit -32) * 5 / 9
    return value.toFixed(2)+" °C"
}
function tofehrenheit(celsius){
    let value = (celsius *9) / 5 + 32
    return value.toFixed(2) + " °F "
}

function display(elementId,value){
    document.getElementById(elementId).innerHTML = "<i>"+value+"</i>"
}

alert(toCelsius(91))
display("Show_value", toCelsius(91))
alert(tofehrenheit(91))
display("Show_value2",tofehrenheit(28))

// let Inputfahrenheit = prompt ("Input your Fahrenheit :")
// toCelsius(Inputfahrenheit)
// document.getElementById("Show_value").innerHTML = toCelsius(Inputfahrenheit)

// let InputCelsius = prompt ("Input your Celsius :")
// tofehrenheit(InputCelsius)
// document.getElementById("Show_value2").innerHTML = tofehrenheit(InputCelsius)