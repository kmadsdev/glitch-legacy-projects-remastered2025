const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`médico_${message.author.id}`);
    if (!emprego) return message.reply("Você não está contratado nesse emprego, use `empregos` e saiba mais!");

    let ganhar = db.fetch(`consultar_${message.author.id}`);
    let tempo = 21600000; // 6h

    if (ganhar !== null && tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        return message.reply(`Aguarde **${time.hours}h ${time.minutes}m ${time.seconds}s** para executar esse comando novamente!`);
    } else {

        db.set(`consultar_${message.author.id}`, Date.now());
        db.add(`cartão_${message.author.id}`, 800);

        let embed = new Discord.MessageEmbed()
            .setTitle("Sucesso!")
            .setColor("RANDOM")
            .setDescription(`${message.author} trabalhou como **Médico** e ganhou **FB$ 800**!`)
            .setTimestamp()
            .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    }
}

exports.help = {
    name: "!consultar"
}
