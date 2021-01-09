const mainName = ["Dicky", "Giancini", "Arwindo"]
const reducing = (accumulator, currentValue) => accumulator + currentValue

console.log(mainName.reduce(reducing))

console.log(mainName.reduce(reducing),"Kurniawan")
// ===============
console.log(" ")
console.log("Fungsi reduce dengan object")
console.log(mainName.reduce(function(acc,arrName,index){
        acc[arrName] = `Nama ke-${index+1}`

        return acc
    }, {})
)
// ===============
console.log(" ")
console.log("Fungsi reduce angka dengan object array")

console.log([0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
},1))
// ===============
console.log(" ")
console.log("Fungsi sum angka dengan object array")

let initValue = 10
// let sumValue = [{x: 1}, {x: 2}, {x: 3}].reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.x
// }, initValue)

let sumValue = [{x: 1}, {x: 2}, {x: 3}].reduce((accumulator, currentValue) => accumulator + currentValue.x, initValue)
console.log(sumValue)
// ===============
console.log(" ")
console.log("Hitung nama")

let countNames = mainName.reduce(function(allNames, names){
    if (names in allNames){
        allNames[names]++
    }
    else{
        allNames[names] = 1
    }

    return allNames
}, {})
console.log(countNames)