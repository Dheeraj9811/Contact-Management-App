import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization ;
    if (authHeader && authHeader.startsWith('Bearer')) {
        try {
            token = authHeader.split(" ")[1];
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECERT,(err,decoded)=>{
                if(err){
                    res.status(401);
                    throw new Error('Not authorized, token failed/expired');
                }
                req.user = decoded.user;
                // console.log("this is decorded token user ->",req.user);
                next();
            }
            );
            
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, token failed/expired');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

export default validateToken;