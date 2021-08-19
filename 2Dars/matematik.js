/**
 * Matematik amallarni ishlash bo`limi. Ushbu bo`limda Matematik amallarni ishlaymiz.
 */


// Ildiz ostiga olish.
let a = 4;
let natija = Math.sqrt(a)
console.log("Ildiz Natija : " + natija)

// Darajaga ko`tarish 4 ni 3 - darajisini topish.
a = 4;
natija = Math.pow(a, 3)
console.log("Daraja Natija : " + natija)

// Haqiyqiy sonni maximumga yaxlitlash.
a = 4.2;
natija = Math.ceil(a)
console.log("Maximumga yaxlitlash. Natija : " + natija)

// Haqiyqiy sonni minimumga yaxlitlash.
a = 4.2;
natija = Math.floor(a)
console.log("Minimumga yaxlitlash. Natija : " + natija)

// Tasodifiy sonni aniqlash.
// 0 dan 1 gacha bo`lgan tasodifiy sonni aniqlab beradi.
natija = Math.random()
console.log("Tasodifiy sonni aniqlash. Natija : " + natija)

// 1 dan 10 gacha bo`lgan tasodifiy sonni aniqlash.
a = 10;
natija = Math.ceil(Math.random()*a)
console.log("0 dan 10 gacha bo`lgan tasodifiy sonni aniqlash. Natija : " + natija)
