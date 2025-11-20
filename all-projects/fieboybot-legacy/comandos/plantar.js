const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`fazendeiro_${message.author.id}`);
    if (emprego < 1) return message.reply("👨‍🌾 Você não está contratado nesse emprego! Use **!empregos** e saiba mais.");

    let ganhar = db.fetch(`plantar_${message.author.id}`);
    let timeout = 9000000; // 2.5 horas

    if (ganhar !== null && timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar));
        return message.reply(`⏳ Para plantar novamente, espere **${time.hours}h ${time.minutes}m ${time.seconds}s!**`);
    }

    db.set(`plantar_${message.author.id}`, Date.now());
    db.add(`cartão_${message.author.id}`, 300);
    db.add(`xp_${message.author.id}`, 1);

    let embed = new Discord.MessageEmbed()
        .setTitle("🌽 Trabalho Concluído!")
        .setColor("GREEN")
        .setDescription(`${message.author} trabalhou como **Fazendeiro** e ganhou **FB$ 300** 💰`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
};

exports.help = {
    name: "!plantar"
};
