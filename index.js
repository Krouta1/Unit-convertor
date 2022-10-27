// code made by me <3 
// some DOM grabbing
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl =document.getElementById("lng-rslt")
const volumeEl =document.getElementById("vlm-rslt")
const massEl =document.getElementById("ms-rslt")

//function that convert and round users input on click
convertBtn.addEventListener("click", function(){
    // some variable declaration
    let num = 0
    num = inputEl.value
    // condition to make sure that if user hits Convert button without value in it he doesnt get empty output like: meters insted of 0 meters
    if(num != ""){
        // meter - feet convert with rounding
        const mtf = num * 3.280839895
        const rsltMTF = mtf.toFixed(3)
        const ftm = num / 3.280839895
        const rsltFTM = ftm.toFixed(3)
        // liter - gallon convert with rounding
        const ltg = num * 0.264172052
        const rsltLTG = ltg.toFixed(3)
        const gtl = num / 0.264172052
        const rsltGTL = gtl.toFixed(3)
        // kilograms - pounds convert with rounding
        const ktp = num * 2.20462262
        const rsltKTP = ktp.toFixed(3)
        const ptk = num / 2.20462262
        const rsltPTK = ptk.toFixed(3)
        //DOM manipulation
        lengthEl.innerHTML = `${num} meters = ${rsltMTF} feet | ${num} feet = ${rsltFTM} meters`
        volumeEl.innerHTML = `${num} liters = ${rsltLTG} gallons | ${num} gallons = ${rsltGTL} liters`
        massEl.innerHTML = `${num} kilos = ${rsltKTP} pounds | ${num} pounds = ${rsltPTK} kilos`   
    }
    
})




