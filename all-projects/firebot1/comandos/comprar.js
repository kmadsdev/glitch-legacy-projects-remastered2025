const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
    let embedP = new Discord.MessageEmbed()
    .setTitle("Loja da Isabela")
    .setColor("RANDOM")
    .setDescription(`Olá! Seja muito bem vindo a loja da Isabela, onde você pode encontrar alguns produtos para comprar!
    
    Aperte em ":office:" para ver a lista de empregos!
    
    Aperte em ":gun:" para ver a lista de armas!`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    if(!args[0]) return message.channel.send(embedP).then(msg => {
        msg.react("🏢")
        msg.react("🔫")
    msg.react("◀")
        let coletorE = msg.createReactionCollector((r, u) => r.emoji.name === "🏢" && u.id === message.author.id)
        let coletorA = msg.createReactionCollector((r, u) => r.emoji.name === "🔫" && u.id === message.author.id)
        let coletorV = msg.createReactionCollector((r, u) => r.emoji.name === "◀" && u.id === message.author.id)
        coletorE.on("collect", (r) => {
            r.users.remove(message.author)
            let embed = new Discord.MessageEmbed()
            .setTitle("Comprar empresas")
            .setColor("RANDOM")
            .addFields(
                {name: "Restaurante", value: "`'comprar 100`"},
                {name: "Loja de Cosméticos", value: "`'comprar 200`"},
                {name: "Cervejaria", value: "`'comprar 300"},
                {name: "Academia", value: "`'comprar 400`"},
                {name: "Laboratório", value: "`'comprar 500`"},
                {name: "Jogos", value: "`'comprar 600`"},
                {name: "Streaming", value: "`'comprar 700`"},
                {name: "Material de Construção", value: "`'comprar 800`"},
            )
            .setTimestamp()
            .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
            msg.edit(embed)
        })
        coletorA.on("collect", (r) => {
            r.users.remove(message.author)
            let embed = new Discord.MessageEmbed()
            .setTitle("Comprar armas")
            .setColor("RANDOM")
            .addFields(
                {name: "UZI | Munição", value: "`'comprar 900 | 'comprar 1600`"},
                {name: "M1911 | Munição", value: "`'comprar 1000 | 'comprar 1700`"},
                {name: "Remington 870 | Munição", value: "`'comprar 1100 | 'comprar 1800`"},
                {name: "AK-47 | Munição", value: "`'comprar 1200 | `'comprar 1900`"},
                {name: "AR-15 | Munição", value: "`'comprar 1300` | `'comprar 2000`"},
                {name: "FAL | Munição", value: "`'comprar 1400` | `'comprar 2100`"},
                {name: "PKM", value: "`'comprar 1500` | `'comprar 2200`"},
            )
            .setTimestamp()
            .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
            msg.edit(embed)
        })
        coletorV.on("collect", (r) => {
            r.users.remove(message.author)
            msg.edit(embedP)
        })
    })
    if (args[0] === "100") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 120000) return message.reply("Você precisa de **F$ 120,000** para comprar um restaurante!")
        db.subtract(`cartão_${message.author.id}`, 120000)
        db.add(`restaurante_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de restaurante com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: `\`'lucro retaurante\``},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "200") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 70000) return message.reply("Você precisa de **F$ 70,000** para comprar uma loja de cosméticos")
        db.subtract(`cartão_${message.author.id}`, 70000)
        db.add(`cosmésticos_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de cosméticos com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: `\`'lucro loja-de-cosméticos\``},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "300") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 200000) return message.reply("Você precisa de **F$ 200,000** para comprar uma Cervejaria")
        db.subtract(`cartão_${message.author.id}`, 200000)
        db.add(`cervejaria_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de cervejaria com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: `\`'lucro cervejaria\``},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "400") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 200000) return message.reply("Você precisa de **F$ 200,000** para comprar uma Academia")
        db.subtract(`cartão_${message.author.id}`, 200000)
        db.add(`academia_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de Academia com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: `\`'lucro academia\``},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "500") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 180000) return message.reply("Você precisa de **F$ 180,000** para comprar um Laboratório")
        db.subtract(`cartão_${message.author.id}`, 180000)
        db.add(`laboratório_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de Laboratório com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: `\`'lucro laboratorio\``},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "600") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 190000) return message.reply("Você precisa de **F$ 190,000** para comprar uma Desenvolvedora de Jogos!")
        db.subtract(`cartão_${message.author.id}`, 190000)
        db.add(`jogos_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de Desenvolvimento de Jogos com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'lucro jogos`"}
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "700") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 150000) return message.reply("Você precisa de **F$ 150,000** para comprar uma Empresa de Streaming")
        db.subtract(`cartão_${message.author.id}`, 150000)
        db.add(`streaming_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de Streaming com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'lucro streaming`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "800") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 170000) return message.reply("Você precisa de **F$170,000** para comprar uma empresa de Material de Construção")
        db.subtract(`cartão_${message.author.id}`, 170000)
        db.add(`construção_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de Material de Construção com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'lucro material-de-construcao`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "900") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 12000) return message.reply("Você precisa de **F$ 12,000** para comprar essa arma!")
        db.subtract(`cartão_${message.author.id}`, 12000)
        db.add(`uzi_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma **UZI** e desbloqueou alguns comandos`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'roubar loja-de-cosmeticos`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1000") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 24000) return message.reply("Você precisa de **F$ 24,000** para comprar essa arma!")
        db.subtract(`cartão_${message.author.id}`, 24000)
        db.add(`m1911_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma **M1911** e desbloqueou alguns comandos`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'roubar restaurante`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynmic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1100") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 48000) return message.reply("Você precisa de **F$ 48,000** para executar esse comando!")
        db.subtract(`cartão_${message.author.id}`, 48000)
        db.add(`remington_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma **Remington 870** e desbloqueou alguns comandos`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'roubar streaming`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1200") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 96000) return message.reply("Você precisa de **F$ 96,000** para executar esse comando!")
        db.subtract(`cartão_${message.author.id}`, 96000)
        db.add(`ak-47_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma **AK-47** e desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'roubar material-de-construcao`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1300") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 150000) return message.reply("Você precisa de **F$ 150,000** para executar esse comando!")
        db.subtract(`cartão_${message.author.id}`, 150000)
        db.add(`ar-15_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma **AR-15** e desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'roubar laboratorio`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1400") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 200000) return message.reply("Você precisa de **F$ 200,000** para executar esse comando!")
        db.subtract(`cartão_${message.author.id}`, 200000)
        db.add(`fal_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma **FAL** e desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'roubar jogos`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1500") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 210000) return message.reply("Você precisa de **F$ 210,000** para executar esse comando!")
        db.subtract(`cartão_${message.author.id}`, 210000)
        db.add(`pkm_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma **PKM** e desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: "`'roubar cervejaria`//n`'roubar academia`"},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1600") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 1200) return message.reply("Você precisa de **F$ 1,200** para executar esse coamndo!")
        db.subtract(`cartão_${message.author.id}`, 1200)
        db.add(`Muzi_${message.author.id}, 50`)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou **Munição** para **UZI**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1700") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 2400) return message.reply("Você precisa de **F$ 2,400** para executar esse coamndo!")
        db.subtract(`cartão_${message.author.id}`, 2400)
        db.add(`Mm1911_${message.author.id}, 50`)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou **Munição** para **M1911**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1800") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 4800) return message.reply("Você precisa de **F$ 4,800** para executar esse coamndo!")
        db.subtract(`cartão_${message.author.id}`, 4800)
        db.add(`Mremington870_${message.author.id}, 50`)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou **Munição** para **Remington 870**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "1900") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 9600) return message.reply("Você precisa de **F$ 9,600** para executar esse coamndo!")
        db.subtract(`cartão_${message.author.id}`, 9600)
        db.add(`Mak-47_${message.author.id}, 50`)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou **Munição** para **AK-47**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "2000") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 19200) return message.reply("Você precisa de **F$ 19,800** para executar esse coamndo!")
        db.subtract(`cartão_${message.author.id}`, 19200)
        db.add(`Mar-15_${message.author.id}, 50`)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou **Munição** para **AR-15**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "2100") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 30000) return message.reply("Você precisa de **F$ 30,000** para executar esse coamndo!")
        db.subtract(`cartão_${message.author.id}`, 30000)
        db.add(`Mfal_${message.author.id}, 50`)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou **Munição** para **FAL**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "2200") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 31000) return message.reply("Você precisa de **F$ 31,000** para executar esse coamndo!")
        db.subtract(`cartão_${message.author.id}`, 31000)
        db.add(`Mpkm_${message.author.id}, 50`)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou **Munição** para **PKM**`)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!comprar"
}