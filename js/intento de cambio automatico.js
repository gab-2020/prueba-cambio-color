function dayChange (){

    var day = new color ();

    lunes = day. getDays();

    martes= day.getDays();
    miercoles= day. getDays();
    jueves= day.getDays();
    viernes= day.getDays();
    sabado= day.getDays();
    domingo= day.getDays();


    var colorChange =document.getElementById ("dayChange");
    colorChange.innerHTML = `${lunes}:${martes}:${miercoles}:${jueves}:${viernes}:${sabado}:${domingo}`;
    setTimeout ('dayChange ()', 3000);


}

dayChange();
