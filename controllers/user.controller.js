import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';


export const signin = async (req, res) => {
    const { email, password} = req.body;
    
    try {
        const existingUser = await User.findOne({ email});

        if(!existingUser) return res.status(404).json({message: 'User dose not exist'});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message: "invalid credentials"})

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: '1h'});

        res.status(200).json({result: existingUser, token})


    } catch (error) {
        console.log('controller signin error:', error);
        res.status(500).json({message: 'Somthing Went Wrong'});
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName} = req.body;

    if(existingUser) return res.status(404).json({message: 'User already exist'});

    if(password !== confirmPassword) return res.status(404).json({message: 'passwords dont match'});

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})

    const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"});

    res.status(200).json({ result, token})
    try {
        const existingUser = await User.findOne({email});


    } catch (error) {
        console.log('controller signup error:', error);
        res.status(500).json({message: 'Somthing Went Wrong'});
    }
}