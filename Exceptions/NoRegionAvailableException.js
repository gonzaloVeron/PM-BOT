class NoRegionAvailableException extends Error{
    constructor(message){
        super(message);
    }
}

module.exports = NoRegionAvailableException;