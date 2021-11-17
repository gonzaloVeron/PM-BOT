class NotEquippableException extends Error{
    constructor(message){
        super(message);
    }
}

module.exports = NotEquippableException;
