// Grafo sobre las conexiones entre ciudades
class Rutas{

    constructor(){
        this.ciudades = new Map();
    }

    //Registrar una ciudad si es que no existe en el map de ciudades
    agregarCiudad(nombreCiudad){
        if(this.ciudades.has(nombreCiudad) == false){
            this.ciudades.set(nombreCiudad,[]);
        }
    }

    //Conectar dos ciudades, indicando la distancia en Km
    conectarRuta(origen, destino, distancia){
        this.agregarCiudad(origen);
        this.agregarCiudad(destino);

        // Lima -> [ Trujillo, 560Km ]
        this.ciudades.get(origen).push({destino: destino, km: distancia});
        // Trujillo -> [destino: Lima, km: 560Km]
        this.ciudades.get(destino).push({destino: origen, km: distancia});
    }

    imprimirRutas(){
        console.log("=====Mapa de Rutas con distancias=====");
        // rutas =>  [{destino: Trujillo, km: 560Km},{destino: Arequipa, km: 720Km}]
        for(let [ciudad, rutas] of this.ciudades){
            let detalleRutas =  rutas.map(ruta => `${ruta.destino} (${ruta.km} km)`).join(" , ");
            console.log(` ${ciudad} -> [ ${detalleRutas} ]`);
        }
    }
}

let rutasPeru = new Rutas();
rutasPeru.conectarRuta("Lima","Trujillo",560);
rutasPeru.conectarRuta("Lima","Ica",300);
rutasPeru.conectarRuta("Ica","Arequipa",710);
rutasPeru.conectarRuta("Trujillo","Piura",500);

rutasPeru.imprimirRutas();