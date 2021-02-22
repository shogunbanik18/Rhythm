console.log("Hello!");
console.log("CODE IS ABOUT TO RUN ! ");

// TARGETTING THE HAMBERGER ICON AND ADDING A FUNCTIONALITY 

let hamberger =document.querySelector('.hamberger');
let No =document.querySelector('.No');
let mobilenav =document.querySelector('.mobile-nav');
let songname = document.querySelector('.songname');


let mysong = document.getElementById("mysong");
let  play = document.getElementById("play");

hamberger.addEventListener('click',function () {
    mobilenav.classList.add('open'); 
});

No.addEventListener('click',function () {
    mobilenav.classList.remove('open'); 
});

play.addEventListener('click',function () {
    songname.classList.add('songopen')
})

play.onclick = function () {
    if(mysong.paused){

        mysong.play();
        play.src = "pause.png";
    }
    else{
        mysong.pause();
        play.src = "play.png";
    }

}