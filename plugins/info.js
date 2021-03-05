let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO ROBOT* ⚠️

Dibuat dengan javascript via NodeJs, Ffmpeg dan ImageMagick

Github: https://github.com/Adhwa9981/wan-bot-9981

Group: https://chat.whatsapp.com/KlNCngFzNbHKQsVS0FUrcu

Owner: https://wa.me/60164492583

Robot: https://wa.me/message/PPIKWG5ZXQKGH1
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

