class Document_ {
    data: string = "";
    filename: string = "";

    constructor() { }

    open(): void {
        // Lógica para abrir el documento
    }
}

class WritableDocument_ extends Document_ {
    save(): void {
        // Lógica para guardar el documento
    }
}

class Project {
    writableDocs: WritableDocument_[] = [];
    documents: Document_[] = [];

    saveAll(): void {
        for (const doc of this.writableDocs) {
            doc.save();
        }
    }
}

interface IFigura {
    getArea(): number;
}


class Cuadrado implements IFigura {
    lado: number

    constructor(lado: number) {
        this.lado = lado;
    }

    getArea(): number {
        return this.lado * this.lado;
    }
}


// Implementación de principio de sustitución de Liskov
class Rectangulo implements IFigura {
    lado: number;
    altura: number;

    constructor(lado: number, altura: number) {
        this.lado = lado;
        this.altura = altura;
    }

    getArea(): number {
        return this.lado * this.altura;
    }
}

const rectangulo = new Rectangulo(2, 3);

function area(figura: IFigura): number {
    return figura.getArea();   
}

const cuadrado = new Cuadrado(2);
const areaCuadrado = area(cuadrado);
const areaRectangulo = area(rectangulo);