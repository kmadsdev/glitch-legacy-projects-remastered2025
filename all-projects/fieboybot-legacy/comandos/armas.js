const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  const embedP = new Discord.MessageEmbed()
    .setTitle("Armas")
    .setColor("RANDOM")
    .setDescription(`
Seja bem-vindo ao painel de armas! Aqui você pode comprar armas para **assaltar empresas**.

🔫 **Opções:**
▶️ **1️⃣** → Lista de Armas  
📋 **2️⃣** → Comandos das Armas  
◀️ **Voltar**
    `)
    .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png" }))
    .setTimestamp();

  message.channel.send({ embeds: [embedP] }).then(msg => {
    msg.react("1️⃣");
    msg.react("2️⃣");
    msg.react("◀");

    const filtroOne = (r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id;
    const filtroTwo = (r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id;
    const filtroBack = (r, u) => r.emoji.name === "◀" && u.id === message.author.id;

    const coletorOne = msg.createReactionCollector({ filter: filtroOne });
    const coletorTwo = msg.createReactionCollector({ filter: filtroTwo });
    const coletorBack = msg.createReactionCollector({ filter: filtroBack });

    coletorOne.on("collect", (r) => {
      r.users.remove(message.author);

      const embed1 = new Discord.MessageEmbed()
        .setTitle("Lista de Armas")
        .setColor("RANDOM")
        .addFields(
          { name: "🔫 UZI", value: "💵 Valor: **FB$ 12.000**\n🔸 Munição: **FB$ 1.200** (50 balas)" },
          { name: "🔫 M1911", value: "💵 Valor: **FB$ 24.000**\n🔸 Munição: **FB$ 2.400** (50 balas)" },
          { name: "🔫 Remington 870", value: "💵 Valor: **FB$ 48.000**\n🔸 Munição: **FB$ 4.800** (50 balas)" },
          { name: "🔫 AK-47 (⭐ Recomendada)", value: "💵 Valor: **FB$ 96.000**\n🔸 Munição: **FB$ 9.600** (50 balas)" },
          { name: "🔫 AR-15", value: "💵 Valor: **FB$ 150.000**\n🔸 Munição: **FB$ 19.200** (50 balas)" },
          { name: "🔫 FAL", value: "💵 Valor: **FB$ 200.000**\n🔸 Munição: **FB$ 30.000** (50 balas)" },
          { name: "🔫 PKM", value: "💵 Valor: **FB$ 210.000**\n🔸 Munição: **FB$ 21.000** (50 balas)" },
        )
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png" }))
        .setTimestamp();

      msg.edit({ embeds: [embed1] });
    });

    coletorTwo.on("collect", (r) => {
      r.users.remove(message.author);

      const embed2 = new Discord.MessageEmbed()
        .setTitle("Lista de Armas | Comandos")
        .setColor("RANDOM")
        .addFields(
          { name: "UZI", value: "`!roubar loja-de-cosmeticos`" },
          { name: "M1911", value: "`!roubar restaurante`" },
          { name: "Remington 870", value: "`!roubar streaming`" },
          { name: "AK-47", value: "`!roubar material-de-construcao`" },
          { name: "AR-15", value: "`!roubar laboratorio`" },
          { name: "FAL", value: "`!roubar jogos`" },
          { name: "PKM", value: "`!roubar academia`" }
        )
        .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png" }))
        .setTimestamp();

      msg.edit({ embeds: [embed2] });
    });

    coletorBack.on("collect", (r) => {
      r.users.remove(message.author);
      msg.edit({ embeds: [embedP] });
    });
  });
};

exports.help = {
  name: "!armas"
};
