const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {

    const donoID = "763398072587386912"; // ID do autorizado
    if (message.author.id !== donoID) 
        return message.reply("❌ Esse comando só pode ser utilizado por pessoas autorizadas!");

    if (!args[0]) return message.reply("💸 Você não informou nenhum valor!");
    if (isNaN(args[0])) return message.reply("❌ O valor informado não é um número!");

    let user = message.mentions.users.first() || message.author;
    let valor = parseInt(args[0]);

    db.add(`money_${user.id}`, valor);

    const embed = new Discord.MessageEmbed()
        .setTitle("💰 Adição de Saldo!")
        .setAuthor(`${user.username} recebeu saldo!`, user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> deu **F$ ${valor}** para ${user}!`)
        .setTimestamp();

    message.channel.send({ embeds: [embed] });
};

exports.help = {
    name: "!give"
};
