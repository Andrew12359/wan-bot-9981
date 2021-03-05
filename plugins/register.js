const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah daftar\nCara daftar semula: ${usedPrefix}unreg <SN|YOUR NUMBER>`
  if (!Reg.test(text)) throw `Format salah\nSila taip dengan betul bodoh`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong bodoh'
  if (!age) throw 'Umur tidak boleh kosong bodoh'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Pendaftaran berjaya ✓

           ╔───────────────────┐
           │ ABOUT YOU WITH ROBOT │
           └───────────────────╝
           
╭⋆⃟⊱๑⋆⃟⊱๑⋆⃟⊱❉ [ *INFO* ] ❉๑⋆⃟⊱๑๑⋆⃟╮
│ ➢ Nama: ${name}
│ ➢ Umur: ${age}Tahun
│ ➢ SN: ${sn}
│ ➢ Anda wajib simpan SN itu
╰━⋆⃟⊱๑⋆⃟⊱๑ ⋆⃟⊱๑⋆⃟⊱๑⋆⃟⊱๑⋆⃟⊱๑๑⋆⃟╯
`.trim())
}
handler.help = ['daftar'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

