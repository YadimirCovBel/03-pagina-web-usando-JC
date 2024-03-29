//interface definiremos una interface para camiseta
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///////////////////////////////////////////////////////////////////////////////////////////
//sesion 161 decoradores
function estampar(logo) {
    // para crear un decorador se crea una funcion con estampar en este casos era logo: string
    return function (target) {
        //creamos una funcion dentro de la funcion que tendra target como parametro
        //esta misma tsera una funcion
        target.prototype.estampacion = function () {
            //al definir un :void indicamos que esta vacio  
            console.log("camiseta estampada cone l logo de: " + logo);
        };
        //despues se agrega target.prototype. y el nombre de la clase
    };
}
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
    Camiseta = __decorate([
        estampar('Gucci')
        //despues tenemos que aplicar el decorador a la  clase camiseta para 
        //aplicarlo debemos poner la @ y el nombre del decorador
        //un decorador no se cierra con ; ya que de esta manera palicamos el decorador
        //a la clase siguiente 
        //////////////////////////////////////////////////////////////////////////////////////////
        //clase (molde del objeto)
        // la funcion debe llamarse igual que el fichero siempre  y  usar mayusculas en 
        //la primera letra 
    ], Camiseta);
    return Camiseta;
}());
//////////////////////////////////////////////////////////////////////////////////////
//Herencia una clase hija puede heredar todos los parametros de una clase padre
//clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        // agregamos : boolean para que de con el return obligatoriamente un boolean
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
////////////////////////////////////////////////////////////////////////////////////////////////
var camiseta = new Camiseta("asd", "asd", "asd", "asd", 12);
console.log(camiseta);
camiseta.estampacion();
var sudadera_nike = new Sudadera("rojo", "Manga Larga", "Nike", "l", 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("gris");
console.log(sudadera_nike);
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
