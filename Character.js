const Sword = require('./Sword');
const Helmet = require('./Helmet');
const Armor = require('./Armor');
const {Alive, Dead} = require('./CharacterStates')
const Hand = require('./Hand');
const NoRegionAvailable = require('./Exceptions/NoRegionAvailableException');

class Character {
    constructor(name, region) {
        this.state = new Alive(this)
        this.name = name;
        this.lifePoints = 20;
        this.actualRegion = region;
        this.baseDamage = 1;
        this.rightHand = new Hand();
        this.leftHand = new Hand();
        this.helmet = null;
        this.armor = null;
        this.items = [];
    }

    moveTo(direction){
        if(this.actualRegion.thereIsARegionIn(direction)){
            this.actualRegion.deleteCharacter(this.name);
            this.actualRegion = this.actualRegion.getRegion(direction);
            this.actualRegion.AddCharacter(this);
        }else{
            throw new NoRegionAvailable("No hay una region en esa direccion.");
        }
    }

    totalDamage(){
        return this.state.totalDamage();
    }

    equipItem(itemName){
        this.state.equipItem(itemName);
    }

    takeItem(itemName){
        this.state.takeItem(itemName);
    }

    viewInventory(){
        return this.state.viewInventory();
    }

    attack(other){
        this.state.attack(other);
    }

    //-----------------------------------------//

    getName(){
        return this.name;
    }

    getActualRegion(){
        return this.actualRegion;
    }

    setActualRegion(region){
        this.actualRegion = region;
    }

    getLifePoints(){
        return this.lifePoints;
    }

    setLifePoints(lp){
        this.lifePoints = lp;
    }

    getRightHand(){
        return this.rightHand;
    }
    
    getLeftHand(){
        return this.leftHand;
    }

    getBaseDamage(){
        return this.baseDamage;
    }

    setArmor(armor){
        this.armor = armor;
    }

    setHelmet(helmet){
        this.helmet = helmet;
    }

    setRightHand(item){
        this.rightHand = item;
    }

    setLeftHand(item){
        this.leftHand = item;
    }

    getItems(){
        return this.items;
    }

}

module.exports = Character;