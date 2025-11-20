const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const companies = {
    "loja-de-cosmeticos":    { arma: "uzi",       municao: "Muzi",          valor: 49000 },
    "restaurante":           { arma: "m1911",     municao: "Mm1911",        valor: 84000 },
    "streaming":             { arma: "remington", municao: "Mremington870", valor: 105000 },
    "material-de-constucao": { arma: "ak-47",     municao: "Mak-47",        valor: 119000 },
    "laboratorio":           { arma: "ar-15",     municao: "Mar-15",        valor: 126000 },
    "jogos":                 { arma: "fal",       municao: "Mfal",          valor: 133000 },
    "cervejaria":            { arma: "pkm",       municao: "Mpkm",          valor: 140000 },
    "academia":              { arma: "pkm",       municao: "Mpkm",          valor: 140000 },
};

exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply("Me informe o nome da empresa! (substitua espaços por `-`)");

    let tempo = 172800000; // 48h cooldown
    let roubar = await db.fetch(`roubar_${message.author.id}`);

    if (roubar !== null && tempo - (Date.now() - roubar) > 0) {
        let time = ms(tempo - (Date.now() - roubar));
        return message.reply(`Aguarde **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s** para roubar novamente!`);
    }

    const empresa = companies[args[0].toLowerCase()];
    if (!empresa) return message.reply("Empresa inválida!");

    let arma = await db.fetch(`${empresa.arma}_${message.author.id}`);
    let munição = await db.fetch(`${empresa.municao}_${message.author.id}`);

    if (!arma || arma < 1) return message.reply(`Você precisa de uma **${empresa.arma.toUpperCase()}** para executar esse comando!`);
    if (!munição || munição < 10) return message.reply("Você precisa de **Munição**! Compre usando `~comprar`");

    db.add(`money_${message.author.id}`, empresa.valor);
    db.subtract(`${empresa.municao}_${message.author.id}`, 10);

    const embed = new Discord.MessageEmbed()
        .setTitle("Assalto")
        .setColor("RANDOM")
        .setDescription(`${message.author} roubou **F$ ${empresa.valor.toLocaleString()}** de uma ${args[0].replace(/-/g, " ")}.`)
        .setTimestamp();

    message.channel.send(embed);
    db.set(`roubar_${message.author.id}`, Date.now());
};

exports.help = {
  name: "!roubar"
};
