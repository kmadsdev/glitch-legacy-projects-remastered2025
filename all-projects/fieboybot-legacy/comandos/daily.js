const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let timeout = 86400000; // 24h
    let amount = 100;
    let daily = db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        return message.reply(`Você já coletou sua recompensa diária! Colete novamente em **${time.hours}h ${time.minutes}m ${time.seconds}s**!`);
    } else {

        db.set(`daily_${message.author.id}`, Date.now());
        db.add(`xp_${message.author.id}`, 1);
        db.add(`money_${message.author.id}`, amount);

        let embed = new Discord.MessageEmbed()
            .setTitle("Daily!")
            .setColor("RANDOM")
            .setDescription(`<@${message.author.id}> coletou **FB$ ${amount}** com sucesso! Confira seu saldo!
            
💎 Quer mais FB$ e ostentar com seus amigos?  
Entre no servidor de suporte: **https://discord.gg/bqaDx68VYR**`)
            .setTimestamp()
            .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    }
}

exports.help = {
    name: "!daily"
}
