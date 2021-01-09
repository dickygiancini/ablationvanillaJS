let beratBadan = 70
let tinggiBadan = 170

function bodyIdeal(){
    const beratIdeal = tinggiBadan - 100
    return beratIdeal - (beratIdeal * 0.1)
}

let statusUpdate = "Berat badan ideal = " + bodyIdeal()
let personStatus = "Berat anda = " + beratBadan

console.log(statusUpdate)
console.log(personStatus)
console.log(" ")

let isOverweight = false

if (beratBadan > bodyIdeal()){
    isOverweight = true
}

switch (isOverweight){
    case true:
        console.log("Anda kelebihan berat badan")
        break
    
    case false:
        console.log("Berat badan anda ideal")
        break
    
    default:
        console.log("Nothing")
}