const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`🎵 Музыка теперь возобновлена`);
    }

    return [message.delete(), utils.timed_msg('⚠ Музыка не воспроизводится.', 5000)];
    
};

module.exports.help = {
    name: 'resume',
    aliases: []
};