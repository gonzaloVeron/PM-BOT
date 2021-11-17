const Character = require('../Character');
const DeadException = require('../Exceptions/DeadException');
const AlreadyRegistered = require('../Exceptions/AlreadyRegistered');

class Register{
    execute(args, charactersList, regions, message){
        let authorName = message.author.username;

        if(charactersList.some(c => c.name === authorName)){
            throw new AlreadyRegistered("Ya existe el personaje");
        }

        let newChar = new Character(authorName);
        charactersList.push(newChar);

        let mainRegion = regions.find(r => (r != null) ? r.name === "Nix" : false);
        mainRegion.AddCharacter(newChar);

        newChar.actualRegion = mainRegion;

        message.channel.send(authorName + ", creaste un personaje en el juego");
    }
}

module.exports = Register;