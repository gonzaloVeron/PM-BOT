class Inventory{
    execute(args, characters, regions, message){
        let characterFound = characters.find(c => c.getName() === message.author.username);
        if(characterFound.viewInventory().length === 0){
            message.channel.send("No tienes items en el inventario.");
        }else{
            message.channel.send("Inventario: " + characterFound.viewInventory());
        }
    }
}

module.exports = Inventory;