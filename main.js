"use strict"
const { createApp } = Vue
// implementazione vu-js
createApp({
 data() {
    return {
       messaggioBenvenuto: "il mio primo titolo scritto in vu-js",         immagine: "https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=sph",
       alt: "immagine paesaggio con mongolfiera",
       h1Style: "color",
       imgStyle: "imgstyle",
       paragrafo: `
        l'esperienza più bella della mia vita rinchiusa
        in una singola foto, scattata durante questa
        fantastica escursione.`,
       descrizione: "descrizione",

        }
    }
}).mount('#app')