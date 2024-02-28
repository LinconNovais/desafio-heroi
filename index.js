let xp = 7999
let nome = "Wouswalldow"
let nivel = ""
let a = 0

while(a = 0)
{
if ( xp <= 999 ){
    nivel = "Ferro"
}

if ( xp > 999 && xp < 2000 ){
    nivel = "Bronze"
}

if (xp > 1999 && xp < 5000 ){
    nivel = "Prata"
}

if (xp > 4999 && xp < 7000 ){
    nivel = "Ouro"
}

if (xp > 6999 && xp < 8000 ){
    nivel = "Platina"
}

if (xp > 7999 && xp < 9000 ){
    nivel = "Ascendente"
}

if (xp > 8999 && xp < 10000){
    nivel = "Imortal"
}

if (xp > 9999 ){
    nivel = "Radiante"
}

console.log("Nivel do Heroi: " + nivel)
console.log("xp do heroi: " + xp)
console.log("O Herói de nome " + nome + " esta no nível de " + nivel)

a++
}
