let handler = async m => m.reply(`
╭─「 List Member Premium 」
│ • (Wan) +60 16-449 2583
╰────

Sila tekan link ini untuk daftar premium: https://wa.me/60164492583?text=Nak+jadi+member+premium
`.trim()) // Tambah sendiri kalo mau
handler.help = ['listpremium']
handler.tags = ['info']
handler.command = /^(listpremium)$/i

module.exports = handler
