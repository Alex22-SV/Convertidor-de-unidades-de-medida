// LONGITUD
const optionslongitud1 = document.getElementById("options-longitud-1");
const optionslongitud2 = document.getElementById("options-longitud-2");
const formlongitud = document.getElementById('form-longitud');
const optionnumberlongitud = document.getElementById("option-number-longitud");
const displayResultlongitud = document.getElementById('displayResult-longitud');
//MASA
const optionsmasa1 = document.getElementById("options-masa-1");
const optionsmasa2 = document.getElementById("options-masa-2");
const formmasa = document.getElementById('form-masa');
const optionnumbermasa = document.getElementById("option-number-masa");
const displayResultmasa = document.getElementById('displayResult-masa');

formlongitud.addEventListener('submit', e => {
    e.preventDefault()
    const option1 = optionslongitud1.value
    const option2 = optionslongitud2.value
    const number = optionnumberlongitud.value
    const result = convertirResultado(option1, number, option2)
    displayResultlongitud.innerText = result
    return
})
formmasa.addEventListener('submit', e => {
    e.preventDefault()
    const option1 = optionsmasa1.value
    const option2 = optionsmasa2.value
    const number = optionnumbermasa.value
    const result = convertirResultado(option1, number, option2)
    displayResultmasa.innerText = result
    return
})

function convertirResultado(option1, number, option2) {
    /* Número inválido */
    if(!number) {
        return "Debes proporcionar un número válido."
    }
    /* Unidad de longitud */
    if(option1 == "km") {
        if(option2 == "km") {
            return `${number}km`
        }
        if(option2 == "hm"){
            return `${number*10}hm`
        }
        if(option2 == "dam"){
            return `${number*100}dam`
        }
        if(option2 == "m"){
            return `${number*1000}m`
        }
        if(option2 == "dm"){
            return `${number*10000}dm`
        }
        if(option2 == "cm"){
            return `${number*100000}cm`
        }
        if(option2 == "mm"){
            return `${number*1000000}mm`
        }
    }
    if(option1 == "hm") {
        if(option2 == "km") {
            return `${number/10}km`
        }
        if(option2 == "hm") {
            return `${number}hm`
        }
        if(option2 == "dam") {
            return `${number*10}dam`
        }
        if(option2 == "m") {
            return `${number*100}m`
        }
        if(option2 == "dm") {
            return `${number*1000}dm`
        }
        if(option2 == "cm") {
            return `${number*10000}cm`
        }
        if(option2 == "mm") {
            return `${number*100000}mm`
        }
    }
    if(option1 == "dam") {
        if(option2 == "km") {
            return `${number/100}km`
        }
        if(option2 == "hm") {
            return `${number/10}hm`
        }
        if(option2 == "dam") {
            return `${number}dam`
        }
        if(option2 == "m") {
            return `${number*10}m`
        }
        if(option2 == "dm") {
            return `${number*100}dm`
        }
        if(option2 == "cm") {
            return `${number*1000}cm`
        }
        if(option2 == "mm") {
            return `${number*10000}mm`
        }
    }
    if(option1 == "m") {
        if(option2 == "km") {
            return `${number/1000}km`
        }
        if(option2 == "hm") {
            return `${number/100}hm`
        }
        if(option2 == "dam") {
            return `${number/10}dam`
        }
        if(option2 == "m") {
            return `${number}m`
        }
        if(option2 == "dm") {
            return `${number*10}dm`
        }
        if(option2 == "cm") {
            return `${number*100}cm`
        }
        if(option2 == "mm") {
            return `${number*1000}mm`
        }
    }
    if(option1 == "dm") {
        if(option2 == "km") {
            return `${number/10000}km`
        }
        if(option2 == "hm") {
            return `${number/1000}hm`
        }
        if(option2 == "dam") {
            return `${number/100}dam`
        }
        if(option2 == "m") {
            return `${number/10}m`
        }
        if(option2 == "dm") {
            return `${number}dm`
        }
        if(option2 == "cm") {
            return `${number/10}cm`
        }
        if(option2 == "mm") {
            return `${number/100}mm`
        }
    }
    if(option1 == "cm") {
        if(option2 == "km") {
            return `${number/10}km`
        }
        if(option2 == "hm") {
            return `${number*10000}hm`
        }
        if(option2 == "dam") {
            return `${number*1000}dam`
        }
        if(option2 == "m") {
            return `${number*100}m`
        }
        if(option2 == "dm") {
            return `${number*10}dm`
        }
        if(option2 == "cm") {
            return `${number}cm`
        }
        if(option2 == "mm") {
            return `${number/10}mm`
        }
    }
    if(option1 == "mm") {
        if(option2 == "km") {
            return `${number/1000000}km`
        }
        if(option2 == "hm") {
            return `${number/100000}hm`
        }
        if(option2 == "dam") {
            return `${number/10000}dam`
        }
        if(option2 == "m") {
            return `${number/1000}m`
        }
        if(option2 == "dm") {
            return `${number/100}dm`
        }
        if(option2 == "cm") {
            return `${number/10}cm`
        }
        if(option2 == "mm") {
            return `${number}mm`
        }
    }
    /* Unidad de masa */
    if(option1 == "t") {
        if(option2 == "t") {
            return `${number}t`
        }
        if(option2 == "kg") {
            return `${number*1000}kg`
        }
        if(option2 == "g") {
            return `${number*100000}g`
        }
        if(option2 == "mg") {
            return `${number*1000000000}mg`
        }
        if(option2 == "µg") {
            return `${number*1000000000000}µg`
        }
    }
    if(option1 == "kg") {
        if(option2 == "t") {
            return `${number/1000}t`
        }
        if(option2 == "kg") {
            return `${number}kg`
        }
        if(option2 == "g") {
            return `${number*1000}g`
        }
        if(option2 == "mg") {
            return `${number*1000000}mg`
        }
        if(option2 == "µg") {
            return `${number*1000000000}µg`
        }
    }
    if(option1 == "g") {
        if(option2 == "t") {
            return `${number/1000000}t`
        }
        if(option2 == "kg") {
            return `${number/1000}kg`
        }
        if(option2 == "g") {
            return `${number}g`
        }
        if(option2 == "mg") {
            return `${number*1000}mg`
        }
        if(option2 == "µg") {
            return `${number*1000000}µg`
        }
    }
    if(option1 == "mg") {
        if(option2 == "t") {
            return `${number/1000000000}t`
        }
        if(option2 == "kg") {
            return `${number/1000000}kg`
        }
        if(option2 == "g") {
        return `${number/1000}g`
        }
        if(option2 == "mg") {
            return `${number}mg`
        }
        if(option2 == "µg") {
            return `${number*1000}µg`
        }
    }
    if(option1 == "µg") {
        if(option2 == "t") {
            return `${number/1000000000000}t`
        }
        if(option2 == "kg") {
            return `${number*1000000000}kg`
        }
        if(option2 == "g") {
            return `${number*1000000}g`
        }
        if(option2 == "mg") {
            return `${number/1000}mg`
        }
        if(option2 == "µg") {
            return `${number}µg`
        }
    }
}