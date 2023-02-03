export class zapatilla{

    /* esta es la forma basica de realizar la creacion de un objeto
    pero en TY hay metodos mas rapidos que es lo que se hara a continuacion.

    public nombre: string;
    public marca: string;
    public color: string;
    public precio: string;
    public stock: boolean;

    //propiedades 
    //public es para hacerlas publicas y accesibles
    //despues se le da nombre
    // por ultimo tipo de dato 

    //despues tenemos que generar un cosntructor
    constructor(nombre, marca, color, precio, stock){
        //ahora para crear un objeto se deben ingresar todos esos datos definidos
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    */
    //esta e sla forma rapida de crear un objetodefinirlo dentro del constructor
    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean
    ){}
}