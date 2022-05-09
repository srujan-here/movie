const container =document.querySelector('.container');
let  ticket=document.getElementById('movie');

const cont=document.getElementById('t1');
const total=document.getElementById('total');
let t=+ticket.value;

function updateSelectcount(){
    const selectcount = document.querySelectorAll('.row .seat.selected');

    const thecount=selectcount.length;

    cont.innerHTML=thecount;
    total.innerHTML= thecount * 250;
    console.log(thecount*t);
}


container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
        console.log(e.target);
        e.target.classList.toggle('selected');
    }

    updateSelectcount();
});