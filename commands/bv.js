module.exports = {
	name: 'bv',
	description: 'Bien vu!',
	execute(message, args) {
    message.channel.fetchMessage(args[0])
      .then(msg => reactBV(msg))
      .then(message.delete())
	},
};

async function reactBV(msg) {
  await msg.react('🇧')
  await msg.react('🇮')
  await msg.react('🇪')
  await msg.react('🇳')
  await msg.react('▪️')
  await msg.react('🇻')
  await msg.react('🇺')
}
