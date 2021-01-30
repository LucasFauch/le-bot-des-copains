const Discord = require('discord.js');
const prefix = "*";
const ytdl = require('ytdl-core');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
client.once('ready', () => {
    console.log('Ready!');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(`${prefix}hihi`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Thalia.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}sertarien`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Ca-ne-me-sert-a-rien.wav');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}coupcoup`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Coup_coup_coup_de_théâtre.wav');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}coupdetheatre`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Coup-de-théâtre.wav');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}jecoute`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Jecoute.wav');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}lafrance`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/LaFrance.wav');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}bite`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Nils.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}dictature`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/UneDictature.wav');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}inattendu`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Cest_completement_inattendu.wav');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}colerenoire`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Je_suis_dans_une_colere_noire.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }

    } else if (message.content.startsWith(`${prefix}honteux`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Cest honteux.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}defoncer`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/On sest fait defoncer - Rene Malleville.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}quenchien`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/quenchien.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}macaille`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/macaille.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}caissecafe`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Caisse Cafe  - Sardoche Rage 4.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}cafard`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/cafard.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}damn`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/damn madame la ministre.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}stonks`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/STONKS.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}peuchere`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/peuchere.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}oof`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Roblox Death Sound - OOF  Sound Effect.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}fumez`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/mais-vous-fumez-monsieur.wav');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}indignite`) || message.content.startsWith(`${prefix}indignité`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Sarkozy  Quelle indignite.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}wejdene`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/surprisemf.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}ahin`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Ahin.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}connasse`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/mistermv-connasse.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}ooof`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Roblox death sound slow motion oof earrape-satured-bass bosted-loud.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}jambon`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Jambon.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}pate`) || message.content.startsWith(`${prefix}paté`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/paté.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}saucisse`) || message.content.startsWith(`${prefix}paté`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/Saucisse by Mr Connard.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}fabrie`) || message.content.startsWith(`${prefix}paté`)) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = await connection.play('./assets/100 ans ENSEIRB-MATMECA - Pierre FABRIE Directeur.mp3');
            dispatcher.on("finish",() => {
                message.member.voice.channel.leave();
            });
            return;
        } else {
            message.reply('Tu dois être dans un salon vocal pour jouer un son!');
        }
    } else if (message.content.startsWith(`${prefix}commands`)) {
        message.reply("Les commandes sont : hihi, sertarien, coupcoup, coupdetheatre, jecoute, lafrance, bite, dictature, inattendu, honteux, colerenoire, defoncer, quenchien, macaille, cafard, caissecafe, damn, stonks, peuchere, oof, ooof, fumez, indignité/indignite, ahin, wejdene, connasse, jambon, paté/pate, saucisse, fabrie");
    }
});