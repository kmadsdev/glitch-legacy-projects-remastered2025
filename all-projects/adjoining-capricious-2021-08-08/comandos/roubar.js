const Discord = require("discord.js")
const db = require("quick.db")
let ms = require("parse-ms")
exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply("Me informe o nome da empresa! (se tiver espaço, coloque `-`")
    let tempo = 172800000
    let roubar = await db.fetch(`roubar_${message.author.id}`)
    if (roubar !== null & timeout - (Date.now() - roubar) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        message.reply(`Aguarde **${time.days}d ${time.hours}h ${time.minutes}m e ${time.seconds}s!**`)
    } else {
        if (args[0] === "loja-de-cosmeticos") {
            let arma = db.fetch(`uzi_${message.author.id}`)
            let munição = db.fetch(`Muzi_${message.author.id}`)
            if (arma < 1) return message.reply("Você precisa de uma **UZI** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de Munição! Compre usando `'comprar`")
            db.add(`money_${message.author.id}`, 49000)
            db.subtract(`Munzi_${message.author.id}`, 10)
            let embed = new Discord.MessageEmbed()
            .setTitle("Assalto")
            .setColor("RANDOM")
            .setDescription(`${message.author} roubou **F$ 49,000** de uma Loja de Cosméticos.`)
            .setTimestamp()
            message.channel.send(embed)
        }
        if (args[0] === "restaurante") {
            let arma = db.fetch(`m1911_${message.author.id}`)
            let munição = db.fetch(`Mm1911_${message.author.id}`)
            if (arma < 1) return message.reply("Você precisa de uma **M1911** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de Munição! Compre usando `'comprar`")
            db.add(`money_${message.author.id}`, 84000)
            db.subtract(`Mm1911_${message.author.id}`, 10)
            let embed = new Discord.MessageEmbed()
            .setTitle("Assalto")
            .setColor("RANDOM")
            .setDescription(`${message.author} roubou **F$ 84,000** de um Restaurante`)
            .setTimestamp()
            message.channel.send(embed)
        }
        if (args[0] === "streaming") {
            let arma = db.fetch(`remington_${message.author.id}`)
            let munição = db.fetch(`Mremington870_${message.author.id}`)
            if (arma < 1) return message.reply("Você precisa de uma **Remington 870** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de **Munição!** Compre usando `'comprar`")
            db.add(`money_${message.author.id}`, 105000)
            db.subtract(`Mremington870_${message.author,id}`, 10)
            let embed = new Discord.MessageEmbed()
            .setTitle("Assalto")
            .setColor("RANDOM")
            .setDescription(`${message.author} roubou **F$ 105,000** de uma **Empresa de Streaming**`)
            .setTimestamp()
            message.channel.send(embed)
        }
        if (args[0] === "material-de-constucao") {
            let arma = db.fetch(`ak-47_${message.author.id}`)
            let munição = db.fetch(`Mak-47_${message.author.id}`)
            if (arma < 1) return message.reply("Você precisa de uma **AK-47** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de **Munição** Compre usando `'comprar`")
            if (munição < 10)
            db.add(`money_${message.author.id}`, 119000)
            db.subtract(`Marj-47_${message.author.id}`, 10)
            let embed = new Discord.MessageEmbed()
            .setTitle("Assalto")
            .setColor("RANDOM")
            .setDescription(`${message.author} roubou **F$ 1179,000** de uma **Empresa de Material de Construção**`)
            .setTimestamp()
            message.channel.send(embed)
        }
        if (args[0] === "laboratorio") {
            let arma = db.fetch(`ar-15_${message.author.id}`)
            let munição = db.fetch(`Mar-15_${message.author.id}`)
            if (arma < 1) return message.reply("Você precisa de uma **AR-15** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de uma **Munição!** Compre usando `'comprar`")
            db.add(`money_${message.author.id}`, 126000)
            db.subtract(`Mar-15_${message.author.id}`, 10)
            let embed = new Discord.MessageEmbed()
            .setTitle("Assalto")
            .setColor("RANDOM")
            .setDescription(`${message.author} roubou **F$ 126,000**`)
            .setTimestamp()
            message.channel.send(embed)
        }
        if (args[0] === "jogos") {
            let arma = db.fetch(`fal_${message.author.id}`)
            let munição = db.fetch(`Mfal_${message.author.id}`)
            if (arma < 1) return message.reply("Você precisa de uma **FAL** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de uma **Munição!** Compre usando `'comprar`")
            db.add(`money_${message.author.id}`, 133000)
            db.subtract(`Mfal_${message.author.id}`, 10)
            let embed = new Discord.MessageEmbed()
            .setTitle("Assalto")
            .setColor("RANDOM")
            .setDescription(`${message.author} roubou **F$ 133,000**`)
            .setTimestamp()
            message.channel.send(embed)
        }
        if (args[0] === "cervejaria") {
            let arma = db.fetch(`pkm_${message.author.id}`)
            let munição = db.fetch(`Mpkm_${message.author.id}`)
            if (arma < 1) return message.reply("Você preicsa de uma **PKM** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de uma **Munição!** Compre uma usando `'comprar`")
            db.add(`money_${message.author.id}`, 140000)
            db.subtract(`Mpkm_${message.author.id}`, 10)
            let embed = new Discord.MessageEmbed()
            .setTitle("Assalto")
            .setColor("RANDOM")
            .setDescription(`${message.author} roubou **F$ 140,000**`)
            .setTimestamp()
            message.channel.send(embed)
        }
        if (args[0] === "academia") {
            let arma = db.fetch(`pkm_${message.author.id}`)
            let munição = db.fetch(`Mpkm_${message.author.id}`)
            if (arma < 1) return message.reply("Você precisa de uma **PKM** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de uma **Munição!** Compre uma usando `'comprar`")
            db.add(`money_${message.author.id}`, 140000)
            db.subtract(`Mpkm_${message.author.id}`, 10)
            let embed = new Discord.MessageEmbed()
            .setTitle("Assalto")
            .setColor("RANDOM")
            .setDescription(`${message.author} roubou **F$ 140,000**`)
            .setTimestamp()
            message.channel.send(embed)
        }
        db.set(`roubar_${message.author.id}`, Date.now())
    }
}
exports.help = {
    name: "'roubar"
}