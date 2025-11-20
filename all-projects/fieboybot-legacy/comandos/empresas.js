const Discord = require("discord.js");

const empresas = [
    { nome: "Restaurante",            valor: 120000, ganhos: 12000, id: 100, comando: "!lucro restaurante" },
    { nome: "Loja de Cosméticos",     valor: 70000,  ganhos: 7000,  id: 200, comando: "!lucro loja-de-cosmeticos" },
    { nome: "Cervejaria",             valor: 200000, ganhos: 20000, id: 300, comando: "!lucro cervejaria" },
    { nome: "Academia",               valor: 200000, ganhos: 20000, id: 400, comando: "!lucro academia" },
    { nome: "Laboratório",            valor: 180000, ganhos: 18000, id: 500, comando: "!lucro laboratorio" },
    { nome: "Jogos",                  valor: 190000, ganhos: 19000, id: 600, comando: "!lucro jogos" },
    { nome: "Streaming",              valor: 150000, ganhos: 15000, id: 700, comando: "!lucro streaming" },
    { nome: "Material de Construção", valor: 170000, ganhos: 17000, id: 800, comando: "!lucro material-de-construcao" },
];

exports.run = async (bot, message, args) => {
    const user = message.author;

    const embedMenu = new Discord.MessageEmbed()
        .setTitle("Empresas")
        .setColor("RANDOM")
        .setDescription(`Seja Bem-vindo à **Lista de Empresas**\nVocê pode adquirir sua empresa aqui, quanto mais cara, mais ganhos você tem!
    Aperte em "1️⃣" para ver todas as empresas
    Aperte em "2️⃣" para ver os comandos da empresa
    ||Para comprar uma empresa, use \`'comprar (ID Do item)\`||`)
        .setFooter(`Comando executado por ${user.tag}`, user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

    const msg = await message.channel.send({ embeds: [embedMenu] });

    await msg.react("1️⃣");
    await msg.react("2️⃣");
    await msg.react("◀");

    const filter = (reaction, u) => ["1️⃣", "2️⃣", "◀"].includes(reaction.emoji.name) && u.id === user.id;
    const collector = msg.createReactionCollector({ filter, time: 60000 });

    collector.on("collect", reaction => {
        reaction.users.remove(user);

        if (reaction.emoji.name === "1️⃣") {
            const embedList = new Discord.MessageEmbed()
                .setTitle("Lista de Empresas")
                .setColor("RANDOM")
                .setFooter(`Comando executado por ${user.tag}`, user.displayAvatarURL({ dynamic: true }))
                .setTimestamp();
            empresas.forEach(e => {
                embedList.addField(e.nome, `Valor: **FB$ ${e.valor}**\nGanhos: **F$ ${e.ganhos}** a cada 7 Horas\nID: ${e.id}`);
            });
            msg.edit({ embeds: [embedList] });
        }
        if (reaction.emoji.name === "2️⃣") {
            const embedComandos = new Discord.MessageEmbed()
                .setTitle("Lista de Empresas | Comandos")
                .setColor("random")
                .setFooter(`Comando executado por ${user.tag}`, user.displayAvatarURL({ dynamic: true }))
                .setTimestamp();
            empresas.forEach(e => {
                embedComandos.addField(e.nome, `\`${e.comando}\``);
            });
            msg.edit({ embeds: [embedComandos] });
        }

        if (reaction.emoji.name === "◀") { msg.edit({ embeds: [embedMenu] }) }
    });
};

exports.help = { name: "!empresas" };
