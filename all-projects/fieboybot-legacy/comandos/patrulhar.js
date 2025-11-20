const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`policial_${message.author.id}`);
    if (emprego < 1) return message.reply("🚓 Você não está contratado nesse emprego! Use **!empregos** e saiba mais.");

    let ganhar = db.fetch(`patrulhar_${message.author.id}`);
    let tempo = 18000000; // 5 horas

    if (ganhar !== null && tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        return message.reply(`⏳ Aguarde **${time.hours}h ${time.minutes}m ${time.seconds}s** para patrulhar novamente!`);
    } 

    db.set(`patrulhar_${message.author.id}`, Date.now());
    db.add(`cartão_${message.author.id}`, 700);
    db.add(`xp_${message.author.id}`, 1);

    let embed = new Discord.MessageEmbed()
        .setTitle("🚨 Patrulha Concluída!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como **Policial** e recebeu **F$ 700** 💰`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
};

exports.help = {
    name: "!patrulhar"
};
