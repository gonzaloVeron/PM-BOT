const NotInTheSameRegion = require('../Exceptions/NotInTheSameRegion');

class Attack{
    execute(args, characters, regions, message){
        let characterFound = characters.find(c => c.getName() === message.author.username);
        let characterToAttack = characters.find(c => c.getName() === args[0]);
        if(characterFound.getActualRegion().getName() !== characterToAttack.getActualRegion().getName())
        {
            throw new NotInTheSameRegion("No estan en la misma region");
        }
        characterFound.attack(characterToAttack);
        if(characterToAttack.lifePoints === 0){
            message.channel.send(message.author.username + " ha matado a " + characterToAttack.name + " !");
        }else{
            message.channel.send(message.author.username + " ataco a " + characterToAttack.name + " y lo dejo con " + characterToAttack.lifePoints + " de vida !");
        }
    }
}

module.exports = Attack;