const DeadException = require('./DeadException');
const NotEquippableException = require('./NotEquippableException');
const NoRegionAvailableException = require('./NoRegionAvailableException');
const ItemNotFoundException = require('./ItemNotFoundException');
const AlreadyRegistered = require('./AlreadyRegistered');
const NotInTheSameRegion = require('./NotInTheSameRegion');

class ErrorHandler{

    constructor(channel){
        this.channel = channel;
    }

    handle(error){
        switch(error.constructor){
            case DeadException:
                this.channel.send("Estas muerto.");
                break;
            case NotEquippableException:
                this.channel.send("No es un item equipable");
                break;
            case NoRegionAvailableException:
                this.channel.send("No hay una region en esa direccion.");
                break;
            case ItemNotFoundException:
                this.channel.send("No se encontro el item.");
                break;
            case AlreadyRegistered:
                this.channel.send("Ya estas registrado !")
            case NotInTheSameRegion:
                this.channel.send("No puedes atacar a personajes que estan en otra region !")
            default:
                console.log(error);
                break;
        }
    }
}

module.exports = ErrorHandler;