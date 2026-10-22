// Registrar las estaciones y sus conexiones en la Linea 1

class RedMetro{
    constructor(){
        this.redMetro = new Map();
    }

    agregarEstaciones(nombreEstacion){
        if(this.redMetro.has(nombreEstacion) == false){
            this.redMetro.set(nombreEstacion,[]);
            console.log(`Estacion ${nombreEstacion} se ha añadido a la red Metro Linea 1`)
        }
    }

    conectarEstaciones(estacion1,estacion2){
        this.agregarEstaciones(estacion1);
        this.agregarEstaciones(estacion2);

        this.redMetro.get(estacion1).push(estacion2);
        this.redMetro.get(estacion2).push(estacion1);
    }

    imprimirRedMetro(){
        console.log(`===RED METRO===`);
        for(let [estacion, conexiones] of this.redMetro){
            console.log(`${estacion} -> Conectado con: [ ${conexiones.join(", ")} ]`);
        }
    }
}

let redMetroLinea1 = new RedMetro();

redMetroLinea1.conectarEstaciones("Bayovar","Santa Rosa");
redMetroLinea1.conectarEstaciones("San Martín","Santa Rosa");
redMetroLinea1.conectarEstaciones("Gamarra","Miguel Grau");
redMetroLinea1.conectarEstaciones("Gamarra","Arriola");
redMetroLinea1.conectarEstaciones("Gamarra","La Cultura");

redMetroLinea1.imprimirRedMetro();

// Bayovar -> Conectado con: [ Santa Rosa ]
// Santa Rosa -> Conectado con: [ Bayovar, San Martín ]
// San Martin -> Conectado con: [ Santa Rosa ]
// Gamarra -> Conectado con: [ Miguel Grau, Arriola ]
// Miguel Grau -> Conectado con: [ Gamarra ]
// Arriola -> Conectado con: [ Gamarra ]