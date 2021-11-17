class NotInTheSameRegion extends Error{
    constructor(message){
        super(message);
    }
}
  
module.exports = NotInTheSameRegion;