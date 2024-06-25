let dark = document.querySelector('.darkmode');
let light = document.querySelector('.lightmode');
let ozb = document.querySelector('.oz');
let rus = document.querySelector('.rus');
let h1 = document.querySelector('#h1');
let body = document.querySelector('body');
let p = document.querySelector('#p');
let eng = document.querySelector('.eng');

dark.addEventListener('click', function(){
    dark.style.display = 'none'
    light.style.display = 'block'
    body.style.backgroundColor = 'black'
    h1.style.color = 'white'
    p.style.color = 'white'
})
light.addEventListener('click', function(){
    dark.style.display = 'block'
    light.style.display = 'none'
    body.style.backgroundColor = 'white'
    h1.style.color = 'black'
    p.style.color = 'black'
})



ozb.addEventListener('click', function(){
    ozb.style.display = 'none'
    rus.style.display = 'block'
    h1.innerHTML = 'Figma bilan kuch Ijodkorlikni oching'
    p.innerHTML = 'Dizayn oyiningizni oshirishga tayyormisiz'
})

rus.addEventListener('click', function(){
    rus.style.display = 'none'
    eng.style.display = 'block'
    h1.innerHTML = 'Разблокируйте Сила <br> Креативность с Фигмой'
    p.innerHTML = 'Готовы улучшить свою дизайнерскую игру?'
})
eng.addEventListener('click', function(){
    eng.style.display = 'none'
    ozb.style.display = 'block'
    h1.innerHTML = 'Unlock the Power of Creativity with Figma!'
    p.innerHTML = 'Ready to elevate your design game?'
})