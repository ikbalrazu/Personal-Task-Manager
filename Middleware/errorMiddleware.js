
const errorMiddleware = (error,req,res,next) => {
    console.log(error.message, error.statuscode);
    if(error.statuscode === 500){
        res.status(500).json({error:error.message});
    }

    res.status(error.statuscode).json({
        success:false,
        error:error.message
    });
    
}

module.exports = errorMiddleware;