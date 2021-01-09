const Person = {
    firstName: "Dicky",
    nextName: "Giancini",
    fullName: function(){
        return `${this.firstName} ${this.nextName}`
    },
    unitWeight: "kg",
    unitHeight: "cm",
    beratBadan: 70,
    tinggiBadan: 170,
    isIdealWeight: function(){
        const beratIdeal = this.tinggiBadan - 100
        return beratIdeal - (beratIdeal * 0.1)
    },
    isIdealHeight: function(){
        const tinggiIdeal = 168
        return tinggiIdeal
    },
}
const beratUnit = Person.beratBadan + Person.unitWeight
const tinggiUnit = Person.tinggiBadan + Person.unitHeight

console.log(Person.fullName() + ", Berat badan: " + beratUnit)
console.log(Person.fullName() + ", Tinggi badan: " + tinggiUnit)
console.log(" ")

if (Person.beratBadan <= Person.isIdealWeight()){
    console.log("Berat badan anda ideal")
}
else{
    console.log("Berat badan anda tidak ideal")
}

if (Person.tinggiBadan >= Person.isIdealHeight()){
    console.log("Tinggi badan anda melebihi rata-rata")
}
else{
    console.log("Tinggi badan anda tidak ideal")
}