"use strict";
const time=document.getElementById('clock');
const Datexcx=document.getElementById('date');

setInterval(function(){
    let date=new Date();
    // console.log(date.toLocaleTimeString());
    time.innerHTML=date.toLocaleTimeString();
},1000);
setInterval(
    function(){
        let date=new Date();
        Datexcx.innerHTML=date.toLocaleDateString();
    },1000);