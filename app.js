const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const reset = document.querySelector('#reset');

let p1Total = 0;
let p2Total = 0;

const h1 = document.querySelector('h1');

p1Btn.addEventListener('click', ()=>{
    p1Total += 1;
    console.log(p1Total)
    h1.innerText = `${p1Total} to ${p2Total}`;
    if (p1Total === 5){
        alert('P1 Wins')
    }
})
p2Btn.addEventListener('click', ()=>{
    p2Total += 1;
    h1.innerText = `${p1Total} to ${p2Total}`;
    if (p2Total === 5){
        alert('P2 Wins')
    }
})
reset.addEventListener('click', ()=>{
    p1Total = 0;
    p2Total = 0;
    h1.innerText = `${p1Total} to ${p2Total}`;
})
//TODO: make a function that adds a point
