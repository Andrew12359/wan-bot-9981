let handler = async m => m.reply(`
╭─「 Derma 」
│ • DiGi: +60 16-449 2583
╰────
╭─「 Hubungi 」
│ • Owner: https://wa.me/60164492583
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['derma']
handler.tags = ['info']
handler.command = /^(derma)$/i

module.exports = handler
