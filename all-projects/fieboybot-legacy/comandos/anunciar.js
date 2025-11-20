const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms")

exports.run = async (bot, message, args) => {

    let checkEmpresa = db.fetch(`empresa_${message.author.id}`);
    if (!checkEmpresa) return message.reply("Você precisa de uma empresa pra executar esse comando!");

    let timeout = 43200000; // 12h
    let anunciar = db.fetch(`anunciar_${message.author.id}`);

    if (anunciar !== null && timeout - (Date.now() - anunciar) > 0) {
        let time = ms(timeout - (Date.now() - anunciar));
        return message.reply(`Espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para coletar novamente!`);
    } else {
        db.set(`anunciar_${message.author.id}`, Date.now());
        db.add(`xp_${message.author.id}`, 1);
        db.add(`cartão_${message.author.id}`, 2000);

        let embed = new Discord.MessageEmbed()
        .setTitle("Recompensa de Empresa")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> recebeu **FB$ 2,000**! Volte em **12 horas** para pegar novamente!`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }));

        message.channel.send(embed);
    }
}

exports.help = {
    name: "!anunciar"
}
