import constants from "../constants.js";


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // here we are checking if status code is set or not if not we are setting it to 500 
    // we can also use err.status but we are using res.status because we are setting status code in our controllers
    
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title: 'Validation Failed',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: 'Internal Server Error',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: 'Not Found',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No error all good!");
            break;
    }
};



export default errorHandler;