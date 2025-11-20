const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let checkEmpresa = db.fetch(`empresa_${message.author.id}`);
    if (!checkEmpresa) return message.reply("Você precisa de uma empresa para executar esse comando!");

    let timeout = 2592000000; // 30 dias
    let coletarEmpresa = db.fetch(`coletarEmpresa_${message.author.id}`);

    if (coletarEmpresa !== null && timeout - (Date.now() - coletarEmpresa) > 0) {
        let time = ms(timeout - (Date.now() - coletarEmpresa));
        return message.reply(`Espere **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s** para coletar novamente!`);
    } else {

        db.set(`coletarEmpresa_${message.author.id}`, Date.now());
        db.add(`xp_${message.author.id}`, 1);
        db.add(`cartão_${message.author.id}`, 40000);

        let embed = new Discord.MessageEmbed()
            .setTitle("Recompensa da Empresa")
            .setColor("RANDOM")
            .setDescription(`<@${message.author.id}> recebeu **FB$ 40.000**! Volte em **30 dias** para coletar novamente.`)
            .setTimestamp()
            .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }));

        message.channel.send({ embeds: [embed] });
    }
};

exports.help = {
    name: "!coletar-empresa"
};
