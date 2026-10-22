/* 
Registrar los vuelos de ida y vuelta con sus respectivos precios
agregando las ciudades con su abreviatura de 3 caracteres.
*/

class Vuelos{
    constructor(){
        this.aeropuertos = new Map();
    }

    // Aqui se agregan los codigos de aeropuertos que no existan
    agregarAeropuerto(codigo){
        if(!this.aeropuertos.has(codigo)){
           this.aeropuertos.set(codigo,[]); 
        }
    }

    agregarVuelo(origen,destino,costo){
        this.agregarAeropuerto(origen);
        this.agregarAeropuerto(destino);

        this.aeropuertos.get(origen).push({destino: destino, precio:costo});
    }

    imprimirItinerarios(){
        console.log(`====Itinerarios y precios de Vuelos`);
        for(let [origen, vuelos] of this.aeropuertos){
            let destinos = vuelos.map(vuelo => `${vuelo.destino} ($${vuelo.precio})`).join(" | ");
            console.log(`Desde ${origen} hacia [ ${destinos || "No registra vuelos" } ]`);
        }
        
    }
}

let buscadorVuelos = new Vuelos();

buscadorVuelos.agregarVuelo("LIM","MIA",560);
buscadorVuelos.agregarVuelo("MIA","HAV",360);
buscadorVuelos.agregarVuelo("BOG","SCL",340);
buscadorVuelos.agregarVuelo("LIM","SCL",150);

buscadorVuelos.imprimirItinerarios();

 // Desde LIM hacia [ MIA ($560) , BOG ($345) ]
 // BOG -> [ SCL ($500) ]
 