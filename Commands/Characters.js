class Characters{
    execute(args, characters, regions, message){
        if(characters.length === 0){
            message.channel.send("No hay personajes creados.");
        }else{
            message.channel.send("Los personajes creados son: " + characters.map(c => c.getName()));
        }
    }
}

module.exports = Characters;