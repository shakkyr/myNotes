import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type: Number,
        defailt : 0
    },
    createdAt : {
        type: Date,
        defailt : new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;