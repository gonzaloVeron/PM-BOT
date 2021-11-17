class AlreadyRegistered extends Error{
    constructor(message){
        super(message);
    }
}
  
module.exports = AlreadyRegistered;