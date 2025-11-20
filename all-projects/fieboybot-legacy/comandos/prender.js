const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`advogado_${message.author.id}`);
    if (emprego < 1) return message.reply("⚖ Você não está contratado nesse emprego! Use **!empregos** e saiba mais.");

    let ganhar = db.fetch(`prender_${message.author.id}`);
    let tempo = 4680000; // 1h 18min

    if (ganhar !== null && tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        return message.reply(`⏳ Aguarde **${time.hours}h ${time.minutes}m ${time.seconds}s** para executar esse comando novamente!`);
    }

    db.set(`prender_${message.author.id}`, Date.now());
    db.add(`cartão_${message.author.id}`, 750);
    db.add(`xp_${message.author.id}`, 1);

    let embed = new Discord.MessageEmbed()
        .setTitle("📜 Caso resolvido!")
        .setColor("BLUE")
        .setDescription(`${message.author} trabalhou como **Advogado** e ganhou **FB$ 750** 💼💰`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
};

exports.help = {
    name: "!prender"
};
