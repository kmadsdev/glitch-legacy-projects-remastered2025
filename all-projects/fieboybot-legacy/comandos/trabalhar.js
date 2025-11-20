const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let emprego = db.fetch(`frentista_${message.author.id}`);
    if (emprego < 1) return message.reply("⛽ Você não trabalha aqui! Para mais informações, consulte **!empregos**.");

    let ganhar = db.fetch(`abastecer_${message.author.id}`);
    let timeout = 7200000; // 2 horas

    if (ganhar !== null && timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar));
        return message.reply(`⏳ Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`);
    }

    db.set(`abastecer_${message.author.id}`, Date.now());
    db.add(`cartão_${message.author.id}`, 200);
    db.add(`xp_${message.author.id}`, 1);

    let embed = new Discord.MessageEmbed()
        .setTitle("⛽ Trabalho Concluído!")
        .setColor("GREEN")
        .setDescription(`${message.author} trabalhou como **Frentista** e ganhou **FB$ 200** 💰`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
};

exports.help = {
    name: "!trabalhar"
};
