class Region {
    constructor(name) {
        this.name = name;
        this.characters = [];
        this.items = [];
        this.regions = {
            North : null,
            South : null,
            East : null,
            West : null
            //North - East - South - West
        };
    }

    AddRegion(direction, region){
        this.regions[direction] = region;
    }

    AddCharacter(character){
        this.characters.push(character);
    }

    isCharacterHere(characterName){
        return this.characters.some(c => c.getName() === characterName);
    }
    
    thereIsARegionIn(direction){
        return this.regions[direction] != null;
    }

    getName(){
        return this.name;
    }

    getRegion(direction){
        return this.regions[direction];
    }

    deleteCharacter(characterName){
        const char = this.characters.find(c => c.getName() === characterName);
        const index = this.characters.indexOf(char);
        this.characters.splice(index, 1);
    }

    getCharacters(){
        return this.characters;
    }

    findItem(itemName){
        return this.items.find(i => i.name === itemName);
    }

    showItems(){
        return this.items.map(i => i.name);
    }

    deleteItem(itemName){
        const itemFound = this.items.find(c => c.name === itemName);
        const index = this.items.indexOf(itemFound);
        this.items.splice(index, 1);
    }

}

module.exports = Region;