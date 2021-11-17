class DeadException extends Error{
    constructor(message){
        super(message);
    }
}
  
module.exports = DeadException;