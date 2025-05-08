//========= alive command ===========

const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname}*

*👋 Hello 👉No name👈*

👋  𝐇𝐈, customer care service 𝐈❜𝐀𝐌 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖 👾

*╭─「 ᴅᴀᴛᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ 」*
*│*📅 *Date*: 08/05/2025
*│*⏰ *Time*: 19:40:49
*╰──────────●●►*

*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*
*│*👤 *User*: Dilshan Ashinsa 
*│*✒️ *Prefix*: [.]
*│*🧬 *Vertion*: 3.0.0
*│*🎈 *Platfrom*: Linux
*│*📡 *Host*: Replit
*│*📟 *Uptime*: 15 minutes, 6 seconds
*│*📂 *Memory*: 43.92MB / 64313MB
*╰──────────●●►*

 *㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙸𝙻𝚂𝙷𝙰𝙽  〽️Ｄ*
`
return await conn.sendMessage(from,{image: {url: "https://i.ibb.co/zgCFFCX/SulaMd.jpg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
