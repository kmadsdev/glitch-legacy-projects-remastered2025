const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`carteiro_${message.author.id}`);
    if (!emprego || emprego < 1) return message.reply("Você não está contratado nesse emprego, use `empregos` e saiba mais!");

    let ganhar = db.fetch(`mercadoria_${message.author.id}`);
    let tempo = 16200000; // 4h e 30min

    if (ganhar !== null && tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        return message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`);
    }

    db.set(`mercadoria_${message.author.id}`, Date.now());
    db.add(`cartão_${message.author.id}`, 650);

    let embed = new Discord.MessageEmbed()
        .setTitle("📦 Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como **Carteiro** e ganhou **FB$ 650**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
}

exports.help = {
    name: "!mercadoria"
}
