const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {
        let timeout = 180000
      let apostar = db.fetch(`apostar_${message.author.id}`)
        if (apostar !== null && timeout - (Date.now() - apostar) > 0) {
        let time = ms(timeout - (Date.now() - apostar));
        message.reply(`Calma aeh parceiro(a)! É preciso esperar **${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`)
      } else {
        let checkMoney = await db.fetch(`money_${message.author.id}`)
      if (checkMoney < 500) return message.reply("Você precisa de **F$ 500** para apostar!")
      let embedP = new Discord.MessageEmbed()
      .setTitle("Tem Certeza?")
      .setColor("RAMDOM")
      .setDescription(`Você tem certeza que quer apostar?
Você vai perder **R$ 500**!

**Probalidades**
Perder Tudo - (Perder **R$ 500**)
Perder Metade - (Perder **R$ 250**)
Nada! - (**R$ 500** Devolvido)
Ganhar! - (Ganhar **+R$ 500**)
Ganhar em Dobro! - (*Ganhar **+R$ 1,000**)

Você tem 10 Segundos para confirmar sua aposta!`)
      .setTimestamp()
      .setFooter("Aperte em '✔' para confirmar sua aposta!")
      db.set(`apostar_${message.author.id}`, Date.now())
      message.channel.send(embedP).then(msg => {
        msg.react("✔")
        let filtroYes = (reaction, usuario) => reaction.emoji.name === "✔" && usuario.id === message.author.id;
        let coletorYes = msg.createReactionCollector(filtroYes, {max: 1, time: 10000})
        
        coletorYes.on("collect", () => {
          db.add(`xp_${message.author.id}`, 1)
          db.subtract(`money_${message.author.id}`, 500)
          let codApostar = Math.floor(Math.random() * (5 - 1) + 1);
          if (codApostar == 1){
            let embed1 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta")
            .setColor("RANDOM")
            .setDescription("Você apostou e perdeu **F$ 500**")
            message.channel.send(embed1)
          }
          if (codApostar == 2){
            db.add(`money_${message.author.id}`, 250)
            let embed2 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta!")
            .setColor("RANDOM")
            .setDescription("Você apostou e perdeu **F$ 250**")
            message.channel.send(embed2)
          }
          if (codApostar == 3){
            db.add(`money_${message.author.id}`, 500)
            let embed3 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta!")
            .setColor("RANDOM")
            .setDescription("Você apostou e ganhou nada! (**F$ 500** devolvido)")
            message.channel.send(embed3)
          }
          if (codApostar == 4){
            db.add(`money_${message.author.id}`, 1000)
            let embed4 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta!")
            .setColor("RANDOM")
            .setDescription(`Você apostou e ganhou **F$ 500!!**`)
            message.channel.send(embed4)
          }
          if (codApostar == 5){
            db.add(`money_${message.author.id}`, 1500)
            let embed5 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta!")
            .setColor("RANDOM")
            .setDescription(`Você apostou e ganhou **F$ 1,000!!**`)
            message.channel.send(embed5)
          }
        })
      })
    }
}
exports.help = {
  name: "'apostar"
}