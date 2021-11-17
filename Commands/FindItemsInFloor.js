class FindItemsInFloor{
    execute(args, characters, regions, message){
        let characterFound = characters.find(c => c.getName() === message.author.username);
        if(characterFound.actualRegion.showItems().length === 0){
            message.channel.send("No hay items en el suelo.");
        }else{
            message.channel.send("Se encontraron: " + characterFound.actualRegion.showItems());
        }
    }
}

module.exports = FindItemsInFloor;