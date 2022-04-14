import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';


export const signin = (req, res) => {
    const { email, password} = req.body;
    
    try {
        const existingUser = await User.findOne({ email});

        if(!existingUser) return res.status(404).json({message: 'User dose not exist'});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message: "invalid credentials"})

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: '1h'});

        res.status(200).json({result: existingUser, token})


    } catch (error) {
        res.status(500).json({message: 'Somthing Went Wrong'});
    }
}

export const signup = (req, res) => {

}