const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  let timeout = 180000; // 3min
  let apostar = db.fetch(`apostar_${message.author.id}`);

  if (apostar !== null && timeout - (Date.now() - apostar) > 0) {
    let time = ms(timeout - (Date.now() - apostar));
    return message.reply(`Calma aê parceiro(a)! Espere **${time.minutes}m e ${time.seconds}s** para apostar novamente!`);
  }

  let checkMoney = db.fetch(`money_${message.author.id}`) || 0;
  if (checkMoney < 500) return message.reply("Você precisa de **F$ 500** para apostar!");

  let embedP = new Discord.MessageEmbed()
    .setTitle("Tem Certeza?")
    .setColor("RANDOM")
    .setDescription(`
    Você quer apostar **F$ 500**?

    **Probabilidades**
    🔴 Perder Tudo (**-500**)
    🟠 Perder Metade (**-250**)
    ⚪ Nada (Devolvido)
    🟢 Ganhar (**+500**)
    💎 Ganhar em Dobro (**+1000**)

    ⏳ Você tem **10 segundos** para confirmar!

    Clique em **✅** para confirmar a aposta!
    `)
    .setTimestamp()
    .setFooter(`Aposta de ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    db.set(`apostar_${message.author.id}`, Date.now());

    message.channel.send({ embeds: [embedP] }).then(msg => {
      msg.react("✅");

      let filtroYes = (reaction, usuario) =>
          reaction.emoji.name === "✅" && usuario.id === message.author.id;

      let coletorYes = msg.createReactionCollector({ filter: filtroYes, max: 1, time: 10000 });

      coletorYes.on("collect", () => {
        db.add(`xp_${message.author.id}`, 1);
        db.subtract(`money_${message.author.id}`, 500);

        let codApostar = Math.floor(Math.random() * 5) + 1; // 1 a 5

        if (codApostar === 1) {
          return message.channel.send({ embeds: [
            new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta")
            .setColor("RED")
            .setDescription("Você perdeu **F$ 500** 😢")
          ]});
        }

        if (codApostar === 2) {
          db.add(`money_${message.author.id}`, 250);
          return message.channel.send({ embeds: [
            new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta")
            .setColor("ORANGE")
            .setDescription("Você perdeu **F$ 250** 😕")
          ]});
        }

        if (codApostar === 3) {
          db.add(`money_${message.author.id}`, 500);
          return message.channel.send({ embeds: [
            new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta")
            .setColor("GREY")
            .setDescription("Você não ganhou nada… dinheiro devolvido! 😐")
          ]});
        }

        if (codApostar === 4) {
          db.add(`money_${message.author.id}`, 1000);
          return message.channel.send({ embeds: [
            new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta")
            .setColor("GREEN")
            .setDescription("Você ganhou **F$ 500!!** 🥳")
          ]});
        }

        if (codApostar === 5) {
          db.add(`money_${message.author.id}`, 1500);
          return message.channel.send({ embeds: [
            new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta")
            .setColor("BLURPLE")
            .setDescription("💎 Inacreditável! Você ganhou **F$ 1.000!!!** 💎")
          ]});
        }
    });
  });
}

exports.help = {
    name: "!apostar"
};
