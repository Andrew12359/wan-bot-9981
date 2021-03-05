let handler = async m => m.reply(`
Sila chat https://60164492583?text=Mahu+premium untuk menjadi member premium
`.trim()) // Tambah sendiri kalo mau
handler.help = ['daftarpremium']
handler.tags = ['info']
handler.command = /^(daftarpremium)$/i

handler.limit = true

module.exports = handler
