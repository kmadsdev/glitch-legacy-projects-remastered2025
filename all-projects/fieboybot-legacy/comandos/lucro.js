const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

const empresas = [
    { id: "restaurante", nome: "Restaurante", lucro: 12000, dbKey: "restaurante" },
    { id: "loja-de-cosmeticos", nome: "Loja de Cosméticos", lucro: 7000, dbKey: "cosméticos" },
    { id: "cervejaria", nome: "Cervejaria", lucro: 20000, dbKey: "cervejaria" },
    { id: "academia", nome: "Academia", lucro: 20000, dbKey: "academia" },
    { id: "laboratorio", nome: "Laboratório", lucro: 18000, dbKey: "laboratório" },
    { id: "jogos", nome: "Desenvolvedora de Jogos", lucro: 19000, dbKey: "jogos" },
    { id: "streaming", nome: "Empresa de Streaming", lucro: 15000, dbKey: "streaming" },
    { id: "material-de-construcao", nome: "Material de Construção", lucro: 17000, dbKey: "construção" },
];

exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply("Parece que eu não encontrei sua empresa, lembre-se de usar '-' em vez de espaços.");

    const empresa = empresas.find(e => e.id === args[0].toLowerCase());
    if (!empresa) return message.reply("Empresa inválida!");

    const timeout = 25200000; // 7 hours
    const last = await db.fetch(`lucro_${message.author.id}`);

    if (last && timeout - (Date.now() - last) > 0) {
        const time = ms(timeout - (Date.now() - last));
        return message.reply(`Utilize esse comando novamente em **${time.hours}h ${time.minutes}m e ${time.seconds}s!**`);
    }

    const possuiEmpresa = await db.fetch(`${empresa.dbKey}_${message.author.id}`);
    if (!possuiEmpresa || possuiEmpresa < 1) return message.reply(`Você precisa de uma ${empresa.nome} para executar esse comando!`);

    db.add(`cartão_${message.author.id}`, empresa.lucro);
    db.set(`lucro_${message.author.id}`, Date.now());

    const embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ ${empresa.lucro.toLocaleString()}** por causa de sua empresa!`)
        .setTimestamp();

    message.channel.send({ embeds: [embed] });
};

exports.help = { name: "!lucro" };
