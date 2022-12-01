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

            ul .ui-selecting {background-color: green;}
            //cambiara el color mientras selecciono

             ul .ui-selected {background-color: blue;}   
            //cambiara el color cuando deje de seleccionarlo

    //seleccionar elementos
        var lista = $(".lista-seleccionable");

        lista.selectable();

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

sesion 114 sortable
  var lista = $(".lista-seleccionable");

        //sortable permite ordenar elementos como uno desee
        
            lista.sortable();
 
    tambien es posible hacer que se guarden los cambios realizados con 
            lista.sortable({
                update: function(event, ui){
                    console.log("ha cambiado la lista");
                }
            });
    update es una funcion que en este caso le agregamos event, ui lo cual hace
    que cada que se vea un evento o cambio en la lista ui nos de un aviso
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1


    sesion 115 droppable

agregamos dos div al html
                   <div id="elemento-movido">

                    </div>
                    <div id="area">

                    </div>

            //Droppable 
    $("#elemento-movido").draggable();
        //.draggable permite que el elemento se pueda mover
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area")
        }
    });
        //.droppable permite que puedas arrojar elementos en el

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
sesion 116 efectos jQuery ui

        float: none;
    con esto agregado al style de elemento lo proboca es que no hay elementos 
    sobre el mismo


        //Efectos
    $("#mostrar").click(function(){
        $('.caja-efectos').toggle("shake", 4000);
        //toggle es para aplicar el efecto y tambien quitarlo
        //.toggle("fade"); hace ue el elemento se desvanesca
        //.toggle("explode"); hace que el elemento explote
        //.toggle("blind"); hace que se abra como una perciana hacia abajo
        //.toggle("slide"); hace que el elemento apresca de izquierda a derecha
        //.toggle("puff");
        //.toggle("scale");
        // se pueden agregar velosidades como 
        //.toggle("shake", "slow");
        //o tiempo como 
        //.toggle("shake", 4000);


        //si usamos .effect("explode"); igual se ejecuta pero desaparece el 
        //elemento
    });
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
sesion 117 Tooltips

    html

   <h3>ToolTip</h3>
   <a href="#" title="acceder a la seccion de mis datos de esta web">Mis Datos</a>
   <a href="#" title="logueate en esta web">identificarse</a>
   <a href="#" title="ver todos mis amigos">amigos</a>

    JS

     $(document).tooltip();
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

sesion 118 cuadros de dialogo

                //dialog
    
            $("#lanzar-popup").click(function(){
                //agregamos un boton que al precionar arrojara el cuadro de dialogo 
                //popup que esta configurado abajo para mostrarse
                //con dialog generamos un cuadro de texto
                $("#popup").dialog();
            })




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
//lista.selectable();

//sortable permite ordenar elementos como uno desee
lista.sortable({
    update: function(event, ui){
        console.log("ha cambiado la lista");
    }
});

//Droppable 
    $("#elemento-movido").draggable();
        //.draggable permite que el elemento se pueda mover
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area")
        }
    });
        //.droppable permite que puedas arrojar elementos en el

//Efectos
    $("#mostrar").click(function(){
        $('.caja-efectos').toggle("shake", 4000);
        //toggle es para aplicar el efecto y tambien quitarlo
        //.toggle("fade"); hace ue el elemento se desvanesca
        //.toggle("explode"); hace que el elemento explote
        //.toggle("blind"); hace que se abra como una perciana hacia abajo
        //.toggle("slide"); hace que el elemento apresca de izquierda a derecha
        //.toggle("puff");
        //.toggle("scale");
        // se pueden agregar velosidades como 
        //.toggle("shake", "slow");
        //o tiempo como 
        //.toggle("shake", 4000);


        //si usamos .effect("explode"); igual se ejecuta pero desaparece el 
        //elemento
    });

    //tooltip

    $(document).tooltip();

    //dialog
    
    $("#lanzar-popup").click(function(){
        //agregamos un boton que al precionar arrojara el cuadro de dialogo 
        //popup que esta configurado abajo para mostrarse
        //con dialog generamos un cuadro de texto
        $("#popup").dialog();
    })

    alert("todo listo");
})