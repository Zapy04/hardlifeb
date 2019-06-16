const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return utils.timed_msg(utils.no_perm(`${message.author}, У вас недостаточно прав на выполнение данной команды!`), 5000)

    let command = args[0];
    if (!command) return utils.timed_msg(utils.cmd_fail('Введите команду для перезагрузки!', `${config.prefix}reload <команда>`), 5000)

    let response = await bot.unloadCommand(command);
    if (response) return [message.delete(), utils.timed_msg(response, 5000)];

    response = bot.loadCommand(command);
    if (response) return [message.delete(), utils.timed_msg(response, 5000)];

    return [message.delete(), utils.timed_msg(`Команда ${command} успешно перезагружен!`, 5000)];
};

module.exports.help = {
    name: 'reload',
    aliases: []
};