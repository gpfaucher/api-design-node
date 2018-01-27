var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    categories: [
        {
            type: Schema.Types.ObjectId
        }
    ]
});

module.exports = mongoose.model('post', PostSchema);
