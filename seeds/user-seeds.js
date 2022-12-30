const { createPromptModule } = require('inquirer');
const { User } = require('../models');

const userData = [
    {
        username: 'TomNook',
        github: 'TomNook',
        email: 'NookInc@gmail.com',
        password: 'P@ssw0rd1'
    },
    {
        username: 'VaultBoy',
        github: 'ValutBoy',
        email: 'Fallout@gmail.com',
        password: 'P@ssw0rd2'
    },
    {
        username: 'LaraCroft',
        github: 'LaraCroft',
        email: 'TombRaider@gmail.com',
        password: 'P@ssw0rd3'
    },
    {
        username: 'MasterChief',
        github: 'MasterChief',
        email: 'Halo@gmail.com',
        password: 'P@ssw0rd4'
    },
    {
        username: 'MercyHealer',
        github: 'MercyHealer',
        email: 'Overwatch@gmail.com',
        password: 'P@ssw0rd5'
    },
    {
        username: 'Agent47',
        github: 'Agent47',
        email: 'Agent47@gmail.com',
        password: 'P@ssw0rd6'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;