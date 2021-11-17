const DeadException = require('./Exceptions/DeadException');
const NotEquippableException = require('./Exceptions/NotEquippableException');
const ItemNotFoundException = require('./Exceptions/ItemNotFoundException');
const Armor = require('./Armor');
const Helmet = require('./Helmet');
const Sword = require('./Sword');


class Alive{

    constructor(character){
        this.character = character;
    }

    totalDamage(){
        return this.character.baseDamage + this.character.getRightHand().damage() + this.character.getLeftHand().damage() / 2;
    }

    equipItem(itemName){
        let itemFound = this.character.getItems().find(i => i.name === itemName);
        if(itemFound === undefined){
            throw new ItemNotFoundException("No se encontro el item a equipar.");
        }
        switch(itemFound.constructor){
            case Armor:
                this.character.setArmor(itemFound);
                break;
            case Helmet:
                this.character.setHelmet(itemFound);
                break;
            case Sword:
                this.character.setRightHand(itemFound);
                break;
            default:
                throw new NotEquippableException("No se puede equipar este item.");
        }
    }

    takeItem(itemName){
        let itemFound = this.character.getActualRegion().findItem(itemName)
        if(itemFound === undefined){
            throw new ItemNotFoundException("No se encontro el item en la region.");
        }
        this.character.getItems().push(itemFound);
        this.character.getActualRegion().deleteItem(itemName);
    }

    viewInventory(){
        return this.character.getItems().map(i => i.name);
    }

    attack(other){
        if(this.character.getLifePoints() === 0){
            throw new DeadException("No se puede atacar estando muerto.");
        }
        let newLifePoints = Math.max(0, other.getLifePoints() - this.totalDamage());
        other.setLifePoints(newLifePoints);
        if(newLifePoints === 0){
            other.state = new Dead();
        }
    }
}

class Dead{

    totalDamage(){
        return 0;
    }

    equipItem(item){
        throw new DeadException("No se puede atacar estando muerto.");
    }

    takeItem(item){
        throw new DeadException("No se puede atacar estando muerto.");
    }

    viewInventory(){
        throw new DeadException("No se puede atacar estando muerto.");
    }

    attack(other){
        throw new DeadException("No se puede atacar estando muerto.");
    }

}

module.exports = { Alive, Dead };