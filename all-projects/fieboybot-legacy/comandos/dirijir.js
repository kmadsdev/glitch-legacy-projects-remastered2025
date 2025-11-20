const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`moto-taxi_${message.author.id}`);
    if (!emprego || emprego < 1) return message.reply("Você não está contratado nesse emprego, use `empregos` para saber mais!");

    let ganhar = db.fetch(`dirigir_${message.author.id}`);
    let timeout = 6300000; // 1 hora e 45 min

    if (ganhar !== null && timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar));
        return message.reply(`Para usar o comando novamente, espere **${time.hours}h ${time.minutes}m e ${time.seconds}s!**`);
    }

    db.set(`dirigir_${message.author.id}`, Date.now());
    db.add(`cartão_${message.author.id}`, 150);

    let embed = new Discord.MessageEmbed()
        .setTitle("🛵 Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como moto-táxi e recebeu **FB$ 150**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
}

exports.help = {
    name: "!dirigir"
}
