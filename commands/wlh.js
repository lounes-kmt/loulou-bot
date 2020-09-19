module.exports = {
	name: 'wlh',
	description: 'Wallah',
	execute(message, args) {
    message.channel.messages.fetch(args[0])
      .then(msg => reactWlh(msg))
      .then(message.delete())
	},
};

async function reactWlh(msg) {
  await msg.react('🇼');
  await msg.react('🅰️');
  await msg.react('🇱');
  await msg.react('🇦');
  await msg.react('🇭');
}
