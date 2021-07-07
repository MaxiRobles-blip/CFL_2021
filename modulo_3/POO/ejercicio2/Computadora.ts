
class Computadora{

    private estaEncendida:boolean;
    private volumenActual:number;
    private programasActuales:number;

    constructor(volumenInicial:number,programasInstalados:number,encendido:boolean){
        
        this.volumenActual=volumenInicial;
        this.programasActuales=programasInstalados;
        this.estaEncendida= encendido;
    }

    prenderApagar():void{
        if(this.estaEncendida)
        this.estaEncendida = false;
        else
        this.estaEncendida = true;
    }

    subirVolumen():void{
        this.volumenActual = this.volumenActual + 1;
    }

    bajarVolumen():void{
        this.volumenActual= this.volumenActual -1;
    }

    agregarPrograma():void{
        this.programasActuales= this.programasActuales +1;
    }

    quitarPrograma():void{
        this.programasActuales= this.programasActuales -1;
    }

 
        mostarComputadora(){
            console.log("la computadora esta encendida",this.volumenActual, "en el volumen", this.volumenActual, "y tiene ", this.programasActuales," programas")
    }    
    
}


let pc1 = new Computadora(100,30,false);
let pc2 = new Computadora(50,15,false);

pc1.mostarComputadora();

pc1.agregarPrograma();

pc1.mostarComputadora();

pc1.subirVolumen();

pc1.prenderApagar();

console.log(pc1);