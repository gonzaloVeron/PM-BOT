class TakeItem{
    execute(args, characters, regions, message){
        let characterFound = characters.find(c => c.getName() === message.author.username);
        characterFound.takeItem(args[0]);
        message.channel.send("Se ha añadido el item al inventario.");
    }
}

module.exports = TakeItem;