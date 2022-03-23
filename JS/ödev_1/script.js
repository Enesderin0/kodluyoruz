// Ekrana isim yazdırma
let x = prompt("isminiz nedir ");
let kn= document.querySelector("span")
kn.innerHTML= x;
// saati gösterme
let h= new Date().getHours();
let m= new Date().getMinutes();
let s= new Date().getSeconds();
const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
const d = new Date();
let day = days[d.getDay()];
let pd=document.querySelector("#myClock")
pd.innerHTML= `${h}:${m}:${s}  ${day}`;
