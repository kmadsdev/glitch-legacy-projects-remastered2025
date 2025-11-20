const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  
  let embedE = new Discord.MessageEmbed()
  .setTitle("⛏️ Minerador")
  .setColor("RANDOM")
  .setDescription(`Olá! Seja Bem-Vindo ao **Emprego de Mineração!**

Aqui você pode **comprar seu minerador**, ou pegar o **minerador inicial gratuito**.

🔧 **Como comprar (ou pegar gratuitamente):**
Use: \`!minerador [LVL-DO-MINERADOR]\`

❓ **Não sabe como ganhar níveis?**
Use: \`!levels\` e saiba mais!`)
  .addFields(
    {
      name: "⛏️ Minerador Gratuito",
      value: `💰 Valor: **FB$ 0**
⛽ Gasolina Necessária: **50 Litros**
⭐ Requer Nível: **0**
📌 Comando: \`!minerador gratuito\``
    },
    {
      name: "⛏️ Minerador LvL 1",
      value: `💰 Valor: **FB$ 100**
⛽ Gasolina Necessária: **100 Litros**
⭐ Requer Nível: **5**
📌 Comando: \`!minerador lvl1\``
    },
    {
      name: "⛏️ Minerador LvL 2",
      value: `💰 Valor: **FB$ 200**
⛽ Gasolina Necessária: **150 Litros**
⭐ Requer Nível: **10**
📌 Comando: \`!minerador lvl2\``
    },
    {
      name: "⛏️ Minerador LvL 3",
      value: `💰 Valor: **FB$ 300**
⛽ Gasolina Necessária: **200 Litros**
⭐ Requer Nível: **15**
📌 Comando: \`!minerador lvl3\``
    },
    {
      name: "⛏️ Minerador LvL 4",
      value: `💰 Valor: **FB$ 400**
⛽ Gasolina Necessária: **250 Litros**
⭐ Requer Nível: **20**
📌 Comando: \`!minerador lvl4\``
    },
    {
      name: "⛏️ Minerador LvL 5",
      value: `💰 Valor: **FB$ 500**
⛽ Gasolina Necessária: **300 Litros**
⭐ Requer Nível: **25**
📌 Comando: \`!minerador lvl5\``
    }
  )
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

  // Se o usuário não escolher nada, só exibe o painel
  if (!args[0]) return message.channel.send({ embeds: [embedE] });

  // Se já escolheu um nível, futuramente aqui entra a compra
  db.add(`xp_${message.author.id}`, 1);

  message.reply("👍 Sistema de mineradores em breve! Você já ganhou **+1 XP** por visualizar o painel!");
};

exports.help = {
  name: "!minerador"
}
