let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('Testing speed ⏳')
  let neww = performance.now()
  m.reply(neww - old + 'ms')
}
handler.help = ['ping']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
