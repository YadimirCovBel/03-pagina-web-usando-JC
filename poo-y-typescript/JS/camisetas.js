//clase (molde del objeto)
// la funcion debe llamarse igual que el fichero siempre  y  usar mayusculas en 
//la primera letra 
var Camiseta = /** @class */ (function () {
    //las propiedades pueden ser public, private o protected
    //public se peude acceder desde cualquier sitio
    //protected se puede acceder desde la classe que lo define
    //private  solo son accesible desde la clase que los define
    //por lo que no se pueden dar valores desde fuera entonces 
    // se requiere un metodo acontinuacion.
    //metodos (que son funciones o acciones que hara el objeto)
    //constructor///    para agregar las propiedades 
    //en el molde se utiliza y despues se agregan
    function Camiseta(color, modelo, marca, talla, precio) {
        // se agrego el export para poder utilizar esta clase desde el main.ts
        //propiedades (caracteristicas del objeto)
        // en este caso definimos que es una propiedad publica se llamara color
        // y sera tipo string
        this.color = "";
        this.modelo = "";
        this.marca = "";
        this.talla = "";
        // al agregar = "" le definimos que al ejecutar tendra un valor
        this.precio = 0;
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
/* se genera como nota ya que ahora lo usaremos desde main
// ya teniendo el model (classe) podemos crear objetos con facilidad
        ///ya teniendo el constructor simplemente agregamos
var camiseta = new Camiseta("rojo", "manga larga", "nike", "l", 14);

camiseta.setColor("Rojo")
*/
/*al volver las propiedades de la funcion privada este metodo
deja de ser funcional y utilizaremos otro
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;
*/
/* se genera como nota ya que ahora lo usaremos desde main
var playera = new Camiseta("azul", "manga corta", "adidas", "l", 15);

playera.setColor("Azul")
*/
/*al volver las propiedades de la funcion privada este metodo
deja de ser funcional y utilizaremos otro
playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Adidas";
playera.talla = "L";
playera.precio = 15;
*/
/* se genera como nota ya que ahora lo usaremos desde main
console.log(camiseta, playera);
*/ 
