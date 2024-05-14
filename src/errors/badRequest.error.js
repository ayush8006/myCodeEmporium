const BaseError= require('./base.error');
const {StatusCodes}=require('http-status-code');

class BadRequest extends BaseError{
    constructor(propertyName,details){
        super("BadRequest",StatusCodes.BAD_REQUEST,`Invalid structure for ${propertyName} provided`,details);
    }
}

module.exports=BadRequest;