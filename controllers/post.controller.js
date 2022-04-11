import mongoose from "mongoose";
import PostMessage from "../models/postMessage.model.js"

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);

    } catch (err) {
        res.status(404).json({message : err.message});

    }

}

export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save()

        res.status(201).json(newPost);

    } catch (err) {
        res.status(409).json({message: err.message});

    }
}
export const updatePost = async (req, res) => {
    const {id: _id} = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post With That Id');

    const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {new: true})

    res.json(updatePost)

}