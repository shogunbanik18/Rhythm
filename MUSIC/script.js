console.log("Hello!");
console.log("CODE IS ABOUT TO RUN ! ");

// TARGETTING THE HAMBERGER ICON AND ADDING A FUNCTIONALITY 

let hamberger =document.querySelector('.hamberger');
let No =document.querySelector('.No');
let mobilenav =document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function () {
    mobilenav.classList.add('open'); 
});

No.addEventListener('click',function () {
    mobilenav.classList.remove('open'); 
});