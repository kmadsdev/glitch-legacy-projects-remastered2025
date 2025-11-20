const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`pizza_${message.author.id}`);
    if (emprego < 1) return message.reply("🍕 Você não está contratado nesse emprego! Use **!empregos** e saiba mais.");

    let ganhar = db.fetch(`entregar_${message.author.id}`);
    let tempo = 5400000; // 1h 30min

    if (ganhar !== null && tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        return message.reply(`⏳ Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`);
    }

    db.set(`entregar_${message.author.id}`, Date.now());
    db.add(`cartão_${message.author.id}`, 100);
    db.add(`xp_${message.author.id}`, 1);

    let embed = new Discord.MessageEmbed()
        .setTitle("🍕 Entrega concluída!")
        .setColor("GREEN")
        .setDescription(`${message.author} trabalhou como **Entregador de Pizza** e ganhou **F$ 100** 💰`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
};

exports.help = {
    name: "!entregar"
};
