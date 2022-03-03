const { MessageType} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")
const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
const setting = JSON.parse(fs.readFileSync('./control.json'))
const prefix = setting.prefix
const enter = '\n'
const background = 'https://telegra.ph/file/8edef79b495d60fc6c8b7.jpg'
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
module.exports = welcome = async (deff, anu) => {
mdata = await deff.groupMetadata(anu.jid)
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
const mediaxxaaa = await deff.prepareMessage(id, kma, MessageType.location, {thumbnail: kma})
mhan = mediaxxaaa.message["ephemeralMessage"] ? mediaxxaaa.message.ephemeralMessage : mediaxxaaa
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
                memeg = mdata.participants.length
            	 num = anu.participants[0]
                let v = deff.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                const jamnyy = moment.tz('Asia/Jakarta').format('HH:mm:ss')
	           const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
	           const isWelcome = welkom.includes(anu.jid)
	           if (!isWelcome) return
		      try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await deff.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await deff.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
        if (anu.action == "add" && !num.includes(deff.user.jid)) {
	   let v = deff.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        let p2 = await deff.getStatus(num)
        let p3 = `${p2? `${p2.status}` : '-'}`
        try {
        pp_user = await deff.getProfilePicture(num);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
        teks = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 WELCOME 」* 
│ *Terimakasih Sudah*
│ *Mau join*
╰┬────────────┈ ⳹
┌┤◦➛ *Nama :* 
││◦➛ *Asal :* 
││◦➛ *Gender :* 
││◦➛ *Status :* 
││◦➛ *Kelengkapan Ortu :* 
│╰────────────┈ ⳹
│ *Untuk menggunakan bot ini*
│ *Cukup ketik #menu*
│ *Kalo gapaham tanya member lain* 
├────────────────
│ Jangan lupa isi intro:)
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
        `
        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=${background}`)
        let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "Welcome 👋"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(mdata.id, `${teks}`, `${mdata.subject}`,buff, gakloo, {contextInfo: { mentionedJid: [num]}})
								      
      }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
  if (anu.action == "remove" && !num.includes(deff.user.jid)) {
        let w = deff.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
        pp_user = await deff.getProfilePicture(num);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
        out = `
╭─❒ 
│➪𝙳𝚒𝚊 𝚘𝚞𝚝 𝚔𝚎𝚗𝚊𝚙𝚊? 
│➪𝚂𝚒𝚊𝚙𝚊 𝚢𝚊𝚗𝚐 𝚋𝚒𝚔𝚒𝚗 𝚗𝚐𝚊𝚖𝚋𝚎𝚔? 
╰─❒
        `
        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=${background}`)
        let gaklooo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "Goodbye 🤙"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(mdata.id, `${out}`, `${mdata.subject}`, buff, gaklooo, {contextInfo: { mentionedJid: [num]}})
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;deff;;;\nFN:deff\nitem1.TEL;waid=${setting.NomorOwner}:${setting.NomorOwner}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
var thu = await deff.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
deff.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('😍😍😍'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;deff;;;\nFN:deff\nitem1.TEL;waid=${setting.NomorOwner}:${setting.NomorOwner}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
thu = await deff.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
deff.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|😭😭😭|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
            }
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
