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
    // cityBorn: "surabaya",
    // provinceBorn: "jawa timur",
    // countryBorn: "ID",
    goodWeight: function(){
        const personWeightIdeal = this.isIdealWeight()
        const overweight = (this.beratBadan - personWeightIdeal) + this.unitWeight
        
        if (personWeightIdeal > this.beratBadan){
            return "Berat anda ideal"
        }
        else{
            //return "Berat anda tidak ideal, berat ideal seharusnya adalah = " + personWeightIdeal
            return "Berat anda kelebihan " + overweight + ", idealnya adalah = " + personWeightIdeal
        }
    },
    goodHeight: function(){
        const personHeightIdeal = this.isIdealHeight()
        if (personHeightIdeal < this.tinggiBadan){
            return "Tinggi anda ideal"
        }
        else{
            "Tinggi anda dibawah ideal Indonesia, tinggi ideal harusnya adalah = " + personHeightIdeal
        }
    },
}
const beratUnit = Person.beratBadan + Person.unitWeight
const tinggiUnit = Person.tinggiBadan + Person.unitHeight

console.log(Person.fullName() + ", Berat badan: " + beratUnit)
console.log(Person.fullName() + ", Tinggi badan: " + tinggiUnit)
console.log(" ")

// if (Person.beratBadan <= Person.isIdealWeight()){
//     console.log("Berat badan anda ideal")
// }
// else{
//     console.log("Berat badan anda tidak ideal")
// }

// if (Person.tinggiBadan >= Person.isIdealHeight()){
//     console.log("Tinggi badan anda melebihi rata-rata")
// }
// else{
//     console.log("Tinggi badan anda tidak ideal")
// }

console.log(Person.goodWeight())
console.log(Person.goodHeight())

// ==================
// console.log(" ")
// console.log("Manual if-statement menentukan apakah seseorang tinggal di kota tsb")

// const country = {
//     ID: {
//         province: ["jawa timur", "jawa tengah"],
//         city: ["surabaya", "solo"],
//     }
// }

// if (Person.countryBorn in country){
//     console.log("orang indo")
// }

// if (Person.cityBorn === country.ID.city[0]){
//     console.log(Person.fullName() + " lahir di " + Person.cityBorn)
// }