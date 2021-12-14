const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const commentSchema = mongoose.Schema(
{
    articleId:{
        type:String,
        required:true
    },
    name: {
            type: String,
            required: true
            // trim: true,
    },
    email: {
            type: String,
            required: true
    },
    message: {
        type: String,
        required: true
},
isdeleted:{
    type:Boolean,
    default: false
}
},
    {
        timestamps: true,
    }
);
    
    // add plugin that converts mongoose to json
    commentSchema.plugin(toJSON);


const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
    