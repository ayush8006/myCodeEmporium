const {StatusCodes} =require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');

function pingProblemController(req,res){
    return res.json({message:'ping controller is up'})
}

function addProblem(req,res,next){

    try {
        //nohing implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }

}

function getProblem(req,res){

    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"not implemented"
    });

}

function getProblems(req,res){

    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"not implemented"
    });

}

function deleteProblem(req,res){

    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"not implemented"
    });

}

function updateProblem(req,res){

    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"not implemented"
    });

}

module.exports={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
}