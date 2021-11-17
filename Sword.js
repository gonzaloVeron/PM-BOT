class Sword{
    constructor(name, damagePoints){
        this.name = name;
        this.damagePoints = damagePoints;
    }

    damage(){
        return this.damagePoints;
    }

    defense(){
        return 0;
    }
}

module.exports = Sword;