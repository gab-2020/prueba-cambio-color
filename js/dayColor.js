var h1= document.getElementById ('dia');
console.log (h1.textContent);


var fondo = document.getElementById ('body');
console.log (fondo);



var boton= document.getElementById ('boton')
console.log (boton);

boton.addEventListener ('click', function(){
    h1.innerHTML="martes";
    h1.style.fontFamily="arial";
    fondo.style.color="#1DA84E";
});

boton.addEventListener ('click', function(){
    h1.innerHTML="miércoles";
    h1.style.fontFamily="helvetica";
    fondo.style.color="#6042F5";
});

boton.addEventListener ('click', function(){
    h1.innerHTML="jueves";
    h1.style.fontFamily="courier";
    fondo.style.color="#FFE000";
});

boton.addEventListener ('click', function(){
    h1.innerHTML="viernes";
    h1.style.fontFamily="impact";
    fondo.style.color="#0086FF";
});

boton.addEventListener ('click', function(){
    h1.innerHTML="sábado";
    h1.style.fontFamily="times new roman";
    fondo.style.color="#A86A6A";
});






















