const {token} = require('../settiings/credentials.json');

module.exports = {

    ready : (bot) => {
        bot.login(token)
        bot.on('ready', () => {
            bot.user.setActivity('Zapy04 [HLP]', {type: 'WATCHING'});
            bot.user.setStatus('WATCHING');
            console.log('I am ready to play MUSICS!!');
        });
    }
    
};
