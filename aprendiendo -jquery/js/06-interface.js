$(document).ready(function(){
/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
seison 111


            <style>
                .elemento{
                    width: 300px;
                    height: 200px;
                    border: 4px solid black;
                    background-color: lightblue;
                    margin:  20px;
                    float: left;
                }
            </style>
creamos 3 divs con la class elemento con estos style les damos una forma de 
cuadro y tambien con float: left los ordenamos uno al lado del otro izquierda

        var elemento = $('.elemento')

        //.draggable permite que los elementos seleccionados puedan ser movidos por 
        // por el usuario en toda la web
                                //mover elementos por la pagina 
        elemento.draggable();

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
112 resizable
            para poder modificar las dimenciones de los elementos seleccionaddos
            primero tenemos que agregar los stylesheet de jQuery ui en el html

        <link rel="stylesheet" href="js/jquery-ui-1.13.2/jquery-ui.min.css"/>
        <link rel="stylesheet" href="js/jquery-ui-1.13.2/jquery-ui.structure.min.css"/>
        <link rel="stylesheet" href="js/jquery-ui-1.13.2/jquery-ui.theme.min.css"/>


                //      redimencionar elementos seleccionados

        elemento.resizable();


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 113 selectable

    agregamos una lista en el html y le dimso style a esto con la class 
    lista-seleccionable

    .lista-seleccionable li{
        width: 80%;
        padding: 20px;
        border: 1px solid #ccc;
        list-style: none;
        cursor: pointer;
        
        
            list-style: none; 
        con este le quitamos la numeracion o bullets

        TAMBIEN LE PUSIMSO 
                cursor: pointer;
            este lo que hace es que cuando el mouse esta sobre el elemento cambia
            a la mano 
    
    TAMBINE LE DAREMOS STYLE A ul.ui

          ul.ui-selecting {background-color: green;}
        ul.ui-selected {background-color: blue;}
        




*/
var elemento = $('.elemento');
var lista = $(".lista-seleccionable");

//.draggable permite que los elementos seleccionados puedan ser movidos por 
// por el usuario en toda la web
                        //mover elementos por la pagina 
elemento.draggable();

//      redimencionar elementos seleccionados

elemento.resizable();

//seleccionar elementos
lista.selectable();



    alert("todo listo");
})