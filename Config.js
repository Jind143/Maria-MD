const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "923101699985"],
global.ownername = process.env.OWNER_NAME || "💙𓆩‎✘☠︎𓆪_✰",
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Jind143"
global.location = "Pakistan"

global.botname = process.env.BOTNAME || "HS-𝐌𝐃",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎✘☠︎✘𓆪_✰",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "💙𓆩‎✘☠︎✘𓆪_✰",
//console view/theme
global.themeemoji = '🧩'
global.wm = "HS botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = True //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story


//reply messages
global.mess = {
    done: '🍭 *Here you go, Janab!* ',
    prem: '🍭 *My Dear, this feature is reserved for premium users only*',
    admin: '🍭 *My Deat, this feature is reserved for admins only*',
    botAdmin: '🍭 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *My D, this feature is reserved for the owner only*',
    group: '🍭 *Sweetheart, this feature is exclusively for groups*',
    private: '🍭 *My love, this feature is exclusively for private chats*',
    wait: '🍭 *Darling, in process...* ',    
    error: '🍭 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
