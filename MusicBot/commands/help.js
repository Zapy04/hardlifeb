const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`Помощь`)
        .addField('Музыка')
        .addField(`${prefix}play <Название Музыки Либо Сыллка>`, 'Plays musics!')
        .addField(`${prefix}search <Название Музыки>`, 'Search for top 10 results of musics on youtube')
        .addField(`${prefix}skip`, 'Скипнуть песню (3 голосование нужно если у вас нет Прав)')
        .addField(`${prefix}volume [Громкость]`, 'Меняет Громкость песни')
        .addField(`${prefix}pause`, 'Преостанавливает Музыку')
        .addField(`${prefix}resume`,'Возобновление Музыку')
        .addField(`${prefix}stop`, 'Останавливает Музыку и отключаеться от Голосового чата')
        .addField(`${prefix}reload <Команда>`, 'Перезагружает указуную команду');

    message.channel.send(embed);

};

module.exports.help = {
    name: 'help',
    aliases: []
};