const { Client } = require("discord.js-selfbot-v13");
const client = new Client({ checkUpdate: false });
const config = require("./Settings/config");
client.login(config.tokens[0])
const { loginAllAndClickButton, loginAllAndReactEmoji, loginAllAndSend, loginAllAndAddFriend, loginAllAndJoinServer, loginAllAndLeaveServer, distributeTokens, language, setLanguage, replaceAll, restart, wait, loginAllAndCancelFriend } = require("./Settings/functions");
const inquirer = require('inquirer');
const figlet = require('figlet');
figlet('Token Tools', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log("kaje.dev Token TOOL")
});
const langs = require("./Settings/langs");

async function start(client) {

const dil = await language();
const lang = langs[dil.toLowerCase() || config.defaultLanguage.toLowerCase()];

const choices = [
    {
        type: 'list',
        name: 'choice',
        message: lang.WELCOME,
        choices: [
            lang.CLICK_BUTTON,
            lang.REACT_TO_MESSAGE,
            lang.SEND_MESSAGE,
            lang.ADD_FRIEND,
            lang.CANCEL_FRIEND,
            lang.JOIN_SERVER,
            lang.LEAVE_SERVER,
            lang.MASS_DM,
            lang.LANGUAGE
        ],
        pageSize: 9
    }
];

const buttonClickerQuestions = [
    {
        type: 'input',
        name: 'channel_id',
        message: lang.CHANNEL_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.CHANNEL_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'message_id',
        message: lang.MESSAGE_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.MESSAGE_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'button_id',
        message: lang.BUTTON_ID,
        default: 1,
        validate: function (value) {
            if (Number(value) && value > 0) {
                return true;
            } else {
                return lang.BUTTON_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'time',
        message: lang.TIME,
        default: 1,
    },
    {
        type: 'input',
        name: 'many',
        message: lang.HOW_MANY_USERS,
        default: 0,
    }
];

const emojiClickerQuestions = [
    {
        type: 'input',
        name: 'channel_id',
        message: lang.CHANNEL_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.CHANNEL_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'message_id',
        message: lang.MESSAGE_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.MESSAGE_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'emoji',
        message: lang.EMOJI,
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return lang.EMOJI_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'time',
        message: lang.TIME,
        default: 1,
    },
    {
        type: 'input',
        name: 'many',
        message: lang.HOW_MANY_USERS,
        default: 0,
    }
];

const sendMessageQuestions = [
    {
        type: 'input',
        name: 'channel_id',
        message: lang.USER_OR_CHANNEL_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.USER_OR_CHANNEL_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'message',
        message: lang.MESSAGE,
        validate: function (value) {
            if (String(value) && value.length) {
                return true;
            } else {
                return lang.MESSAGE_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'time',
        message: lang.TIME,
        default: 1,
    },
    {
        type: 'input',
        name: 'many',
        message: lang.HOW_MANY_USERS,
        default: 0,
    },
    {
        type: 'input',
        name: 'repeat',
        message: lang.REPEAT,
        default: 1,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.REPEAT_ERROR;
            }
        }
    }
];

const addFriendQuestions = [
    {
        type: 'input',
        name: 'user_id',
        message: lang.USER_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.USER_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'time',
        message: lang.TIME,
        default: 5,
    },
    {
        type: 'input',
        name: 'many',
        message: lang.HOW_MANY_USERS,
        default: 0,
    }
];

const cancelFriendQuestions = [
    {
        type: 'input',
        name: 'user_id',
        message: lang.USER_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.USER_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'time',
        message: lang.TIME,
        default: 5,
    },
    {
        type: 'input',
        name: 'many',
        message: lang.HOW_MANY_USERS,
        default: 0,
    }
];

const joinServerQuestions = [
    {
        type: 'input',
        name: 'invite',
        message: lang.INVITE,
        validate: function (value) {
            if (String(value) && value.length) {
                return true;
            } else {
                return lang.INVITE_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'time',
        message: lang.TIME,
        default: 10,
    },
    {
        type: 'input',
        name: 'many',
        message: lang.HOW_MANY_USERS,
        default: 0,
    }
];

const leaveServerQuestions = [
    {
        type: 'input',
        name: 'guild_id',
        message: lang.GUILD_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.GUILD_ID_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'time',
        message: lang.TIME,
        default: 10,
    },
    {
        type: 'input',
        name: 'many',
        message: lang.HOW_MANY_USERS,
        default: 0,
    }
];

const massDMQuestions = [
    {
        type: 'input',
        name: 'guild_id',
        message: lang.GUILD_ID,
        validate: function (value) {
            if (Number(value)) {
                return true;
            } else {
                return lang.MESSAGE_ERROR;
            }
        }
    },
    {
        type: 'input',
        name: 'time',
        message: lang.TIME,
        default: 10,
    },
    {
        type: 'input',
        name: 'many',
        message: lang.HOW_MANY_USERS,
        default: 0,
    }
];

const languageQuestions = [
    {
        type: 'list',
        name: 'language',
        message: lang.LANGUAGE_MESSAGE,
        choices: [
            'English',
            'Turkish (Türkçe)',
            'French (Français)',
        ]
    }
];

inquirer.prompt(choices).then(async (answers) => {
    
    const choice = answers.choice;

    if (choice === lang.CLICK_BUTTON) {

        inquirer.prompt(buttonClickerQuestions).then(async (answers) => {
            
            const { channel_id, message_id, button_id, time, many } = answers;

            await loginAllAndClickButton(channel_id, message_id, button_id, time, many);

        });

    }

    if (choice === lang.REACT_TO_MESSAGE) {

        inquirer.prompt(emojiClickerQuestions).then(async (answers) => {
            
            const { channel_id, message_id, emoji, time, many } = answers;

            await loginAllAndReactEmoji(channel_id, message_id, emoji, time, many);

        });

    }

    if (choice === lang.SEND_MESSAGE) {
            
        inquirer.prompt(sendMessageQuestions).then(async (answers) => {
                
            const { channel_id, message, time, many, repeat } = answers;
    
            await loginAllAndSend(channel_id, message, time, many, repeat);
    
        });
    
    }

    if (choice === lang.ADD_FRIEND) {

        inquirer.prompt(addFriendQuestions).then(async (answers) => {
            
            const { user_id, time, many } = answers;

            await loginAllAndAddFriend(user_id, time, many);

        });

    }

    if (choice === lang.CANCEL_FRIEND) {

        inquirer.prompt(cancelFriendQuestions).then(async (answers) => {
            
            const { user_id, time, many } = answers;

            await loginAllAndCancelFriend(user_id, time, many);

        });

    }

    if (choice === lang.JOIN_SERVER) {

        inquirer.prompt(joinServerQuestions).then(async (answers) => {
            
            const { invite, time, many } = answers;

            await loginAllAndJoinServer(invite, time, many);

        });

    }

    if (choice === lang.LEAVE_SERVER) {

        inquirer.prompt(leaveServerQuestions).then(async (answers) => {
            
            const { guild_id, time, many } = answers;

            await loginAllAndLeaveServer(guild_id, time, many);

        });

    }

    if (choice === lang.MASS_DM) {

        inquirer.prompt(massDMQuestions).then(async(answers) => {

            let guild = await client.guilds.fetch(answers.guild_id);
            if(!guild) return console.log(lang.SERVER_NOT_FOUND)
        
            let fetchedMembers = await guild.members.fetch()
            let users = fetchedMembers.map(m => m.user).filter(u => !u.bot && u.id !== client.user.id)
            console.log(await replaceAll(lang.USERS_FOUND, { users: users.length }))
            if(!users.length > 0) return console.log("No users found.")
        
            await distributeTokens(users, answers.time, answers.many);
        
        })

    }

    if (choice === lang.LANGUAGE) {

        inquirer.prompt(languageQuestions).then(async (answers) => {
            
            let { language } = answers;
            
            switch(language) {
                case 'English':
                    language = 'en';
                    break;
                case 'Turkish (Türkçe)':
                    language = 'tr';
                    break;
                case 'French (Français)':
                    language = 'fr';
                    break;
                default:
                    language = 'en';
                    break;
            }

            await setLanguage(language);
            await wait(2000);
            await restart();

        });

    }

});
}

client.on("ready", async() => {

await start(client);

});