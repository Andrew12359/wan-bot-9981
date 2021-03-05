let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Last Update: 5 Mac 2021
Versi 5
`.trim(), m)
}
handler.help = ['update']
handler.tags = ['info']
handler.command = /^(update)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

