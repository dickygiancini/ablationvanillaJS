function tutor(x){
    return x*x
}

console.log(tutor(20))

function konversiFC(suhu){
    function kurang32(aslinya){
        return aslinya - 32
    }

    return kurang32(suhu) * 5 / 9
}

function konversiCK(suhuC){
    return konversiFC(suhuC) + 273
}

console.log(konversiFC(90))
console.log(konversiCK(90))