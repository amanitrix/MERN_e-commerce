require('dotenv').config()
const jwt=require('jsonwebtoken')
const { sanitizeUser } = require('../utils/SanitizeUser')
const User=require('../models/User')

exports.verifyToken=async(req,res,next)=>{
    try {
        // extract the token from request cookies
        const {token}=req.cookies

        // if token is not there, return 401 response
        if(!token){
            return res.status(401).json({message:"Token missing, please login again"})
        }

        // verifies the token 
        const decodedInfo=jwt.verify(token,process.env.SECRET_KEY)

        // checks if decoded info contains legit details, then set that info in req.user and calls next
        if(decodedInfo && decodedInfo._id && decodedInfo.email){
            req.user=decodedInfo
            next()
        }

        // if token is invalid then sends the response accordingly
        else{
            return res.status(401).json({message:"Invalid Token, please login again"})
        }
        
    } catch (error) {

        console.log(error);
        
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: "Token expired, please login again" });
        } 
        else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: "Invalid Token, please login again" });
        } 
        else {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

exports.verifyAdmin=async(req,res,next)=>{
    try {
        // verifyToken must run first and attach the logged-in user to the request
        if(!req.user || !req.user._id){
            return res.status(401).json({message:"Please login to continue"})
        }

        // Read the current role from the database instead of trusting an old token.
        const user=await User.findById(req.user._id).select('isAdmin')

        if(!user){
            return res.status(401).json({message:"User not found, please login again"})
        }

        if(!user.isAdmin){
            return res.status(403).json({message:"Admin access required"})
        }

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}
