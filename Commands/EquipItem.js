class EquipItem{
    execute(args, characters, regions, message){
        let characterFound = characters.find(c => c.getName() === message.author.username);
        characterFound.equipItem(args[0]);
        message.channel.send(args[0] + " equipado.");
    }
}

module.exports = EquipItem;