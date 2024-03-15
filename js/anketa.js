// localStorage.removeItem("prvo_sacuvano")
// localStorage.removeItem("prvo_br_pitanja")

// localStorage.removeItem("drugo_sacuvano")
// localStorage.removeItem("drugo_br_pitanja")

// localStorage.removeItem("trece_sacuvano")
// localStorage.removeItem("trece_br_pitanja")

var prvo_sacuvano
var prvo_br_pitanja

var drugo_sacuvano
var drugo_br_pitanja

var trece_sacuvano
var trece_br_pitanja

const uzmi_podatke = () => {
    if (localStorage.getItem("prvo_sacuvano") == null) {
        localStorage.setItem("prvo_sacuvano", 0)
        localStorage.setItem("prvo_br_pitanja", 0)
    }

    prvo_sacuvano = parseFloat(localStorage.getItem("prvo_sacuvano"))
    prvo_br_pitanja = parseFloat(localStorage.getItem("prvo_br_pitanja"))

    if (localStorage.getItem("drugo_sacuvano") == null) {
        drugo_sacuvano = localStorage.setItem("drugo_sacuvano", 0)
        drugo_br_pitanja = localStorage.setItem("drugo_br_pitanja", 0)
    }

    drugo_sacuvano = parseFloat(localStorage.getItem("drugo_sacuvano"))
    drugo_br_pitanja = parseFloat(localStorage.getItem("drugo_br_pitanja"))

    if (localStorage.getItem("trece_sacuvano") == null) {
        trece_sacuvano = parseFloat(localStorage.setItem("trece_sacuvano", 0))
        trece_br_pitanja = parseFloat(localStorage.setItem("trece_br_pitanja", 0))
    }

    trece_sacuvano = parseFloat(localStorage.getItem("trece_sacuvano"))
    trece_br_pitanja = parseFloat(localStorage.getItem("trece_br_pitanja"))

}

$("#dugme").click(() => {
    uzmi_podatke()
    let prvo = parseFloat($("#pitanje-prvo").val())
    let drugo = parseFloat($("#pitanje-drugo").val())
    let trece = parseFloat($("#pitanje-trece").val())

    prvo_br_pitanja++
    drugo_br_pitanja++
    trece_br_pitanja++

    let prosek_prva = (prvo + (prvo_sacuvano * (prvo_br_pitanja - 1))) / prvo_br_pitanja
    let prosek_druga = (drugo + (drugo_sacuvano * (drugo_br_pitanja - 1))) / drugo_br_pitanja
    let prosek_treca = (trece + (trece_sacuvano * (trece_br_pitanja - 1))) / trece_br_pitanja

    localStorage.setItem("prvo_sacuvano", prosek_prva)
    localStorage.setItem("prvo_br_pitanja", parseFloat(prvo_br_pitanja))

    localStorage.setItem("drugo_sacuvano", prosek_druga)
    localStorage.setItem("drugo_br_pitanja", parseFloat(drugo_br_pitanja))

    localStorage.setItem("trece_sacuvano", prosek_treca)
    localStorage.setItem("trece_br_pitanja", parseFloat(trece_br_pitanja))

    $("#stat").show(function () { $(this).fadeIn() })
    zabelezi_boje(prosek_prva, prosek_druga, prosek_treca)
})

const zabelezi_boje = (prosek_prva, prosek_druga, prosek_treca) => 
{
    $("#prosek-prvo").css("background-color",`${provera_boje(prosek_prva)}`)
    $("#prosek-drugo").css("background-color",`${provera_boje(prosek_druga)}`)
    $("#prosek-trece").css("background-color",`${provera_boje(prosek_treca)}`)
    
    $("#prosek-prvo").html(`${prosek_prva}`)
    $("#prosek-drugo").html(`${prosek_druga}`)
    $("#prosek-trece").html(`${prosek_treca}`)
}

const provera_boje = (prosek)=>
{
    if(prosek >= 1 && prosek <=2.5) return "red"
    else if(prosek >= 2.5 && prosek<=3.5) return "yellow"
    else return "green"
}