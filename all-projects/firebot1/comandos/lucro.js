const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms")
exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply("Parece que eu não encontrei sua empresa, lembre-se, em vez dos 'espaços' coloque '-'")
    let tempo = 25200000
    let lucro = await db.fetch(`lucro_${message.author.id}`)
    if (lucro !== null & timeout - (Date.now() - lucro) > 0) {
        let time = ms(timeout - (Date.now() - lucro));
        message.reply(`Utilize esse comando novamente em **${time.hours}h ${time.minutes}m e ${time.seconds}s!**`)
    } else {
    if (args[0] === "restaurante") {
        let restaurante = db.fetch(`restaurante_${message.author.id}`)
        if (restaureante < 1) return message.reply("Você precisa de um restaurante para executar esse comando!")
        db.add(`cartão_${message.author.id}`, 12000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ 12,000** por causa de sua empresa!`)
        .setTimestamp()
        message.channel.send(embed)
    }
    if (args[0] === "loja-de-cosmeticos") {
        let cosméticos = db.fetch(`cosméticos_${message.author.id}`)
        if (cosméticos < 1) return message.reply("Você precisa de uma Loja de Cosméticos para executar esse comando!")
        db.add(`cartão_${message.author.id}`, 7000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ 7,000** por causa de sua empresa!`)
        .setTimestamp()
        message.channel.send(embed)
    }
    if (args[0] === "cervejaria") {
        let cervejaria = db.fetch(`cervejaria_${message.author.id}`)
        if (cervejaria < 1) return message.reply("Você precisa de uma Cervejaria para executar esse comando!")
        db.add(`cartão_${message.author.id}`, 20000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ 20,000** por causa de sua empresa!`)
        .setTimestamp()
        message.channel.send(embed)
    }
    if (args[0] === "academia") {
        let academia = db.fetch(`academia_${message.author.id}`)
        if (academia < 1) return message.reply("Você precisa de uma Academia para executar esse comando!")
        db.add(`cartão_${message.author.id}`, 20000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ 20,000** por causa de sua empresa!`)
        .setTimestamp()
        message.channel.send(embed)
    }
    if (args[0] === "laboratorio") {
        let laboratorio = db.fetch(`laboratório_${message.author.id}`)
        if (laboratorio < 1) return message.reply("Você precisa de um Laboratório para executar esse comando!")
        db.add(`cartão_${message.author.id}`, 18000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ 18,000** por causa de sua empresa!`)
        .setTimetamp()
        message.channel.send(embed)
    }
    if (args[0] === "jogos") {
        let jogos = db.fetch(`jogos_${messafe.author.id}`)
        if (jogos < 1) return message.reply("Você precisa de uma Desenvolvedora de Jogos para executar esse comando!")
        db.add(`cartão_${message.author.id}`, 19000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ 19,000** por causa de sua empresa!`)
        .setTimestamp()
        message.channel.send(embed)
    }
    if (args[0] === "streaming") {
        let streaming = db.fetch(`streaming_${message.author.id}`)
        if (streaming < 1) return message.reply("Você precisa de uma Empresa de Streaming para executar esse comando!")
        db.add(`cartão_${message.author.id}`, 15000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ 15,000** por causa de sua empresa!`)
        .setTimestamp()
        message.channel.send(embed)
    }
    if (args[0] === "material-de-construcao") {
        let construção = db.fetch(`construção_${message.author.id}`)
        if (construção  < 1) return message.reply("Você precisa de uma Empresa de Material de Construção para executar esse comando!")
        db.add(`cartão_${message.author.id}`, 17000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lucro Coletado!")
        .setColor("RANDOM")
        .setDescription(`${message.author} coletou **F$ 17,000** por causa de sua empresa!`)
        .setTimestamp()
        message.channel.send(embed) 
    }
    db.set(`lucro_${message.author.id}`, Date.now())
    }
}
exports.help = {
    name: "!lucro"
}