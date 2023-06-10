var fs = require('fs')
const Discord = require("discord.js11");  
var chalk = require('chalk');

const tokens = fs.readFileSync('onlinertokens.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n'); 

var items = ['Minecraft', 'Rust', 'VRChat', 'reeeee', 'MORDHAU', 'Fortnite', 'Apex Legends', 'Escape from Tarkov', 'Rainbow Six Siege', 'Counter-Strike: Global Offense', 'Sinner: Sacrifice for Redemption', 'Minion Masters', 'King of the Hat', 'Bad North', 'Moonlighter', 'Frostpunk', 'Starbound', 'Masters of Anima', 'Celeste', 'Dead Cells', 'CrossCode', 'Omensight', 'Into the Breach', 'Battle Chasers: Nightwar', 'Red Faction Guerrilla Re-Mars-tered Edition', 'Spellforce 3', 'This is the Police 2', 'Hollow Knight', 'Subnautica', 'The Banner Saga 3', 'Pillars of Eternity II: Deadfire', 'This War of Mine', 'Last Day of June', 'Ticket to Ride', 'RollerCoaster Tycoon 2: Triple Thrill Pack', '140', 'Shadow Tactics: Blades of the Shogun', 'Pony Island', 'Lost Horizon', 'Metro: Last Light Redux', 'Unleash', 'Guacamelee! Super Turbo Championship Edition', 'Brutal Legend', 'Psychonauts', 'The End Is Nigh', 'Seasons After Fall', 'SOMA', 'Trine 2: Complete Story', 'Trine 3: The Artifacts of Power', 'Trine Enchanted Edition', 'Slime-San', 'The Inner World', 'Bridge Constructor', 'Bridge Constructor Medieval', 'Dead Age', 'Risk of Rain', "Wasteland 2: Director's Cut", 'The Metronomicon: Slay The Dance Floor', 'TowerFall Ascension + Expansion', 'Nidhogg', 'System Shock: Enhanced Edition', 'System Shock 2', "Oddworld:New 'n' Tasty!", 'Out of the Park Baseball 18', 'Hob', 'Destiny 2', 'Torchlight', 'Torchlight 2', 'INSIDE', 'LIMBO', "Monaco: What's Yours Is Mine", 'Tooth and Tail', 'Dandara', 'GoNNER', 'Kathy Rain', 'Kingdom: Classic', 'Kingdom: New Lands', 'Tormentor X Punisher', 'Chaos Reborn', 'Ashes of the Singularity: Escalation', 'Galactic Civilizations III', 'Super Meat Boy', 'Super Hexagon', 'de Blob 2', 'Darksiders II Deathinitive Edition', 'Darksiders Warmastered Edition', 'de Blob', 'Red Faction 1', 'Dungeon Defenders'];

process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {}); 
process.warn = () => {};

const bot = new Discord.Client({ 
    disableEveryone: true
});

class Bot {
    constructor(token) { 
        this.token = token;
    }
    online() {
        this.bot = new Discord.Client(); 
        this.bot.on('ready', () => {
            console.log(chalk.green(`[BİLGİ]`) + `|` + (chalk.blueBright ` Aktif Edildi `) + (chalk.redBright `%s`) + ` |` + (chalk.blueBright ` ID: `) + (chalk.magenta `%s`) + ` Zaman` + (chalk.yellow ` "%s"`), this.bot.user.tag, this.bot.user.id, new Date().toLocaleTimeString());
            this.bot.on("message", async message => {}) 
        });
        this.bot.on('ready', () => {
            this.bot.user.setPresence({ 
                game: {
                    name: items[Math.floor(Math.random() * items.length)], 
                    type: "PLAYING"
                }
            });
        });

        this.bot.login(this.token).catch(err => {});;
    }
}

process.title = ` kaje.dev | Toplam Üye: ${tokens.length}`; 


var i = 0;
var int = setInterval(() => {
    if (i >= tokens.length) return clearInterval(int); 
    new Bot(tokens[i++]).online(); 
}, 0);