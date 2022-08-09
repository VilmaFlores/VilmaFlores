
let ataqueJ 
function iniciarJuego() {
    let botonM = document.getElementById('mascota')
    botonM.addEventListener('click', seleccionarM)
    let botonF = document.getElementById('fuego')
    botonF.addEventListener('click', ataqueF)
    let botonA = document.getElementById('agua')
    botonA.addEventListener('click', ataqueA)
    let botonT = document.getElementById('tierra')
    botonT.addEventListener('click', ataqueT)

}
function seleccionarM() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanJugador = document.getElementById('mascotaJ')

        if (inputHipodoge.checked) {
            spanJugador.innerHTML = "hipodoge"
        } else if (inputCapipepo.checked) {
            spanJugador.innerHTML = "capipepo"
        } else if (inputRatigueya.checked) {
            spanJugador.innerHTML = "ratigueya"
        } else {
            alert("Selecciona una mascota")
        }   
        seleccionarE()
}
function seleccionarE (){
    let spanEnemigo = document.getElementById('mascotaE')
    let ataqueAleatorio = aleatorio(1,3)
        if(ataqueAleatorio == 1){
            spanEnemigo.innerHTML = "hipodoge"
        }else if(ataqueAleatorio == 2){
            spanEnemigo.innerHTML == "capipepo"
        }else {
            spanEnemigo.innerHTML = "ratigueya"
        }
}
function ataqueF(){
    ataqueJ = "Fuego"
    alert(ataqueJ)
}
function ataqueA(){
    ataqueJ = "Agua"
    alert(ataqueJ)
}
function ataqueT(){
    ataqueJ = "Tierra"
    alert(ataqueJ)
}
function aleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1 ) + min)
}
function seleccionarA(){

}
window.addEventListener('load', iniciarJuego)
