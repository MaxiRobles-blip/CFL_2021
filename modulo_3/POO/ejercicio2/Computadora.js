var Computadora = /** @class */ (function () {
    function Computadora(volumenInicial, programasInstalados, encendido) {
        this.volumenActual = volumenInicial;
        this.programasActuales = programasInstalados;
        this.estaEncendida = encendido;
    }
    Computadora.prototype.prenderApagar = function () {
        if (this.estaEncendida)
            this.estaEncendida = false;
        else
            this.estaEncendida = true;
    };
    Computadora.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Computadora.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Computadora.prototype.agregarPrograma = function () {
        this.programasActuales = this.programasActuales + 1;
    };
    Computadora.prototype.quitarPrograma = function () {
        this.programasActuales = this.programasActuales - 1;
    };
    Computadora.prototype.mostarComputadora = function () {
        console.log("la computadora esta encendida", this.volumenActual, "en el volumen", this.volumenActual, "y tiene ", this.programasActuales, " programas");
    };
    return Computadora;
}());
var pc1 = new Computadora(100, 30, false);
var pc2 = new Computadora(50, 15, false);
pc1.mostarComputadora();
pc1.agregarPrograma();
pc1.mostarComputadora();
pc1.subirVolumen();
pc1.prenderApagar();
console.log(pc1);
