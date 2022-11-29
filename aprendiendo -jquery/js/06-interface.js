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

*/
var elemento = $('.elemento')

//.draggable permite que los elementos seleccionados puedan ser movidos por 
// por el usuario en toda la web
elemento.draggable();


    alert("todo listo");
})