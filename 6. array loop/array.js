const myName = ['Dicky', 'Giancini']
// ------------------------------
console.log("Cetak Array")
console.log(myName)
console.log(" ")
// ------------------------------
console.log("Foreach Loop")
myName.forEach(function(item, index, array){
    console.log(item, index, array)
})
// ------------------------------
console.log(" ")
console.log("Fungsi Push")

let newName = myName.push('Arwindo')

myName.forEach(function(item, index, array){
    console.log(item, index, array)
})
// ------------------------------
console.log(" ")
console.log("Fungsi Pop")

let last = myName.pop()

myName.forEach(function(item, index, array){
    console.log(item, index, array)
})
// ------------------------------
console.log(" ")
console.log("Fungsi Shift")

let first = myName.shift()

myName.forEach(function(item, index, array){
    console.log(item, index, array)
})
// ------------------------------
console.log(" ")
console.log("Fungsi Unshift")

let nameUnshift = myName.unshift('Dicky')

myName.forEach(function(item, index, array){
    console.log(item, index, array)
})
// ------------------------------
console.log(" ")
console.log("Fungsi Find Index")

let namePos = myName.indexOf('Dicky')

console.log("Index of: " + myName[0] + " = " + namePos)
// -----------------------------
console.log(" ")
console.log("Fungsi Duplikat")

let nameDupe = myName.slice()

console.log(myName)
console.log(nameDupe)
// ------------------------------
console.log(" ")
console.log("Test pop hanya array pertama")

myName.pop()

console.log(myName)
console.log(nameDupe)
myName.push('Giancini')
// -----------------------------
console.log(" ")
console.log("Test For-Loop Array")

for (let index = 0; index < myName.length; index++) {
    const element = myName[index];
    
    console.log(element)
}
// -----------------------------
console.log(" ")
console.log("Test While-Loop Array")

let indexArr = 0

while (indexArr < myName.length) {
    const element = myName[indexArr]

    console.log(element)
    indexArr++
}

let indexBoo = true
let indexArray = 0

console.log(" ")
while (indexBoo) {
    const element = myName[indexArray]

    if (indexArray < myName.length){
        console.log(element)
        indexArray++
    }
    else indexBoo = false
}
