let min = document.querySelector('#minutos');
let seg = document.querySelector('#segundos');
let select = 25 - 1;
let estadoSeg = 60;
let estadoMin = select;
let interval;
let protegeStart = false;

function escolha()
{
    let inputSearch = document.querySelector('#search').value;
    select = inputSearch - 1;
    estadoMin = select;
    if (inputSearch <= 9) min.innerText = `0${inputSearch}`;
    else min.innerText = inputSearch;
    document.querySelector('footer').classList.toggle('modal');
}

function abreModal()
{
    document.querySelector('footer').classList.toggle('modal')
}


function start()
{
    if(!protegeStart)
    {
        interval = setInterval(() => contaMin(1), 1000);
        protegeStart = !protegeStart;
    }
};

function stop()
{
    clearInterval(interval);
    protegeStart = !protegeStart;
};

function reset()
{
    clearInterval(interval);
    estadoMin = select;
    estadoSeg = 59;
    if (select <= 9) min.innerText = `0${estadoMin + 1}`;
    else min.innerText = estadoMin + 1;
    seg.innerText = '00';
    protegeStart = !protegeStart;
};

function contaMin(num)
{
    
    estadoSeg -= num;
    if(estadoSeg < 1)
    {
        estadoSeg = 59;
        estadoMin -= 1;
    }
    
    
    if(estadoSeg <= 9) seg.innerText = `0${estadoSeg}`;
    else seg.innerText = estadoSeg;
    
    if (estadoMin <= 9) min.innerText = `0${estadoMin}`;
    else min.innerText = estadoMin;

    if(estadoMin < 0)
    {
        document.querySelector('#alarme').play();
        reset();
    }
};