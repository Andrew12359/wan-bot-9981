let handler = async (m, { conn }) => {
  let txt = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  conn.reply(m.chat, 'List Groups:\n' + txt, m)
}
handler.help = ['listgroup']
handler.tags = ['info']
handler.command = /^(listgroup)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

