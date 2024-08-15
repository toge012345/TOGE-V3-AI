const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getAggregateVotesInPollMessage,getContentType, delay, decodeJid } = require('@whiskeysockets/baileys')
const { SendGroupInviteMessageToUser } = require("@queenanya/invite")
const Config = require("./Config")
const os = require('os')
const fs = require('fs')
const mathjs = require('mathjs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const chalk = require('chalk')
    const dictionary = require('word-definition');
const wikipedia = require('wikipedia');
const npt = require("node-periodic-table");
const pTable = require("ptable"); 
const mver = require('./package.json').version
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./Media/lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./Media/lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./Media/lib/myfunc')
let afk = require("./Media/lib/afk");
const { download } = require('aptoide-scraper');
const { fetchBuffer, buffergif } = require("./Media/lib/myfunc2")
//bug database
const { toge1 } = require('./virtex/toge1')
const { toge2 } = require('./virtex/toge2')
const { toge3 } = require('./virtex/toge3')
const { toge4 } = require('./virtex/toge4')
const { toge5 } = require('./virtex/toge5')
const { toge6 } = require('./virtex/toge6')
const { toge7 } = require('./virtex/toge7')
const { toge8 } = require('./virtex/toge8')
const { toge9 } = require('./virtex/toge9')
const { toge10 } = require('./virtex/toge10')
const wkwk = fs.readFileSync(`./virtex/x.mp3`)
const xsteek = fs.readFileSync(`./virtex/x.webp`)
const o = fs.readFileSync(`./virtex/o.jpg`)
/////log
 global.modnumber = '24105114159' 
//Media/database
let ntilinkall =JSON.parse(fs.readFileSync('./Media/database/antilink.json'));
// let autoblck =JSON.parse(fs.readFileSync('./Media/database/autoblock.json'));
const isnsfw = JSON.parse(fs.readFileSync('./Media/database/nsfw.json'));

let _afk = JSON.parse(fs.readFileSync('./Media/database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./Media/database/total-hit-user.json'))

//time
const replay = (teks) => {
            Maria.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const Ayuxxdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var Ayushytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var Ayushytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var Ayushytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var Ayushytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var Ayushytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var Ayushytimewisher = `Good Morning 🌄`
 } 
module.exports = Maria = async (Maria, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (
    m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        
        const prefix = global.prefa || "."
        const isCmd = body.startsWith(prefix)
        if (!isCmd || !body.startsWith(prefix)) return;
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Maria.decodeJid(Maria.user.id)
        const itsMe = m.sender == botNumber ? true : false
        
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Maria.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [botNumber,...global.ownernumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
   //   const AutoBlock = m.isGroup ? autoblck.includes(from) : true;
      const isNsfw = m.isGroup ? isnsfw.includes(from) : false;
      const AntiNsfw = m.isGroup ? isnsfw.includes(from) : false
 /////
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

	//random
	    // Function to filter JPG and PNG files from a directory
const getRandomImage = (directory) => {
  const files = fs.readdirSync(directory)
    .filter(file => {
      const filePath = path.join(directory, file);
      return fs.statSync(filePath).isFile() && (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));
    });

  if (files.length === 0) return null;

  const randomFile = files[Math.floor(Math.random() * files.length)];
  const randomFilePath = path.join(directory, randomFile);

  if (fs.existsSync(randomFilePath)) {
    return randomFilePath;
  } else {
    console.log(`Selected file ${randomFile} does not exist.`);
    return null;
  }
};

const imageDirectory = './Media/Theme-logo';
  const randomImage = getRandomImage(imageDirectory);

//group chat msg by Ayush
const reply = (teks) => {
Maria.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "𝐓𝐎𝐆𝐄-𝐌𝐃-𝐕𝟑.",
newsletterJid: "1203632993333611780@newsletter",
},
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

//////////

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}



async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enter your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const mariayresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'toge012345',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            mariayresult.push(result)
        }
    resolve(mariayresult)
    })
}

        if (!Maria.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            Maria.readMessages([m.key])
        }
        if (global.autoTyping) {

        Maria.sendPresenceUpdate('composing', from)


        }

        if (global.autoRecording) {

        Maria.sendPresenceUpdate('recording', from)

        }

        
        //bot number online status, available=online, unavailable=offline
        Maria.sendPresenceUpdate('unavailable', from)
        
        if (global.autorecordtype) {
        let Ayushrecordin = ['recording','composing']

        let Ayushrecordinfinal = Ayushrecordin[Math.floor(Math.random() * Ayushrecordin.length)]

        Maria.sendPresenceUpdate(Ayushrecordinfinal, from)

        }
        
        if (autobio) {
            Maria.updateProfileStatus(`Hey, future leaders! 🌟 TOGE-MD-V3 is here to inspire and lead, thanks to  toge012345. 🚀 ${runtime(process.uptime())} `).catch(_ => _)
        }
        if (m.sender.startsWith('212') && global.anti212 === true) {
            return Maria.updateBlockStatus(m.sender, 'block')
        }


	
   //============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return Maria.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
	
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
          
    console.log(chalk.redBright(`\n\n🌟 Group Chat 🌟`));
    console.log(chalk.black(), '\n' + chalk.magenta('=> 📩 Sender:'), chalk.green(pushname), chalk.yellow(m.sender), '\n' + chalk.blueBright('=> 💬 Message:'), chalk.green(budy || m.mtype));
    console.log(chalk.blueBright('=> ⏰️Time:'), chalk.green(new Date));
    console.log(chalk.blueBright('=> 🚀 Group:'), chalk.green(groupName));
} else {
    console.log(chalk.redBright(`\n\n🔒 Private Chat 🔒`));
    console.log(chalk.black(), '\n' + chalk.magenta('=> 📩 Sender:'), chalk.green(pushname), chalk.yellow(budy || m.mtype), '\n' + chalk.blueBright('=> 💬 Message:'), chalk.green(budy || m.mtype));
    console.log(chalk.blueBright('=> ⏰️Time:'), chalk.green(new Date));
    
}
        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./Media/database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./Media/database/total-hit-user.json'))[0].hit_cmd
        }
        const photooxy = require('./Media/lib/photooxy')
        
        

        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./Media/database/afk-user.json', JSON.stringify(_afk))
                Maria.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        
