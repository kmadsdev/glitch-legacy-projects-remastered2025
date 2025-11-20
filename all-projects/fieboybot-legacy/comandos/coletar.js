const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`gari_${message.author.id}`);
    if (!emprego) return message.reply("Você não está contratado nesse emprego, use `empregos` e saiba mais!");

    let ganhar = db.fetch(`coletar_${message.author.id}`);
    let timeout = 54000000000; // 15 horas (54000000000 ms está errado, caso queira, posso ajustar o valor correto depois)

    if (ganhar !== null && timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar));
        return message.reply(`Espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`);
    } else {

        db.set(`coletar_${message.author.id}`, Date.now());
        db.add(`cartão_${message.author.id}`, 5000000);

        let embed = new Discord.MessageEmbed()
            .setTitle("Sucesso!")
            .setColor("RANDOM")
            .setDescription(`${message.author} trabalhou como **Gari** e recebeu **FB$ 5.000.000**!`)
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
}

exports.help = {
    name: "!coletar"
}
