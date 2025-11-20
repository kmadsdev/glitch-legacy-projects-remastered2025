const express = require('express');
const app = express();
const Discord = require(`discord.js`);
const bot = new Discord.Client();
const config = require("./config.json");
const fetch = require("node-fetch");
const moment = require("moment");
const db = require("quick.db");
const ms = require("parse-ms");
const fs = require("fs");
const voto = new Discord.WebhookClient('', '')
const Discord = require("discord.js")


bot.commands = new Discord.Collection()


app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3); // UTC-3
    console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    response.sendStatus(200);
});
app.listen(process.env.PORT);


fs.readdir("./comandos", (err, files) => {
    if (err) console.error(err);
    let arquivojs = files.filter(f => f.split(".").pop() === "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`)
        console.log(`Comando ${f} executado com sucesso!`)
            bot.commands.set(props.help.name, props)
    })
})


fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
});


bot.on("guildMemberAdd", async member => {
    let vCargo = db.fetch(`cargo_${member.guild.id}`)
    if (vCargo) { await member.roles.add(vCargo) }
})


const bot_id = "1360232899642921012" // 550305758583980042
const channel_id = "1360223486714314855"


bot.on("message", async message => {
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let arquivocmd = bot.commands.get(cmd.slice(prefix.lenght));
    let userInfo = db.fetch(`xp_${message.author.id}`)
    let lvl = db.fetch(`lvl_${message.author.id}`)

    if (arquivocmd) { arquivocmd.run(bot, message, args) }
    if (userInfo >= 50) {
        if (lvl >= 25) { return }
        db.add(`lvl_${message.author.id}`, 1)
        db.subtract(`xp_${message.author.id}`, 50)
        message.author.send(`Parabéns! Você subiu de nível! Para conferir seu "LvL" use o comando \`!userinfo\``)
    }
  
    // const db = require("quick.db")
    // db.add(`xp_${message.author.id}`, 1)

    if (message.content.startsWith("<@!1360232899642921012>") || message.content.startsWith("<@1360232899642921012>") || message.content.startsWith("!ajuda") ) {
        let embedP = new Discord.MessageEmbed()
            .setTitle("**Central de Ajuda | Brunimations Kingdom**")
            .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
            .setColor("yellow")
            .setDescription(`
                👥 | Ajuda para Membros
                🔑 | Ajuda para Moderadores
            `)
            .setTimestamp()
            .setFooter(`Comando executado por ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true,size: 1024,format: "png"})}`);

        message.channel.send(embedP).then(msg => {
            msg.react("👥");
            msg.react("🔑");
            msg.react("◀");

            let filtro1 = (r, u) => r.emoji.name === "👥" && u.id === message.author.id;
            let coletor1 = msg.createReactionCollector(filtro1);
            let filtro2 = (r, u) => r.emoji.name === "🔑" && u.id === message.author.id;
            let coletor2 = msg.createReactionCollector(filtro2);
            let filtroV = (r, u) => r.emoji.name === "◀" && u.id === message.author.id;
            let coletorV = msg.createReactionCollector(filtroV);
            coletor1.on("collect", async (r) => {
                let embed = new Discord.MessageEmbed()
                    .setTitle("**Central de Ajuda | Membros**")
                    .setColor("GREEN")
                    .setDescription(`**Importante**
                        .comandos | Mostra a lista completa de comandos do bot
                        .faq | Mostra uma lista de perguntas e respostas frequentes no servidor
                        .userinfo | Mostra informações básicas do(a) usuário(a)
                        .serverinfo | Mostra informações básicas do servidor
                        .servericon | Mostra o ícone do servidor
                        
                        **Diversão**
                        .ping | Mostra o ping do bot
                        .avatar <@usuário> | Mostra o avatar de alguém no servidor
                        .slap <@usuário>
                        .abraçar <@usuário>
                        .kiss <@usuário>
                        .say <@usuário>
                        .mcbody <nickname do minecraft>
                        .mchead <nickname do minecraft>
                    `)
                    .setTimestamp()
                    .setTimestamp()
                    .setFooter("Pressione '◀' para voltar a página principal!")

                msg.edit(embed)
                r.users.remove(message.author)
            })

            coletor2.on("collect", async (r) => {
                if (!message.member.hasPermission("ADMINISTRADOR")) return message.reply(":x: | Você precisa da permissão `Administrador` para executar esse comando!")
                    let embed = new Discord.MessageEmbed()
                        .setTitle("**Central de Ajuda | Moderadores**")
                        .setColor("RED")
                        .setDescription(`
                            .ban <@usuário> | Banir algum membro (permanente)
                            .kick <@usuário> | Expulsar algum membro (temporário)
                            .clear <quantidade de mensagens> | Limpar determinanda quantidade de mensagens no chat
                            .userinfo | Mostra informações básicas do(a) usuário(a)
                            .serverinfo | Mostra informações básicas do servidor
                            .servericon | Mostra o ícone do servidor
                            .ping | Mostra o ping do bot
                            .avatar <@usuário> | Mostra o avatar de alguém no servidor
                            .slap <@usuário>
                            .abraçar <@usuário>
                            .kiss <@usuário>
                            .say <@usuário>
                            .mcbody <nickname do minecraft>
                            .mchead <nickname do minecraft>
                            .yt <link do vídeo> envia uma mensagem com o link (com everyone)
                            .live <youtube/twitch> envia uma mensagem com o link da twitch/youtube do brunimations
                        `)
                        .setTimestamp()
                        .setFooter("Pressione '◀' para voltar a página principal!")
                msg.edit(embed)
                r.users.remove(message.author)
            })

            coletorV.on("collect", async (r) => {
                msg.edit(embedP)
                r.users.remove(message.author)
            })
        });
    }

    try {
        // Verifica se a mensssagem enviada é no canal especificado acima, e reparte toda a menssagem (caso seja)
        if (message.author.id === bot_id && message.channel.id === channel_id) {
            let separador = message.content.split(' ')
            let parte_1 = message.content.substr(message.content.indexOf("#"))
            let parte_2 = parte_1.substr(7)
            let parte_3 = parte_2.substr(parte_2.indexOf(")", "."))
            parte_2.replace(parte_3, "")

            let bot_name_1 = parte_3.replace(") votou no bot **`", '')
            let bot_name_2 = bot_name_1.replace("`**.", '')
            let bot_name_3 = bot_name_2.replace(`https://botsparadiscord.com/bots/${bot.user.id}`, '')
            let bot_name_4 = bot_name_3.replace("<>", '')
            let bot_name_final = bot_name_4.replace(/(\r\n|\n|\r)/gm, "")

            // Aqui verifica se a menssagem repartida tem a tag do seu bot
            if (bot_name_final === bot.user.tag) { // Defina a tag do seu bot ex: 'bot#0000' ou 'bot.user.tag' || 'client.user.tag'
                voto.send(`:thumbsup: \`` + separador[1] + `\` votou no ${bot.user.tag}! :tada:\n`, {
                    username: bot.user.username, // Definição do nome do WebHook
                    avatarURL: bot.user.displayAvatarURL // Definição da imagem do WebHook
                })
            }
        }
    } catch (e) {
        console.log('Algo aconteceu :/\n' + e)
    }
    console.log("wakey wakey")
});


bot.login(config.token)
