//interface definiremos una interface para camiseta

interface CamisetaBase{
    setColor(color);
    getColor();
}


///////////////////////////////////////////////////////////////////////////////////////////

//sesion 161 decoradores

function estampar(logo: string){
    // para crear un decorador se crea una funcion con estampar en este casos era logo: string
    return function(target: Function){
        //creamos una funcion dentro de la funcion que tendra target como parametro
        //esta misma tsera una funcion
        target.prototype.estampacion = function():void{
           //al definir un :void indicamos que esta vacio  
       
           console.log("camiseta estampada cone l logo de: "+logo);
        }
        //despues se agrega target.prototype. y el nombre de la clase
    }
}
        
        @estampar('Gucci')
        //despues tenemos que aplicar el decorador a la  clase camiseta para 
        //aplicarlo debemos poner la @ y el nombre del decorador
        //un decorador no se cierra con ; ya que de esta manera palicamos el decorador
        //a la clase siguiente 
        
    // un decorador sirve para devolver una cosa o otra, adicionar una funcionalidad a una clase 
    // o unos meta datos 

//////////////////////////////////////////////////////////////////////////////////////////
//clase (molde del objeto)
// la funcion debe llamarse igual que el fichero siempre  y  usar mayusculas en 
//la primera letra 

class Camiseta implements CamisetaBase{
// se agrego el export para poder utilizar esta clase desde el main.ts




    //propiedades (caracteristicas del objeto)
    // en este caso definimos que es una propiedad publica se llamara color
    // y sera tipo string
    private color:string = "";
    private modelo:string = "";
    private marca: string = "";
    private talla:string = "";
    // al agregar = "" le definimos que al ejecutar tendra un valor
    private precio:number = 0;

    //las propiedades pueden ser public, private o protected
    //public se peude acceder desde cualquier sitio

    //protected se puede acceder desde la classe que lo define
    
    //private  solo son accesible desde la clase que los define
    //por lo que no se pueden dar valores desde fuera entonces 
    // se requiere un metodo acontinuacion.

    //metodos (que son funciones o acciones que hara el objeto)


        //constructor///    para agregar las propiedades 
        //en el molde se utiliza y despues se agregan
    
        constructor(color, modelo, marca, talla, precio){
            this.color = color;
            this.modelo = modelo;
            this.marca = marca;
            this.talla = talla;
            this.precio = precio;

        }

        public setColor(color){
        this.color = color;

    }
    public getColor(){
        return this.color
    }

}
//////////////////////////////////////////////////////////////////////////////////////
//Herencia una clase hija puede heredar todos los parametros de una clase padre
//clase hija
class Sudadera extends Camiseta{
                //agregando extends y la classe en este caso camiseta
                // es como definimos una clase padre de la cual se 
                //tomaran las caracteristicas para la clase hija

    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        // agregamos : boolean para que de con el return obligatoriamente un boolean

        return this.capucha;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////
var camiseta = new Camiseta("asd","asd","asd","asd", 12);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("rojo","Manga Larga", "Nike", "l", 30);
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
