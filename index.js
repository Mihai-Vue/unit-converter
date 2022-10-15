/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthRes = document.getElementById("length-res")
const volumeRes = document.getElementById("volume-res")
const massRes = document.getElementById("mass-res")
const inputUnits = document.getElementById("input-units")
const convertBtn = document.getElementById("convert-btn")




convertBtn.addEventListener("click", () =>
        {
            if(inputUnits.value > 0) {
                lengthRes.innerHTML = getLength(inputUnits.value)
                volumeRes.innerHTML = getVolume(inputUnits.value)
                massRes.innerHTML = getMass(inputUnits.value)
                inputUnits.value = ""
            } else {
                alert("Please introduce a valid value!")
            }
        })

function getLength(value) {
    let feetValue = value * 3.281
    let meeterValue = value / 3.281
    return `${value} meters = ${feetValue.toFixed(3)} feet | ${value} feet = ${meeterValue.toFixed(3)} meters`
}

function getVolume(value) {
    let gallonsValue = value * 0.264
    let litersValue = value / 0.264
    return `${value} liters = ${gallonsValue.toFixed(3)} gallons | ${value} gallons = ${litersValue.toFixed(3)} liters`
}

function getMass(value) {
    let poundsValue = value * 2.204
    let kilosValue = value / 2.204
    return `${value} kilos = ${poundsValue.toFixed(3)} pounds | ${value} pounds = ${kilosValue.toFixed(3)} kilos`
}
