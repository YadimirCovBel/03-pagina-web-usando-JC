


export class Project{

    _id:string;
    name: string;
    description:string;
    categoty: string;
    year: number;
    lang: string;
    image: string; 

    constructor(
         _id: string,
         name: string,
         description: string,
         categoty: string,
         year: number,
         lang: string,
         image: string
    ){
        this._id = _id;
        this.name = name;
        this.description= description;
        this.categoty = categoty;
        this.year = year;
        this.lang = lang;
        this.image = image;
     }
}


/*
codigo viejo por si no funciona

export class Project{

 constructor(
        public _id: string,
        public name: string,
        public description: string,
        public categoty: string,
        public year: number,
        public lang: string,
        public image: string
    ){ }
}


/////////////////////////////////////////////////////////////////////////////
        project.name = params.name;
        project.description= params.description;
        project.categoty= params.categoty;
        project.lang= params.lang;
        project.year = params.year;
        project.image = null;
*/