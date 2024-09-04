const fs = require('fs');
const chalk = require('chalk');

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "24105114159"],
global.ownername = process.env.OWNER_NAME || "𓆩𝐓𝐎𝐆𝐄𓆪 ✇ ◤✞𝐈𝐍𝐔𝐌𝐀𝐊𝐈",
global.ytname = "YT: kenzo3146"
global.socialm = "GitHub: toge012345"
global.location = "Africa"

global.botname = process.env.BOTNAME || "𝐓𝐎𝐆𝐄-𝐌𝐃-𝐕𝟑",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "𝐓𝐎𝐆𝐄-𝐌𝐃-𝐕𝟑",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "𓆩𝐓𝐎𝐆𝐄𓆪 ✇ ◤✞𝐈𝐍𝐔𝐌𝐀𝐊𝐈",
//console view/theme
global.themeemoji = '𓅃'
global.wm = "𝐓𝐎𝐆𝐄_𝐁𝐎𝐓 𝐈𝐧𝐜 ✨"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaiuD4s4IBhI0fzbv40Z'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '💫 *Here you go, sensei!* ',
    prem: '💫 *hello senpai, this feature is reserved for premium users only*',
    admin: '💫 *hello senpai, this feature is reserved for admins only*',
    botAdmin: '💫 *senpai, this feature can only be used when the bot is a group admin* ',
    owner: '💫 *hello senpai, this feature is reserved for the owner only*',
    group: '💫 *sensei, this feature is exclusively for groups*',
    private: '💫 *hello senpai, this feature is exclusively for private chats*',
    wait: '💫 *hello senpai, in process...* ',    
    error: '💫 *hello senpai, there seems to be an error!*',
}
module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"false",
}

global.thumb = fs.readFileSync('./lib/Assets/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
    
