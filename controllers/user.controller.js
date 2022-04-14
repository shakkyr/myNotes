import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';


export const signin = (req, res) => {
    const { email, password} = req.body;
    
    try {
        const existingUser = await User.findOne({ email});

        if(!existingUser) return res.status(404).json({message: 'User dose not exist'});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
    } catch (error) {

    }
}

export const signup = (req, res) => {

}