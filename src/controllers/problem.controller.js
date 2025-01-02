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

    try {
        //nohing implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req,res){

    try {
        //nohing implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }

}

function deleteProblem(req,res){

    try {
        //nohing implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }

}

function updateProblem(req,res){

    try {
        //nohing implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    };

}

module.exports={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
}