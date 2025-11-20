const Discord = require("discord.js");
const db = require("quick.db");

const items = {
    empresas: {
        "100": { nome: "Restaurante", preco: 120000, unlock: ["lucro restaurante"] },
        "200": { nome: "Loja de Cosméticos", preco: 70000, unlock: ["lucro loja-de-cosmeticos"] },
        "300": { nome: "Cervejaria", preco: 200000, unlock: ["lucro cervejaria"] },
        "400": { nome: "Academia", preco: 200000, unlock: ["lucro academia"] },
        "500": { nome: "Laboratório", preco: 180000, unlock: ["lucro laboratorio"] },
        "600": { nome: "Desenvolvedora de Jogos", preco: 190000, unlock: ["lucro jogos"] },
        "700": { nome: "Streaming", preco: 150000, unlock: ["lucro streaming"] },
        "800": { nome: "Material de Construção", preco: 170000, unlock: ["lucro material-de-construcao"] }
    },
    armas: {
        "900": { nome: "UZI", preco: 12000, unlock: ["roubar loja-de-cosmeticos"] },
        "1000": { nome: "M1911", preco: 24000, unlock: ["roubar restaurante"] },
        "1100": { nome: "Remington 870", preco: 48000, unlock: ["roubar streaming"] },
        "1200": { nome: "AK-47", preco: 96000, unlock: ["roubar material-de-construcao"] },
        "1300": { nome: "AR-15", preco: 150000, unlock: ["roubar laboratorio"] },
        "1400": { nome: "FAL", preco: 200000, unlock: ["roubar jogos"] },
        "1500": { nome: "PKM", preco: 210000, unlock: ["roubar cervejaria", "roubar academia"] }
    },
    municao: {
        "1600": { nome: "UZI", preco: 1200, quantidade: 50 },
        "1700": { nome: "M1911", preco: 2400, quantidade: 50 },
        "1800": { nome: "Remington 870", preco: 4800, quantidade: 50 },
        "1900": { nome: "AK-47", preco: 9600, quantidade: 50 },
        "2000": { nome: "AR-15", preco: 19200, quantidade: 50 },
        "2100": { nome: "FAL", preco: 30000, quantidade: 50 },
        "2200": { nome: "PKM", preco: 31000, quantidade: 50 }
    }
};

exports.run = async (bot, message, args) => {
    const user = message.author;

    // Menu Embed
    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Loja Principal")
            .setColor("RANDOM")
            .setDescription(
        `Olá ${user}, seja bem-vindo à Loja Principal!
        Aperte em "🏢" para ver a lista de empresas.
        Aperte em "🔫" para ver a lista de armas.`)
            .setFooter(`Comando executado por ${user.tag}`, user.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

        return message.channel.send({ embeds: [embed] }).then(async msg => {
            await msg.react("🏢");
            await msg.react("🔫");
            await msg.react("◀");

            const filter = (reaction, u) => ["🏢", "🔫", "◀"].includes(reaction.emoji.name) && u.id === user.id;
            const collector = msg.createReactionCollector({ filter, time: 60000 });

            collector.on("collect", reaction => {
                reaction.users.remove(user);
                let category;
                if (reaction.emoji.name === "🏢") category = items.empresas;
                if (reaction.emoji.name === "🔫") category = items.armas;
                if (reaction.emoji.name === "◀") return msg.edit({ embeds: [embed] });

                const embedList = new Discord.MessageEmbed()
                    .setTitle(reaction.emoji.name === "🏢" ? "Empresas Disponíveis" : "Armas Disponíveis")
                    .setColor("RANDOM")
                    .setFooter(`Comando executado por ${user.tag}`, user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp();

                for (const key in category) {
                    const item = category[key];
                    embedList.addField(`${key} - ${item.nome}`, `Preço: F$ ${item.preco}${item.quantidade ? ` | Quantidade: ${item.quantidade}` : ""}\nComando: \`!comprar ${key}\``);
                }
                msg.edit({ embeds: [embedList] });
            });
        });
    }

    // Purchase
    const key = args[0];
    const money = db.fetch(`cartão_${user.id}`) || 0;
    let item = items.empresas[key] || items.armas[key] || items.municao[key];
    if (!item) return message.reply("Item não encontrado!");
    if (money < item.preco) return message.reply(`Você precisa de F$ ${item.preco} para comprar ${item.nome}`);

    db.subtract(`cartão_${user.id}`, item.preco);

    if (item.quantidade) {
        db.add(`${item.nome.toLowerCase()}_${user.id}`, item.quantidade);
    } else {
        db.add(`${item.nome.toLowerCase()}_${user.id}`, 1);
    }

    const embedBuy = new Discord.MessageEmbed()
        .setTitle("Compra realizada!")
        .setColor("RANDOM")
        .setDescription(`<@${user.id}> comprou **${item.nome}** com sucesso!`)
        .addField("Comandos desbloqueados", item.unlock ? item.unlock.join("\n") : "Nenhum")
        .setTimestamp()
        .setFooter(`Comando executado por ${user.tag}`, user.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embedBuy] });
};

exports.help = { name: "!comprar" };
