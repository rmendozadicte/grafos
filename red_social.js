// Grafo sobre una Red Social
class RedSocial{

    constructor(){
        this.conexiones = new Map();
    }

    // Registrar un nuevo usuario (Vértice o nodo)
    agregarUsuario(nombreUsuario){
        if(this.conexiones.has(nombreUsuario) == false){
            console.log(`Agregando a ${nombreUsuario} a la red`)
            this.conexiones.set(nombreUsuario,[])
        }
    }

    // Para conectar a dos amigos (Bidireccional)
    conectarAmistad(usuario1,usuario2){

        // Validar que existan
        this.agregarUsuario(usuario1);
        this.agregarUsuario(usuario2);

        // Agregar los usuarios a sus respectivas cuentas
        let amigos = this.conexiones.get(usuario1);
        amigos.push(usuario2);
        //this.conexiones.get(usuario1).push(usuario2);
        this.conexiones.get(usuario2).push(usuario1);
    }
    []
    // Imprime la estructura de la red social
    imprimirRed(){
        console.log("**** RED SOCIAL ****");
        for(let [usuario,amigos] of this.conexiones){
            console.log(`${usuario} -> Conectado con: [ ${amigos.join(", ")} ]`);
        }
    }
}

// PRUEBAS
let redSocial = new RedSocial();

redSocial.conectarAmistad("Jose","Ana");
redSocial.conectarAmistad("Jose","Dario");
redSocial.conectarAmistad("Ana","Laura");

redSocial.imprimirRed();