const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem Ipsum Dolor Sit Amet',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed pulvinar proin gravida. Purus sit amet volutpat consequat mauris nunc congue nisi. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Tortor posuere ac ut consequat semper. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Vitae et leo duis ut diam. Eget nulla facilisi etiam dignissim diam quis. Id volutpat lacus laoreet non curabitur gravida. Mauris pharetra et ultrices neque ornare aenean euismod. Vitae et leo duis ut diam quam nulla porttitor massa. Aenean euismod elementum nisi quis eleifend quam.',
        user_id: 1
    },
    {
        title: 'Ac Felis Donec et Odio',
        post_content: 'Ac felis donec et odio pellentesque diam volutpat. At augue eget arcu dictum varius duis at consectetur. Quis eleifend quam adipiscing vitae proin sagittis nisl. Nunc sed velit dignissim sodales ut eu. Blandit libero volutpat sed cras ornare arcu dui vivamus. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Hac habitasse platea dictumst quisque sagittis purus. Sed velit dignissim sodales ut eu sem integer. Ut eu sem integer vitae justo eget magna fermentum iaculis. Semper eget duis at tellus at. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Odio facilisis mauris sit amet massa vitae tortor. Auctor eu augue ut lectus arcu. Pharetra massa massa ultricies mi. Est pellentesque elit ullamcorper dignissim cras. Semper quis lectus nulla at volutpat diam ut venenatis.',
        user_id: 2
    },
    {
        title: 'Risus Viverra Adipiscing at in Tellus Integer',
        post_content: 'Risus viverra adipiscing at in tellus integer. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Lacus sed turpis tincidunt id aliquet risus feugiat in. Et ultrices neque ornare aenean euismod elementum. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Id nibh tortor id aliquet. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Sapien pellentesque habitant morbi tristique senectus et netus. Morbi tincidunt ornare massa eget egestas purus. Ut consequat semper viverra nam libero justo laoreet sit. Gravida quis blandit turpis cursus in hac habitasse. Pellentesque massa placerat duis ultricies lacus sed. Nibh tellus molestie nunc non blandit massa. Erat nam at lectus urna. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Nunc lobortis mattis aliquam faucibus purus in massa. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
        user_id: 3
    },
    {
        title: 'Ultrices Eros in Cursus Turpis',
        post_content: 'Ultrices eros in cursus turpis. Dui nunc mattis enim ut tellus. Posuere urna nec tincidunt praesent semper feugiat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Commodo elit at imperdiet dui accumsan sit. Volutpat blandit aliquam etiam erat velit scelerisque. Ipsum consequat nisl vel pretium. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Eu volutpat odio facilisis mauris sit. Ultricies leo integer malesuada nunc vel. Nunc mi ipsum faucibus vitae aliquet. Lobortis mattis aliquam faucibus purus. Id cursus metus aliquam eleifend mi. Ut pharetra sit amet aliquam. Facilisis magna etiam tempor orci eu lobortis elementum. Faucibus et molestie ac feugiat sed. Aenean euismod elementum nisi quis eleifend quam adipiscing.',
        user_id: 4
    },
    {
        title: 'Eu Volutpat Odio Facilsis',
        post_content: 'Eu volutpat odio facilisis mauris sit amet. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Ipsum dolor sit amet consectetur adipiscing elit. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Semper auctor neque vitae tempus quam pellentesque nec. Elementum nisi quis eleifend quam. In hendrerit gravida rutrum quisque non. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Proin sed libero enim sed faucibus turpis in. Fermentum et sollicitudin ac orci phasellus egestas. Proin sagittis nisl rhoncus mattis rhoncus urna neque.',
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;