class Move{
    execute(args, characters, regions, message){
        let dir = args[0].toLowerCase();
        let characterFound = characters.find(c => c.getName() === message.author.username);
        characterFound.moveTo(dir);
        message.channel.send("Te moviste exitosamente al " + dir + "\n" + "``` " + this.printMap(message.author.username, regions) + " ```");
    }

    printMap(name, regions){
        let res = "----------Map-----------\n | ";
        let len = 5;
        for(let i = 0; i < regions.length; i++){
            if(len === 0){
                len = 4;
                res += " |\n | ";
                if(regions[i] != null){
                    if(regions[i].isCharacterHere(name)){
                        res += "[*] ";
                    }else{
                        res += "[ ] ";
                    }
                }else{
                    res += "    ";
                }
            }else{
                if(regions[i] != null){
                    if(regions[i].isCharacterHere(name)){
                        res += "[*] ";
                    }else{
                        res += "[ ] ";
                    }
                }else{
                    res += "    ";
                }
                len -= 1;
            }
        }
        res += " |"
        res += "\n ------------------------"
        return res;
    }

}

module.exports = Move;