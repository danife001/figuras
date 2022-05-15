function circulo(){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('circulo')
}

function arriba(){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('arriba')
}

function abajo (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('abajo')
}

function izquierda (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('izquierda')
}

function derecha (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('derecha')
}

function digsupd (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('digsupd')
}

function digsupi (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('digsupi')
}

function diginfd (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('diginfd')
}

function diginfi (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('diginfi')
}


function rombo (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('rombo')
}

function imagen (){
    // llamo a figura que es el elemento 
    var selector =document.getElementById("figura");
    // invoco la funcion toggle encargada de quitar y dar clase 
    selector.className =" ";
    selector.classList.toggle('imagen')
}

function capturarDatos(){
    // captura datos por id y value 
    var nombre = document.getElementById("cNOMBRES").value;
    var edad = document.getElementById("cEDAD").value ;
    var date = document.getElementById("cDATE").value ;
    var genero = document.getElementById("cGENERO").value ;
    var email = document.getElementById("cEMAIL").value ;
    var descripcion = document.getElementById("cDESCRIPCION").value ;
    var color  = document.getElementById("cCOLOR").value ;

    // capturar parrafor para mostrar informacion 
    var name = document.getElementById("mNOMBRES");
    var age = document.getElementById("mEDAD");
    var fecha = document.getElementById("mDATE");
    var genere = document.getElementById("mGENERO");
    var mail = document.getElementById("mEMAIL");
    var descripction = document.getElementById("mDESCRIPCION");

    name.textContent =nombre;
    age.textContent =edad;
    fecha.textContent =date;
    genere.textContent =genero;
    mail.textContent =email;
    descripction.textContent =descripcion;
    // capturamos el contenedor del avatar

    var selector=document.getElementById("card-avatar");
    // // comillas para el valor no es variable 
    // if (color == "blanco") {
    //     selector.style.backgroundColor = "white";
        
    // }else if (color == "verde"){
    //     selector.style.backgroundColor ="green";

    // }else if (color=="azul"){
    //     selector.style.backgroundColor ="blue";
    // }
    
    switch (color){
        case "blanco":
        selector.style.backgroundColor = "white";
        break;
        case "verde":
            selector.style.backgroundColor ="green";    
        break;
        case "azul":
            selector.style.backgroundColor ="blue";
    }
    var  imagen = document.getElementById("foto")
    switch (genero){
        case "Masculino":
            imagen.src ="img/hombre.png";
        break;
        case "Femenino":
            imagen.src ="img/mujer.png";
        break;
        case "Otro":
            imagen.src ="img/descarga.jpg";
        break;

    }



}