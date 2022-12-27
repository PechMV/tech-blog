const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: 'Awesome!'
    },
    {
        user_id: 1, 
        post_id: 4,
        comment_text: 'Wow!'
    },
    {
        user_id: 2,
        post_id: 1, 
        comment_text: 'Nice!'
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: 'This is great'
    },
    {
        user_id: 3,
        post_id: 4, 
        comment_text: 'Recommend'
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: 'Woop woop!'
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: 'Dope!'
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: 'This is useful'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;