/*------ Not allowing  212 and 210 country codes to use bot in DM ---------- */

  const messSenderMain = m.sender;
  const messForm = m.chat;
  if ( !m.isGroup ){
    if (messForm.startsWith("212") || messForm.startsWith("210") ){
      return;
    }
  }
        
        
        ///Auto Block 
      if (Config.AUTO_BLOCK == 'true' && m.chat.endsWith("@s.whatsapp.net")) {
            return Maria.updateBlockStatus(m.sender, 'block')
        }
        
     
     // anti bot
        if (Config.ANTI_BOT == 'true' && m.isBaileys) {
    if (!isBotAdmins) {
     m.reply("\`\`\`🤖 Bot Detected!!\`\`\`\n_but I'm not an admin_");
      return;
    }

   m.reply(`\`\`\`🤖 Bot Detected!!\`\`\`\n\n_✅ Kicked *@${m.sender.split("@")[0]}*_`, { mentions: [m.sender] });
   Maria.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
   m.deleteMsg(m.key);
    return;
  }

    
    
 ///antilink 
 if (AntiLinkAll)
               if (budy.match('chat.whatsapp.com') && budy.match('https'))   
   {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nyou are a group admin thats why i wont kick you, but remember from next time`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
        await Maria.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Maria.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Maria.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}


 const verification = async () => {
  try {
    const group = await Maria.groupMetadata('120363292399307214@g.us');
    const participants = group.participants.map(i => i.id);
    if (participants.includes(botNumber) && participants.includes(ownernumber + "@s.whatsapp.net")) {
      console.log(chalk.blueBright('=>Verify:'), chalk.green('Available in the Group ✅️'));
return true;
    } else {
      console.log(chalk.blueBright('=>Verify:'), chalk.green('Not available  in the Group❌️'));
return false;
    }
  } catch (error) {
    return false;
  }
};

const verificationBot = await verification();

if (!verificationBot) {
m.reply(`⛩️ *❯─「 TOGE-MD-V3 」─❮* ⛩️\n
Join our support group to interact with TOGE-MD-V3 🌟 \n\n https://chat.whatsapp.com/JQ4s2pJuBReE7YL9wKJPHo`);
return;
}

//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return Maria.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================

	    //total features by xeon sir
const mariafeature = () =>{
            var mytext = fs.readFileSync("./TOGE-MD-V3.js").toString()
   
