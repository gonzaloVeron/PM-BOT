class ItemNotFoundException extends Error{
    constructor(message){
        super(message);
    }
}

module.exports = ItemNotFoundException;