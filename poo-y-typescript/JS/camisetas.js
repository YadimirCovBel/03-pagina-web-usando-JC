//clase (molde del objeto)
// la funcion debe llamarse igual que el fichero siempre  y  usar mayusculas en 
//la primera letra 
var Camiseta = /** @class */ (function () {
    function Camiseta() {
        //propiedades (caracteristicas del objeto)
        // en este caso definimos que es una propiedad publica se llamara color
        // y sera tipo string
        this.color = "";
        this.talla = "";
        this.tipo = "";
        // al agregar = "" le definimos que al ejecutar tendra un valor
        this.precio = 0;
    }
    //las propiedades pueden ser public, private o protected
    //public se peude acceder desde cualquier sitio
    //protected se puede acceder desde la classe que lo define
    //private  solo son accesible desde la clase que los define
    //por lo que no se pueden dar valores desde fuera entonces 
    // se requiere un metodo acontinuacion.
    //metodos (que son funciones o acciones que hara el objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
// ya teniendo el model (classe) podemos crear objetos con facilidad
var camiseta = new Camiseta();
camiseta.setColor("Rojo");
/*al volver las propiedades de la funcion privada este metodo
deja de ser funcional y utilizaremos otro
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;
*/
var playera = new Camiseta();
playera.setColor("Azul");
/*al volver las propiedades de la funcion privada este metodo
deja de ser funcional y utilizaremos otro
playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Adidas";
playera.talla = "L";
playera.precio = 15;
*/
console.log(camiseta.getColor(), playera);
