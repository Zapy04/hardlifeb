const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Музыка не воспроизводится.', 5000)];
    
    if (!args[0]) return [message.delete(), message.channel.send(`Громкость **${queue.volume}%**`)];
    if (isNaN(args[0])) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Можно токо от 0 до 100%!`, `${config.prefix}volume <Громкость>`), 5000)];
    if (args[0] < 0 || args[0] > 100) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Можно токо от 0 до 100%!`, `${config.prefix}volume <Громкость>`), 5000)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`Громкость Изменина на **${queue.volume}%**`);
};

module.exports.help = {
    name: 'volume',
    aliases: ['vol']
};