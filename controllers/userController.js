import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//@desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async function (req, res) {
    
    
        const { username, email, password } = req.body;
        if(!username || !email || !password){
            res.status(400);
            throw new Error(`Please enter all fields name = ${username} email = ${email} password = ${password}`);
        }
        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            res.status(400);
            throw new Error("User already exists");
        }
        // create a new user in the database
        // hash the password
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashPassword,
        });

        console.log(`User created with email ${email}`);
        
        if(user){
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
            });

        }
        else{
            res.status(400);
            throw new Error("Invalid user data");
        }
    
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async function (req, res) {
    // take user email and password from the body
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error(`Please enter all fields email = ${email} password = ${password}`);
    }
    // find the user in the database
    const user = await User.findOne({email });
    
    // check password with hashed password
    if(user && (await bcrypt.compare(password, user.password))){
        // create a token
        const accesToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                userId: user._id,
            },
        },process.env.ACCESS_TOKEN_SECERT, {expiresIn: '20m'});
        
        res.status(200).json({accesToken});
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password");
    }

    res.json({ message: "Login the user" });
    res.sendStatus(200);
});

// @desc Get current user
// @route GET /api/users/current
// @access Private
const currentUser = asyncHandler(async function (req, res) {
    res.json(req.user);
    res.sendStatus(200);
});

export default {
    registerUser,
    loginUser,
    currentUser
};