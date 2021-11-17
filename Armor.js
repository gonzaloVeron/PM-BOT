class Armor{
    constructor(name, defensePoints){
        this.name = name;
        this.defensePoints = defensePoints;
    }

    damage(){
        return 0;
    }

    defense(){
        return this.defensePoints;
    }
}

module.exports = Armor;