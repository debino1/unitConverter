/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputUnit = document.getElementById("input-unit")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")



//the conversion
function convertLength (value){
    return {
        toFeet: value * 3.281,
        toMeters: value / 3.281
    };
}

function convertVolume(value){
    return {
        toGallons: value * 0.264,
        toLitres: value /0.264
    };
}

function convertMass(value){
    return {
        toPounds: value * 2.204,
        toKilos: value /2.204
    };
}



convertBtn.addEventListener("click", function(){    
    
    const length = convertLength (inputUnit.value)
    const volume = convertVolume (inputUnit.value)
    const mass = convertMass (inputUnit.value)
    
    
     lengthEl.textContent = `
     ${inputUnit.value} meters = ${length.toFeet.toFixed(2)} feet | 
     ${inputUnit.value} feet = ${length.toMeters.toFixed(2)}meters  `
     
     volumeEl.textContent = `
     ${inputUnit.value} litres = ${volume.toGallons.toFixed(2)} gallons | 
     ${inputUnit.value} gallons = ${volume.toLitres.toFixed(2)} litres  `
     
     massEl.textContent = `
     ${inputUnit.value} kilos = ${mass.toPounds.toFixed(2)} pounds | 
     ${inputUnit.value} pounds = ${mass.toKilos.toFixed(2)} kilos  `
})