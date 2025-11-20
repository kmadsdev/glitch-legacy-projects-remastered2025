const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply("Quanto dinheiro eu devo depositar em sua conta?");

    let money = db.fetch(`money_${message.author.id}`) || 0;
    let cartao = db.fetch(`cartão_${message.author.id}`) || 0;

    // DEPÓSITO TOTAL
    if (args[0].toLowerCase() === "tudo") {
        if (money <= 0) return message.reply("Você não possui dinheiro para depositar!");

        db.add(`cartão_${message.author.id}`, money);
        db.subtract(`money_${message.author.id}`, money);
        db.add(`xp_${message.author.id}`, 1);

        let embed = new Discord.MessageEmbed()
            .setTitle("💳 Valor Depositado!")
            .setColor("RANDOM")
            .setDescription(`<@${message.author.id}> depositou **FB$ ${money}** em sua conta do cartão de crédito!`)
            .setTimestamp()
            .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

        return message.channel.send({ embeds: [embed] });
    }

    // VALOR ESPECÍFICO
    if (isNaN(args[0])) return message.reply("O valor informado não é um número!");
    if (Number(args[0]) <= 0) return message.reply("Você não pode depositar um valor menor ou igual a 0!");
    if (money < Number(args[0])) return message.reply("Você não tem o valor informado!");

    db.add(`cartão_${message.author.id}`, Number(args[0]));
    db.subtract(`money_${message.author.id}`, Number(args[0]));
    db.add(`xp_${message.author.id}`, 1);

    let embed = new Discord.MessageEmbed()
        .setTitle("💳 Valor Depositado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> depositou **FB$ ${args[0]}** em sua conta do cartão de crédito!`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
}

exports.help = {
    name: "!depositar"
}
