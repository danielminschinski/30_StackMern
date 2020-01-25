const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const { Schema } = mongoose;

const PostSchema = new Schema({
  id: { type: 'String', required: true },
  title: { type: 'String', required: true },
  author: { type: 'String', required: true },
  content: { type: 'String', required: true },
  rating: { type: 'Number', required: true },
});

PostSchema.plugin(random);
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;