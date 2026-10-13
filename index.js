let nickname = "Edu SilverFit"

console.log("Bem Vindo Herói " + nickname + "!")

let xp = 7.500
let nivel = ""

while (xp >= 0) {
    if (xp <= 1000) {
        nivel = "Ferro"
    } else if (xp <= 2000) {
        nivel = "Bronze"
    } else if (xp <= 5000) {
        nivel = "Prata"
    } else if (xp <= 7000) {
        nivel = "Ouro"
    } else if (xp <= 8000) {
        nivel = "Platina"
    } else if (xp <= 9000) {
        nivel = "Ascendente"
    } else if (xp <= 10000) {
        nivel = "Imortal"
    } else {
        nivel = "Radiante"
    }

    break
}

console.log("O Herói está no nivel " + nivel + " com " + xp + " de XP!")