const Post = require('./models/post.model');

const loadTestData = async () => {
    const data = [];

    try {
        let counter = await Post.countDocuments();
        if(counter === 0){
            console.log('No posts. Loading data...');
            await Post.create(data);
            console.log('Test data has been successfully loaded');
        }
    }   catch (err){
        console.log('Coulnd\'t load test data', err);
    }
};

module.exports = loadTestData;