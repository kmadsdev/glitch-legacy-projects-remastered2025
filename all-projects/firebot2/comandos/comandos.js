const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");


exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`frentista_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não trabalha aqui, para mais informações, consulte `!empregos`")
    let ganhar = await db.fetch(`abastecer_${message.author.id}`)
    let timeout = 7200000
    if (ganhar !== null & timeout -(Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar))
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 200)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou com frentista e ganhou **FB$ 200**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!abastecer"
};

exports.run = async (bot, message, args) => {
        const user = message.mentions.users.first();
      let embedC = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("Carregando comando!")
    let msgg = await message.channel.send(embedC);
      if (!user) return message.channel.send(`:x: | <@${message.author.id}> Quem eu devo enviar o abraço? Você esqueceu de me dizer!`)
  db.add(`xp_${message.author.id}`, 1)
      fetch("https://nekos.life/api/v2/img/hug")
      .then(res => res.json())
      .then(json => {
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> deu um **ABRAÇO** em ${user}`)
        .setImage(json.url)
        msgg.edit(embed)
      })
}
exports.help = {
  name: "!abraçar",
};

exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first()
  if (!user) return message.reply("Mencione uma pessoa!")
  if (message.author.id == "763398072587386912") {
    if (!args[0]) return message.reply("Diga um argumento (classic, gold, diamond)")
    if (args[0] == "classic") {
      db.add(`classic_${user.id}`, 1)
      message.reply(`${user} agora é premium classic!`)
    }
    if (args[0] == "gold") {
      db.add(`gold_${user.id}`, 1)
      message.reply(`${user} agora é premium gold!`)
    }
    if (args[0] == "diamond") {
      db.add(`diamond_${user.id}`, 1)
      message.reply(`${user} agora é premium diamnond!`)
    }
  }
}
exports.help = {
  name: "!addp"
};

exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
  let embedP = new Discord.MessageEmbed()
    .setTitle(`Central de Ajuda | ${bot.user.username}`)
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("0EFE1D")
    .setDescription(`:gear:  | Olá! <@${message.author.id}> , Essa é minha **Central de Ajuda** onde você pode ver todos os meus comandos!

Só lembrando, que meu prefixo é \`!\`

Tenho no total **__36__ Comandos!**
Liks: [YouTube](https://youtube.fireboy.ml/) // [Twitch](https://twitch.tv/keiqms_wow/) // [Discord](https://discord.fireboy.ml/) // [Website](https://fireboy.ml/) // [Twitter](https://twitter.com/fireboyofc/)

Agora, vamos as categorias de comandos:

👮‍♂️ | Moderação
🎉 | Diversão
💰 | Economia
💡 | Adicionais
⚙ | Configurações`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true,size: 1024,format: "png"})}`);
  message.channel.send(embedP).then(msg => {
    msg.react("👮‍♂️");
    msg.react("🎉");
    msg.react("💰");
    msg.react("💡");
    msg.react("⚙");
    msg.react("◀");
    let filtro1 = (r, u) => r.emoji.name === "👮‍♂️" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1);
    let filtro2 = (r, u) => r.emoji.name === "🎉" && u.id === message.author.id;
    let coletor2 = msg.createReactionCollector(filtro2);
    let filtro3 = (r, u) => r.emoji.name === "💰" && u.id === message.author.id;
    let coletor3 = msg.createReactionCollector(filtro3);
    let filtro4 = (r, u) => r.emoji.name === "💡" && u.id === message.author.id;
    let coletor4 = msg.createReactionCollector(filtro4);
    let filtro5 = (r, u) => r.emoji.name === "⚙" && u.id === message.author.id;
    let coletor5 = msg.createReactionCollector(filtro5);
    let filtroV = (r, u) => r.emoji.name === "◀" && u.id === message.author.id;
    let coletorV = msg.createReactionCollector(filtroV);
    coletor1.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("Central de Ajuda | Moderação")
        .setColor("0AADFF")
        .setDescription(`Todos os comandos da categoria **Moderação**
Total de Comandos da Categoria: **8**

》 \`!ban\` | seguindo as regras ou não?\ 
》 \`!kick\` | tire os membros inativos.\ 
》 \`!clear\` | Deixe o chat limpinho!\ 
》 \`!sm\` <tempo> | modo lento mo chat\ 
》 \`!avatar\` | Veja a foto de perfil\ 
》 \`!userinfo\` | o que se passa com ele?\ 
》 \`!serverinfo\` | o server tá beleza?\ 
》 \`!servericon\` | Só pra ver, não toque\ `)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    });
    coletor2.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Diversão")
      .setColor("0AFF76")
      .setDescription(`Todos os comandos da categoria **Diversão**
Total de Comandos da Categoria: **7**

》 \`!slap <@usuário>\`
》 \`!abraçar <@usuário>\`
》 \`!kiss <@usuário>\`
》 \`!say <Mensagem>\`
》 \`!mcbody <Nickname>\`
》 \`!mchead <Nickname>\`
》 \`!ascii\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor3.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Economia")
      .setColor("DEFF0A")
      .setDescription(`Todos os Comandos da Categoria **Economia**
Total de Comandos da Categoria: **9**

》 \`!saldo <@usuário>\`
》 \`!give <@usuário> <quantidade>\`
》 \`!daily\` pegue seus FB$ diários!
》 \`!apostar <@usuário> <quantidade>\`
》 \`!pay <@usuário> <quantidade>\`
》 \`!armas\` veja as armas disponíveis
》 \`!empresas\` vejas as oportunidades
》 \`!empregos\` Veja os trabalhos bons
》 \`!take\` apenas um comando... `)
      .setTimestamp()
      .setFooter("Presione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor4.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Adicionais")
      .setColor("FFAD0A")
      .setDescription(`Todos os Comandos da Categoria **Adicionais**
Total de Comandos da Categoria: **8**

》 \`!ping\` o discord ta com tudo isso de ms?
》 \`!sobremim\` saiba mais sobre um membro.
》 \`!ontime\` estou acordado a quanto tempo?
》 \`!status\` como eu estou, só sei que estou vivo
》 \`!bug\` Reporte algum bug do bot ou da loja.
》 \`!suporte\` Tá precisado de um ajudinha?
》 \`!créditos\` os desenvolvedores do bot legal
》 \`!invite\` desativado, pois sou um bot único!
》 \`!cpu\` Como estou de saúde hoje :D `)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor5.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Configuração")
      .setColor("RANDOM")
      .setDescription(`Todos os Comandos da Categoria **Configurações**
Total de Comandos da Categoria: **4**
》 \`!setautorole\`
》 \`!welcome\`
》 \`!leave\`
》 \`!desativar\``)
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
};
exports.help = {
  name: "!ajuda"
};


exports.run = async (bot, message, args) => {
  let checkEmpresa = db.fetch(`empresa_${message.author.id}`)
    if (checkEmpresa < 1) return message.reply("Você precisa de uma empresa pra executar esse comando!")
    let timeout = 43200000 
    let anunciar = db.fetch(`anuncar_${message.author.id}`)
    if (anunciar !== null && timeout - (Date.now() - anunciar) > 0) {
      let time = ms(timeout - (Date.now() - anunciar));
      message.reply(`Espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para co`)
    } else {
      db.add(`xp_${message.author.id}`, 1)
      db.add(`cartão_${message.author.id}`, 2000)
      let embed = new Discord.MessageEmbed()
      .setTitle("Recompença de Empresa")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> recebeu **F$ 2,000** volte aqui nas próximas **12 horas** para coletar novamente!`)
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
      message.channel.send(embed)
   
}
}
exports.help = {
  name: "!anunciar"
};

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
Você vai perder **F$ 500**!

**Probalidades**
Perder Tudo - (Perder **FB$ 500**)
Perder Metade - (Perder **FB$ 250**)
Nada! - (**FB$ 500** Devolvido)
Ganhar! - (Ganhar **+FB$ 500**)
Ganhar em Dobro! - (*Ganhar **+FB$ 1,000**)

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
            .setDescription("Você apostou e perdeu **FB$ 500**")
            message.channel.send(embed1)
          }
          if (codApostar == 2){
            db.add(`money_${message.author.id}`, 250)
            let embed2 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta!")
            .setColor("RANDOM")
            .setDescription("Você apostou e perdeu **FB$ 250**")
            message.channel.send(embed2)
          }
          if (codApostar == 3){
            db.add(`money_${message.author.id}`, 500)
            let embed3 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta!")
            .setColor("RANDOM")
            .setDescription("Você apostou e ganhou nada! (**FB$ 500** devolvido)")
            message.channel.send(embed3)
          }
          if (codApostar == 4){
            db.add(`money_${message.author.id}`, 1000)
            let embed4 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta!")
            .setColor("RANDOM")
            .setDescription(`Você apostou e ganhou **FB$ 500!!**`)
            message.channel.send(embed4)
          }
          if (codApostar == 5){
            db.add(`money_${message.author.id}`, 1500)
            let embed5 = new Discord.MessageEmbed()
            .setTitle("Resultado da Aposta!")
            .setColor("RANDOM")
            .setDescription(`Você apostou e ganhou **FB$ 1,000!!**`)
            message.channel.send(embed5)
          }
        })
      })
    }
}
exports.help = {
  name: "!apostar"
};

exports.run = async (bot, message, args) => {
  let embedP = new Discord.MessageEmbed()
  .setTitle("Armas")
  .setColor("RANDOM")
  .setDescription(`Seja bem vindo ao paínel de armas, aqui você pode comprar quais armas você quiser, as armas servem para você poder assaltar empresas!
  
  Aperte ":one:" para ver toda a lista de armas
  Aperte ":two:" para ver os comandos que você pode usar com as armas!`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
  message.channel.send(embedP).then(msg => {
    msg.react("1️⃣");
    msg.react("2️⃣");
    msg.react("◀")
      let coletorOne = msg.createReactionCollector((r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id)
      let coletorTwo = msg.createReactionCollector((r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id)
      let coletorV = msg.createReactionCollector((r, u) => r.emoji.name === "◀" && u.id === message.author.id)
      coletorOne.on("collect", (r) => {
        r.users.remove(message.author)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lista de Armas")
        .setColor("RANDOM")
        .addFields(
          {name: "UZI", value: `Valor: **FB$ 12,000**
          Munição: **FB$ 1,200** por 50 Balas`},
          {name: "M1911", value: `Valor: **FB$ 24,000**
          Munição: **FB$ 2,400** por 50 Balas`},
          {name: "Remington 870", value: `Valor: **FB$ 48,000**
          Munição: **FB$ 4,800** por 50 Balas`},
          {name: "AK-47 (recomendada)", value: `Valor: **FB$ 96,000**
          Munição: **FB$ 9,600** por 50 Balas`},
          {name: "AR-15", value: `Valor: **FB$ 150,000**
          Munição: **FB$ 19,200** por 50 Balas`},
          {name: "FAL", value: `Valor: **FB$ 200,000**
          Munição: **FB$ 30,000** por 50 Balas`},
          {name: "PKM", value: `Valor: **FB$ 210,000**
          Munição: **FB$ 21,000** por 50 Balas`},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        msg.edit(embed)
      })
      coletorTwo.on("collect", (r) => {
        r.users.remove(message.author)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lista de Armas | Comandos")
        .setColor("RANDOM")
        .addFields(
          {name: "UZI", value: `\`!roubar loja-de-cosmeticos\``},
          {name: "M1911", value: `\`!roubar restaurante\``},
          {name: "Remington 870", value: `\`!roubar streaming\``},
          {name: "AK-47", value: `\`!roubar material-de-construcao\``},
          {name: "AR-15", value: `\`!roubar laboratorio\``},
          {name: "FAL", value: `\`!roubar jogos\``},
          {name: "PKM", value: `\`!roubar cervejeria\`
          \`!roubar academia\``},
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
}
exports.help = {
  name: "!armas"
};


exports.run = async (bot, message, args) => {
  if (!args.join("")) return message.reply("Digite um argumento")
const bigtext = figlet.textSync(args.join(""), {
      font: 'Big',
      horizontalLayout: 'universal smushing',
      verticalLayout: 'universal smushing'
    })
message.channel.send(`\`\`\`${bigtext}\`\`\``)
}
exports.help = {
  name: "!ascii"
};

exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
    if (!message.mentions.users.size) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Seu Avatar!")
      .setDescription(`Para baixar esta imagem [Clique Aqui](${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})`)
      .setColor("RANDOM")
      .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
      message.channel.send(embed)
    }
    const avatarList = message.mentions.users.map(user => {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Avatar de ${user.username}`)
      .setDescription(`Para baixar esta imagem [Clique Aqui](${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})`)
      .setColor("RANDOM")
      .setImage(user.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
      return message.channel.send(embed)
    })
    }
exports.help = {
  name: "!avatar"
};

exports.run = async (bot, message, args) => {
         if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":x: | Você precisa da permissão `Banir Membros` para executar esse comando!");
    let motivo = args.slice(1).join(" ") || "Nenhum Motivo Informado"
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(":x: | Eu preciso da permissão `Banir Membros` para executar esse comando!")
    const user = message.mentions.users.first();
    if (!user) return message.reply(":x: | Mencione um usuário para eu banir!")
    if (user.id === "694975753418440844") return message.reply(":x: | Você não pode me banir!");
    if (user.id === message.author.id) return message.reply(":x: | Você quer se banir? Como isso vai funcionar?")
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .ban({
          reason: `Banido por ${message.author.tag} - Motivo: ${motivo}`
        })
        .then(() => {
          message.reply(`:white_check_mark: | O usuário ${user.tag} foi **BANIDO** com sucesso!`);
          db.add(`xp_${message.author.id}`, 1)
        })
        .catch(err => {
          message.reply(`:x: | Não consegui banir esse usuário, erro: \`*${err}*\``);
          console.log(err);
        });
      } else {
        message.reply(":x: | Este usuário não está nesse servidor!");
      }
    } else {
      message.reply(":x: | Você precisa mencionar um usuário para banir!");
    }
}
exports.help = {
  name: "!ban"
};

exports.run = async (bot, message, args) => {
  if (!args.join(" ")) return message.reply(":x: | Você esqueceu de relatar um bug para nossa equipe!")
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
  .setTitle("Seu bug foi relatado com sucesso!")
  .setColor("RANDOM")
  .setDescription(`<@${message.author.id}> seu bug foi relatado! ele será analisado pela nossa equipe de desenvolvimento, e depedendo do erro, você poderá ganhar recompensas!

espero que você não tenha usado o comando de mal jeito, você pode perder R$ ou poderá entrar na BlackList do bot e não poderá usar os comandos!

Bug relatado: \`${args.slice(0).join(" ")}\``)
  .setTimestamp()
  message.channel.send(embed)
  let embed2 = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag} (${message.author.id}) diz ter relatado um bug...`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setColor("RANDOM")
  .setDescription(`\`${args.slice(0).join(" ")}\``)
  .setTimestamp()
  bot.channels.cache.get("859633346169929801").send(embed2)
}
exports.help = {
  name: "!bug"
};

exports.run = async (bot, message, args) => {
  //if (cartão === null) cartão = 0;
  let embedE = new Discord.MessageEmbed()
  .setTitle("Digite os argumentos corretos!")
  .setColor("RANDOM")
  .setDescription(`Calcule algo com minha Calculadora!
Formas disponíves
+ = Adição
- = Subtração
x = Multiplicação
/ = Divisão
Como usar?
\`!calc 1 + 1\`
\`!calc 1 - 1\`
\`!calc 5 x 5\`
\`!calc 5 / 5\``)
  .setTimestamp()
  if (!args[0]) return message.reply(embedE)
  if (!args[1]) return message.reply(embedE)
  if (!args[2]) return message.reply(embedE)
  if (args[1] == "x") {
    let continha = args[0] * args[2]
    let embed = new Discord.MessageEmbed()
    .setTitle("Calculadora")
    .setColor("RANDOM")
    .addFields(
    {name: "Valor 1", value: `\`${args[0]}\``},
    {name: "Conta", value: "`Multiplicação`"},
    {name: "Valor 2", value: `\`${args[2]}\``},
    {name: "Resultado", value: `\`${continha}\``},
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
  }
  if (args[1] == "+") {
    let continha = args[0] + args[2]
    let embed = new Discord.MessageEmbed()
    .setTitle("Calculadora")
    .setColor("RANDOM")
    .addFields(
    {name: "Valor 1", value: `\`${args[0]}\``},
    {name: "Conta", value: "`Adição`"},
    {name: "Valor 2", value: `\`${args[2]}\``},
    {name: "Resultado", value: `\`${continha}\``})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
  }
  if (args[1] == "-") {
    let continha = args[0] - args[2]
    let embed = new Discord.MessageEmbed()
    .setTitle("Calculadora")
    .setColor("RANDOM")
    .addFields(
    {name: "Valor 1", value: `\`${args[0]}\``},
    {name: "Conta", value: "`Subtração`"},
    {name: "Valor 2", value: `\`${args[2]}\``},
    {name: "Resultado", value: `\`${continha}\``})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
  }
  if (args[1] == "/") {
      let continha = args[0] / args[2]
    let embed = new Discord.MessageEmbed()
    .setTitle("Calculadora")
    .setColor("RANDOM")
    .addFields(
    {name: "Valor 1", value: `\`${args[0]}\``},
    {name: "Conta", value: "`Divisão`"},
    {name: "Valor 2", value: `\`${args[2]}\``},
    {name: "Resultado", value: `\`${continha}\``})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
      }
  }
exports.help = {
  name: "!calc"
};

exports.run = async (bot, message, args) => {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: | Você precisa da permissão `Gerenciar Mensagens` para executar esse comando!")
    const amount = args.join(" ");
    
    if (!amount) return message.reply(":x: | Você não informou quantas mensagens devo apagar!");
    if (isNaN(amount)) return message.reply(":x: | O parâmetro informado não é um número!");
    
    if (amount > 100) return message.reply(":x: | Eu só posso apagar 100 Mensagens");
    if (amount < 1) return message.reply(":x: | Apague mais mensagens :~)");
    
    message.delete()

  db.add(`xp_${message.author.id}`, 1)
    
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
      message.channel.bulkDelete(messages
    )})
}
exports.help = {
  name: "!clear"
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`gari_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `!empregos` e saiba mais")
    let ganhar = await db.fetch(`coletar_${message.author.id}`)
    let timeout = 54000000000
    if (ganhar !== null & timeout - (Date.now() - ganhar) > 5000000) {
        let time = ms(timeout - (Date.now() - ganhar));
        message.reply(`Espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 5000000)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como gari e ganhou **R$ 500**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!coletar"
};

exports.help = async (bot, message, args) => {
  let checkEmpresa = db.fetch(`empresa_${message.author.id}`)
    if (checkEmpresa < 1) return message.reply("Você precisa de uma empresa para executar esse comando!")
    let site = db.fetch(`site_${message.author.id}`)
    let timeout = 2592000000 
    let coletarEmpresa = db.fetch(`coletarEmpresa_${message.author.id}`)
    if (coletarEmpresa !== null && timeout - (Date.now() - coletarEmpresa) > 0) {
      let time = ms(timeout - (Date.now() - coletarEmpresa));
      message.reply(`Espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para coletar sua recompensa de empresa!`)
    } else { 
  db.add(`xp_${message.author.id}`, 1)
      db.add(`cartão_${message.author.id}`, 40000)
      let embed = new Discord.MessageEmbed()
      .setTitle("Recompença da Empresa")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> recebeu **FB$ 40,000** volte aqui nos próximos **30 dias** para coletar novamente!`)
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
      message.channel.send(embed)
}
}
exports.help = { 
  name: "!coletar-empresa"
};

exports.run = async (bot, message, args) => {
    let embedP = new Discord.MessageEmbed()
    .setTitle("Loja Principal")
    .setColor("RANDOM")
    .setDescription(`Olá! Seja muito bem vindo(a) a minha lojinha! Encontre o produto certo aqui:
    
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
                {name: "Restaurante", value: "`!comprar 100`"},
                {name: "Loja de Cosméticos", value: "`!comprar 200`"},
                {name: "Cervejaria", value: "`!comprar 300"},
                {name: "Academia", value: "`!comprar 400`"},
                {name: "Laboratório", value: "`!comprar 500`"},
                {name: "Jogos", value: "`!comprar 600`"},
                {name: "Streaming", value: "`!comprar 700`"},
                {name: "Material de Construção", value: "`!comprar 800`"},
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
                {name: "UZI | Munição", value: "`!comprar 900 | !comprar 1600`"},
                {name: "M1911 | Munição", value: "`!comprar 1000 | !comprar 1700`"},
                {name: "Remington 870 | Munição", value: "`!comprar 1100 | !comprar 1800`"},
                {name: "AK-47 | Munição", value: "`!comprar 1200 | `!comprar 1900`"},
                {name: "AR-15 | Munição", value: "`!comprar 1300` | `!comprar 2000`"},
                {name: "FAL | Munição", value: "`!comprar 1400` | `!comprar 2100`"},
                {name: "PKM", value: "`!comprar 1500` | `!comprar 2200`"},
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
        if (money < 120000) return message.reply("Você precisa de **FB$ 120,000** para comprar um restaurante!")
        db.subtract(`cartão_${message.author.id}`, 120000)
        db.add(`restaurante_${message.author.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Comprado!")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> comprou uma empresa de restaurante com sucesso! Ele desbloqueou alguns comandos!`)
        .addFields(
            {name: "Comandos desbloqueados", value: `\`!lucro retaurante\``},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        message.channel.send(embed)
    }
    if (args[0] === "200") {
        let money = db.fetch(`cartão_${message.author.id}`)
        if (money < 70000) return message.reply("Você precisa de **FB$ 70,000** para comprar uma loja de cosméticos")
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
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`médico_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `!emprego`e saíba mais")
    let ganhar = await db.fetch(`consultar_${message.author.id}`)
    let tempo = 21600000
    if (ganhar !== null & tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 800)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como médico e ganhou **FB$ 800**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!consultar"
};

exports.run = async (bot, message, args) => {
cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
                

  let embed = new Discord.MessageEmbed()
  .setTitle("Sobre o bot")
  .addField("**CPU**", `\`${os.cpus().map(i => `${i.model}`)[0]}\``)
  .addField("**USO DE CPU**", `\`${percent.toFixed(2)}%\``)
  .addField("Memória RAM Utilizada / Memórira RAM Total", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)
  .setColor('RANDOM')
  
  message.channel.send(embed)
      })
}
exports.help = {
    name: "!cpu"
};

exports.run = async (bot, message, args) => {
  let timeout = 86400000 
    let amount = 100
    let daily = await db.fetch(`daily_${message.author.id}`)
    if (daily !== null & timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      message.reply(`Você já coletou sua recompensa diária! Colete novamente em **${time.hours}h ${time.minutes}m e ${time.seconds}s!**`)
    } else {
      db.add(`xp_${message.author.id}`, 1)
      db.add(`money_${message.author.id}`, amount)
      db.set(`daily_${message.author.id}`, Date.now())
      let embed = new Discord.MessageEmbed()
      .setTitle("Daily!")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> coletou **FB${amount}** com sucesso! Confira seu Saldo!
Quer mais FB$ e ostentar com seus amigos? Compre Mais FB$! Consulte FIRE BOY#0001 ou [Compre Aqui (FB$200,00)](robloxlink.tk/robux/)`)
      .setTimestamp()
      message.channel.send(embed)
    }
}
exports.help = {
name: "!daily"
};

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Quanto dinheiro eu devo depositar em sua conta?")
    let money = await db.fetch(`money_${message.author.id}`)
    let cartão = await db.fetch(`cartão_${message.author.id}`)
    if (args[0] === "tudo") {
      if (!money) return message.reply("Você não tem dinheiro!")
    db.add(`cartão_${message.author.id}`, money)
    db.subtract(`money_${message.author.id}`, money)
    db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Valor Depositado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> depositou \`F$${money}\` para sua conta do cartão de crédito!`)
    .setTimestamp()
    message.channel.send(embed)
  } else {
    if (money < args[0]) return message.reply("Você não tem o valor informado!")
  if (isNaN(args[0])) return message.reply("O Argumento informado não é um número!")
    db.add(`cartão_${message.author.id}`, args[0])
    db.subtract(`money_${message.author.id}`, args[0])
  db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Valor Depositado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> depositou \`FB$${args[0]}\` para sua conta do cartão de crédito!`)
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.help = {
  name: "!depositar"
};

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão `Administrador` para executar esse comando!")
  let canalW = db.fetch(`canalW_${message.guild.id}`)
  let mensagemW = db.fetch(`mensagemW_${message.guild.id}`)
  let canalL = db.fetch(`canalL_${message.guild.id}`)
  let mensagemL = db.fetch(`mensagemL_${message.guild.id}`)
  let canalC = db.fetch(`cCanal_${message.guild.id}`)
  let mensagemC = db.fetch(`cMensagem_${message.guild.id}`)
  let cargo = db.fetch(`cargo_${message.guild.id}`)
  if (canalW === null) canalW = "Não Ativado"
  if (mensagemW === null) mensagemW = "Não Ativado"
  if (canalL === null) canalL = "Não Ativado"
  if (mensagemL === null) mensagemL = "Não Ativado"
  if (cargo === null) cargo = "Não Ativado"
  if (canalC === null) canalC = "Não Ativado"
  if (mensagemC === null) mensagemC = "Não Ativado"
  db.add(`xp_${message.author.id}`, 1)
  let embedP = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Olá <@${message.author.id}>!
Você está no painel de configuração da Isabela, o que você quer desativar?
:one: - Canal de Welcome (atualmente como <#${canalW}>)

:two: - Mensagem de Bem Vindo (atualmente a mensagem é:
\`${mensagemW}\`)

:three: - Canal de Saída(atualmente como <#${canalL}>)

:four: - Mensagem de Saída(atualmente a mensagem é:
\`${mensagemL}\`)

:five: - AutoRole(atualmente o cargo é: <@&${cargo}>)


*Reaga abaixo descrito acima, o que você quer desativar!*`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embedP).then(msg => {
    msg.react("1️⃣")
    msg.react("2️⃣")
    msg.react("3️⃣")
    msg.react("4️⃣")
    msg.react("5️⃣")
    let filtro1 = (r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1, {max: 1})
    let filtro2 = (r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id;
    let coletor2 = msg.createReactionCollector(filtro2, {max: 1})
    let filtro3 = (r, u) => r.emoji.name === "3️⃣" && u.id === message.author.id;
    let coletor3 = msg.createReactionCollector(filtro3, {max: 1})
    let filtro4 = (r, u) => r.emoji.name === "4️⃣" && u.id === message.author.id;
    let coletor4 = msg.createReactionCollector(filtro4, {max: 1})
    let filtro5 = (r, u) => r.emoji.name === "5️⃣" && u.id === message.author.id;
    let coletor5 = msg.createReactionCollector(filtro5, {max: 1})
    coletor1.on("collect", () => {
      if (canalW === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`canalW_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescription(`O Módulo **Canal de Bem Vindo** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use i!welcome canal <#mencione o canal>`)
      msg.edit(embed)
    })
    coletor2.on("collect", () => {
      if (mensagemW === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`mensagemW_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescription(`O Módulo **Mensagem de Bem Vindo** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use 'welcome mensagem <mensagem>`)
      msg.edit(embed)
    })
    coletor3.on("collect", () => {
      if (canalL === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`canalL_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescription(`O Módulo **Canal de Saída** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use 'leave canal <#mencione o canal>`)
      msg.edit(embed)
    })
    coletor4.on("collect", () => {
      if (mensagemL === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`mensagemL_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescriptin(`O Módulo **Mensagem de Saída** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use 'leave mensagem <mensagem>`)
      msg.edit(embed)
    })
    coletor5.on("collect", () => {
      if (cargo === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`cargo_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescription(`O Módulo **AutoRole** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use 'setautorole <@cargo>`)
      msg.edit(embed)
    })
  })
}
exports.help = {
  name: "!desativar"
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`moto-taxi_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `!empregos` para e saiba mais")
    let ganhar = await db.fetch(`dirigir_${message.author.id}`)
    let timeout = 6300000
    if (ganhar !== null & timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar))
        message.reply(`Para usar os comandos novamente, espere **${time.hours}h ${time.minutes}m e ${time.seconds}s!**`)
    } else {
        db.add(`cartão_${message.author.id}`, 150)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como moto-táxi e recebeu **FB$ 150**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!dirigir"
};

exports.run = async (bot, message, args) => {
  let random = "RANDOM"
  let embed = new Discord.MessageEmbed()
  .setTitle("Empregos")
  .setColor("RANDOM")
  .setDescription(`Seja Bem Vindo a **Lista de Empregos**
Você pode adquirir seu emprego aqui. Quanto maior o emprego, mais ganhos
Aperte em "1️⃣" para ver os empregos iniciais
Aperte em "2️⃣" para ver os 'melhores empregos'
Aperte em "3️⃣" para ver os comandos dos empregos

Para se juntar a uma empresa, use \`!juntar <nome da empresa>\``)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
  message.channel.send(embed).then(msg => {
    msg.react("1️⃣")
    msg.react("2️⃣")
    msg.react("3️⃣")
    msg.react("◀")
    let filtro1 = (r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id;
    let filtro2 = (r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id;
    let filtro3 = (r, u) => r.emoji.name === "3️⃣" && u.id === message.author.id;
    let filtroV = (r, u) => r.emoji.name === "◀" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1)
    let coletor2 = msg.createReactionCollector(filtro2)
    let coletor3 = msg.createReactionCollector(filtro3)
    let coletorV = msg.createReactionCollector(filtroV)
    coletor1.on("collect", (r) => {
      let embed1 = new Discord.MessageEmbed()
      .setTitle("Lista dos empregos | Iniciais")
      .setColor("RANDOM")
      .addFields(
      {name: "Entregador de Pizza", value: `Nível Requirido: 0
Ganhos por trabalho: **RS 100**
Tempo para trabalhar novamente: **1 Hora e 30 Minutos**`},
        {name: "Gari", value: `Nível Requirido: 0
Ganhos por trabalho: **R$ 500**
Tempo para trabalhar novamente: **3 Horas**`},
        {name: "Frentista", value: `Nível Requirido: 0
Ganhos por trabalho: **R$ 200**
Tempo para trabalhar novamente: **2 Horas**`},
        {name: "Moto Taxi", value: `Nível Requirido: 0
Ganhos por trabalho: **R$ 150**
Tempo para trabalhar novamente: **1 Hora e 45 Minutos**`},
        {name: "Fazendeiro", value: `Nível Requirido: 0
Ganhos por trabalho: **R$ 300**
Tempo para trabalhar novamente: **2 Horas e 30 Minutos**`}
      )
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
      msg.edit(embed1)
      r.users.remove(message.author)
    })
    coletor2.on("collect", (r) => {
      let embed2 = new Discord.MessageEmbed()
      .setTitle("Lista dos empregos | Melhores")
      .setColor("RANDOM")
      .addFields(
      {name: "Policial", value: `Nível Requirido: 15
Ganhos por trabalho: **R$ 700**
Tempo para trabalhar novamente: **5 Horas**`},
      {name: "Carteiro", value: `Nível Requirido: 10
Ganhos por trabalho: **R$ 650**
Tempo para trabalhar novamente: **4 Horas e 30 Minutos**`},
      {name: "Barman", value: `Nível Requirido: 5
Ganhos por trabalho: **F$ 600**
Tempo para trabalhar novamente: **4 Horas**`},
      {name: "Médico", value: `Nível Requirido: 25
Ganhos por trabalho: **F$ 800**
Tempo para trabalhar: **6 Horas**`},
      {name: "Advogado", value: `Nível Requirido: 20
Ganhos por trabalho: **F$ 750**
Tempo para trabalhar novamente: **5 Horas e 30 Minutos**`},
      )
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
      msg.edit(embed2)
      r.users.remove(message.author)
    })
    coletor3.on("collect", (r) => {
      let embed3 = new Discord.MessageEmbed()
      .setTitle("Lista de empregos | Comandos")
      .setColor(random)
      .addFields(
      {name: "Entregador de Pizza", value: `\`'entregar\``},
      {name: "Gari", value: `\`'coletar\``},
      {name: "Frentista", value: `\`'abastecer\``},
      {name: "Moto Taxi", value: `\`'dirigir\``},
      {name: "Fazendeiro", value: `\`'plantar\``},
      {name: "Policial", value: `\`'patrulhar\``},
      {name: "Carteiro", value: `\`'mercadoria\``},
      {name: "Barman", value: `\`'vender\``},
      {name: "Médico", value: `\`'consultar\``},
      {name: "Advogado", value: `\`'prender\``},
      )
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
      msg.edit(embed3)
      r.users.remove(message.author)
      })
    coletorV.on("collect", (r) => {
      msg.edit(embed)
      r.users.remove(message.author)
    })
  })
}
exports.help = {
  name: "!empregos"
};

exports.run = async (bot, message, args) => {
  let title = "Empresas"
  let color = "CDFF00"
  let description = `Seja Bem vindo a **Lista de Empresas**
Você pode adquirir sua empresa aqui, quanto mais cara a empresa, mais ganhos você tem!
Aperte em 🏬 para ver as empresas

**Quer comprar uma empresa?**
Use !comprar (ID do item)`
let title1 = "Lista das Empresas"
let color1 = "RANDOM"
let fieldTitle1_1 = "Restaurante"
let filedDescription1_2 = `Valor: **F$ 120,000**
Ganhos: **FB$ 12,000** a cada **7 Horas**
ID: 100`
let fieldTitle2_1 = "Loja de Cosméticos"
let fieldDescription2_1 = `Valor: **F$ 70,000**
Ganhos: **FB$ 7,000** a cada **7 Horas**
ID: 200`
let fieldTitle3_1 = "Cervejaria"
let fieldDescription3_1 = `Valor: **F$ 200,000**
Ganhos: **FB$ 20,000** a cada **7 Horas**
ID: 300`
let fieldTitle4_1 = "Academia"
let fieldDescription4_1 = `Valor: **F$ 200,000**
Ganhos: **FB$ 20,000** a cada **7 Horas**
ID: 400`
let fieldTitle5_1 = "Laboratório"
let fieldDescription5_1 = `Valor: **F$ 180,000**
Ganhos: **FB$ 18,000** a cada **7 Horas**
ID: 500`
let fieldTitle6_1 = "Jogos"
let fieldDescription6_1 = `Valor: **F$ 190,000**
Ganhos: **FB$ 19,000** a cada **7 Horas**
ID: 600`
let fieldTitle7_1 = "Streaming"
let fieldDescription7_1 = `Valor: **F$ 150,000**
Ganhos: **FB$ 15,000** a cada **7 Horas**
ID: 700`
let fieldTitle8_1 = "Material de Construção"
let fieldDescription8_1 = `Valor: **F$ 170,000**
Ganhos: **FB$ 17,000** a cada **7 Horas**
ID: 800`
let embedP = new Discord.MessageEmbed()
.setTitle(title1)
.setColor(color)
.setDescription(description)
.setTimestamp()
.setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
message.channel.send(embedP).then(msg => {
  msg.react("🏬")
  msg.react("◀")
  let filtro1 = (r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id;
  let coletor1 = msg.createReactionCollector(filtro1)
  let filtro2 = (r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id;
  let coletor2 = msg.createReactionCollector(filtro2)
  let coletorV = msg.createReactionCollector((r, u) => r.emoji.name === "◀" && u.id === message.author.id)
  coletor1.on("collect", (r) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Lista de Empresas")
    .setColor(color)
    .addFields(
    {name: fieldTitle1_1, value: filedDescription1_2},
    {name: fieldTitle2_1, value: fieldDescription2_1},
    {name: fieldTitle3_1, value: fieldDescription3_1},
    {name: fieldTitle4_1, value: fieldDescription4_1},
    {name: fieldTitle5_1, value: fieldDescription5_1},
    {name: fieldTitle6_1, value: fieldDescription6_1},
    {name: fieldTitle7_1, value: fieldDescription7_1},
    {name: fieldTitle8_1, value: fieldDescription8_1},
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    msg.edit(embed)
    r.users.remove(message.author)
  })
  coletorV.on("collect", (r) => {
    msg.edit(embedP)
    r.users.remove(message.author)
  })
  coletor2.on("collect", (r) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Lista de Empresas | Comandos")
    .setColor("RANDOM")
    .addFields(
    {name: "Restaurante", value: `\`!lucro restaurante\``},
      {name: "Loja de Cosméticos", value: `\`!lucro loja-de-cosmeticos\``},
      {name: "Cervejaria", value: `\`!lucro cervejaria\``},
      {name: "Academia", value: `\`!lucro academia\``},
      {name: "Laboratório", value: `\`!lucro laboratorio\``},
      {name: "Jogos", value: `\`!lucro jogos\``},
      {name: "Streaming", value: `\`!lucro streaming\``},
      {name: "Material de Construção", value: `\`!lucro material-de-construção\``},
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    msg.edit(embed)
    r.users.remove(message.author)
  })
})
}
exports.help = {
  name: "!empresas"
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`pizza_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `!emprego`e saíba mais")
    let ganhar = await db.fetch(`entregar_${message.author.id}`)
    let tempo = 5400000
    if (ganhar !== null & tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 100)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como entregador de pizza e ganhou **F$ 100**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!entregar"
};

exports.run = async (bot, message, args) => {
  let autorizado = message.author.id == "763398072587386912"
      if (!autorizado) return message.reply("Esse comando só é disponível para meus desenvolvedores!")
      if (autorizado) {
        try{
          if(!args.join(" ")) return message.reply("O meu dono, esqueceu de digitar um argumento!")
          let code = eval(args.join(" "));
          
          if (typeof code !== "string") code = require("util").inspect(code, { depth: 0 });
          let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .addField(":envelope_with_arrow: Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``)
          .addField(":triangular_flag_on_post: Saída", `\`\`\`js\n${code}\n\`\`\``)
          message.reply(embed)
        } catch(e) {
          message.reply(`\`\`\`js\n${e}\n\`\`\``);
        }
      }
}
exports.help = {
  name: "!eval"
};

exports.run = async (bot, message, args) => {
  let permissão = message.author.id == "687742841451053107"
     if (!permissão) return message.reply("Esse comando só pode ser utilizado por pessoas autorizadas!")
     if (permissão) {
    if (!args[0]) return message.reply("Você não informou nenhum argumento!")
    if (isNaN(args[0])) return message.reply('O Argumento informado não é um número!')
    
    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Adição de Saldo!")
    .setAuthor(`${user.username} Ganhou Saldo!`, `${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`) // ${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> deu F$${args[0]} para ${user} !`)
    .setTimestamp()
    message.channel.send(embed)
     db.add(`money_${user.id}`, args[0])
     }
}
exports.help = {
  name: "!give"
};

exports.run = async (bot, message, args) => {
      let embedP = new Discord.MessageEmbed()
      .setTitle("Loja Online!")
      .setColor("RANDOM")
      .setDescription(`Bem vindo a minha loja online!
Não temos muitos produtos... Mas, sempre com sua sugestão, podem aumentar nossa loja!

**Comprar Empresa** - *Compre uma empresa e seja um bilionário!* Valor: **F$ 50,000**`)
      .setTimestamp()
      .setFooter(`Aperte em "▶" para ver os comandos| Executado por ${message.author.tag}`)
  message.channel.send(embedP).then(msg => {
    msg.react("◀")
    msg.react("▶")
    let filtro = (reaction, usuario) => reaction.emoji.name === "▶" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro)
    let filtroV = (reaction, usuario) => reaction.emoji.name === "◀" && usuario.id === message.author.id;
    let coletorV = msg.createReactionCollector(filtroV)
    
    coletor.on("collect", (reaction) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Comandos | Loja Online")
      .setColor("RANDOM")
      .setDescription(`Todos os Comandos!

**Comprar Empresa** - \`!comprar-empresa\`

**Notebook** - \`!comprar-notebook\``)
      .setTimestamp()
      .setFooter(`Aperte em "◀" para voltar a tela iniciar | Executado por ${message.author.tag}`)
      msg.edit(embed)
      reaction.users.remove(message.author)
    })
    coletorV.on("collect", (r) => {
      msg.edit(embedP)
      r.users.remove(message.author)
    })
    
  })
}
exports.help = {
  name: "!internet"
};


exports.run = async (bot, message, args) => {
  let timeout = 86400000
  let juntar = await db.fetch(`juntar_${message.author.id}`)
  if (juntar !==  null & timeout - (Date.now() - juntar) > 0) {
    let time = ms(timeout - (Date.now() - juntar));
    message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`)
  } else {
  if (!args[0]) return message.reply("Digite o nome do emprego!")
  if (args[0] === "entregador-de-pizza") {
    db.add(`pizza_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é entregador de pizza!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`!entregar`")
    .setTimestamp()
    message.channel.sned(embed)
  }
  if (args[0] === "gari") {
    db.add(`gari_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é gari!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`!coletar`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "frentista") {
    db.add(`frentista_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é frentista!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`!abastecer`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "moto-taxi") {
    db.add(`moto-taxi_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é moto-taxi`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`!dirigir`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "fazendeiro") {
    db.add(`fazendeiro_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é fazendeiro!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`!plantar`")
    .setTimestamp()
    message.channel.send(embed)
}
  if (args[0] === "policial") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 15) return message.reply("Você precisa ter nível **15** para executar esse comando!")
    db.add(`policial_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é policial!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`!patrulhar`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "carteiro") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 10) return message.reply("Você precisa ter nível **10** para executar esse comando!")
    db.add(`carteiro_${message.author.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é carteiro!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`!mercadoria`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "barman") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 5) return message.reply("Você precisa ter nível **5** para executar esse comando!")
    db.add(`barman_${message.author.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é barman`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`!vender`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "medico") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 25) return message.reply("Você precisa ter nível **25** para executar esse comando!")
    db.add(`médico_${message.author.id}`)
    let embed = new Discord.MessageEmbed
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é médico`)
    .addField("Com isso, ele desbloqueou alguns comandos!", "`!consultar`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "advogado") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 20) return message.reply("Você precisa ter nível **20** para executar esse comando!")
    db.add(`advogado_${message.author.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é advogado`)
    .addField("Com isso, ele desbloqueou alguns comandos!", "`!prender`")
    .setTimestamp()
    message.channel.send(embed)
  }
  db.set(`juntar_${message.author.id}`, Date.now())
  }
}
exports.help = {
  name: "!juntar"
};

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x: | Você precisa da permissão `Expulsar Membros` para executar esse comando!");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply(":x: | Eu preciso da permissão `Expulsar Membros` para executar esse comando!");
    const user = message.mentions.users.first();
    if (user.id === "694975753418440844") return message.reply(":x: | Algo deu errado... :~)");
    if (user.id === message.author.id) return message.reply(":x: | Calma lá né? você quer se expulsar?")
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .kick
        .then(() => {
          message.reply(`:white_check_mark: | O usuário ${user.tag} foi **EXPULSO** com sucesso!`)
          db.add(`xp_${message.author.id}`, 1)
        })
        .catch(err => {
          message.reply(`:x: | Perdão, mas eu não consegui expulsar esse usuário, erro: \`${err}\``)
          console.log(err);
        });
      } else {
        message.reply(":x: | Este usuário não está nesse servidor!")
      }
    } else {
      message.reply(":x: | Você precisa mencionar um usuário para expulsar!")
    }
}
exports.help = {
  name: "!kick"
};

exports.run = async (bot, message, args) => {
      const user = message.mentions.users.first();
    if (!user) return message.reply(":x: | Você esqueceu de mencionar um usuário para enviar um beijo!");
    if (user.id === "694975753418440844") return message.reply(":x: | Você não pode beijar em mim, mas eu aceito você como amigo =)");
    let embedC = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("Carregando comando!")
    let msgg = await message.channel.send(embedC);
  db.add(`xp_${message.author.id}`, 1)
    fetch ("https://nekos.life/api/v2/img/kiss")
    .then(res => res.json())
    .then(json => {
      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> deu um **BEIJO** em ${user}`)
      .setImage(json.url)
      msgg.edit(embed)
    })
}
exports.help = {
  name: "!kiss"
};

exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão `Administrador` para executar esse comando!")
  let embedE = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setTitle("Escreva o argumento necessário!")
  .setColor("#FF0000")
  .setDescription(`Como configurar a **Saída**?
\`'leave canal <#mencione o canal aqui>>\`
\`'leave mensagem <mensagem quando o usuário sair do servidor>\``)
  .setTimestamp()
  if (!args[0]) return message.reply(embedE)
  if (args[0] == "canal") {
    db.add(`xp_${message.author.id}`, 1)
    let vCanal = db.fetch(`canalL_${message.guild.id}`)
    let mCanal = message.mentions.channels.first()
    if (!mCanal) return message.reply("Você esqueceu de mencionar um canal!")
    db.set(`canalL_${message.guild.id}`, mCanal.id)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ativou o módulo **Canal de Saída** | Quando um usuário sair do servidor, eu vou enviar uma mensagem no ${mCanal}`)
    message.channel.send(embed)
  }
  if (args[0] == "mensagem") {
    db.add(`xp_${message.author.id}`, 1)
    let vMensagem = db.fetch(`mensagemL_${message.guild.id}`)
    let simulação = args.slice(1).join(" ")
    let placegolder = simulação.replace("{user}", `${message.autor.tag}`).replace("{guild}", `${message.guild.name}`).replace("{membros}", `${message.guild.memberCount}`)
    let embedE = new Discord.MessageEmbed()
    .setTitle("Defina a Mensagem de Saída!")
    .setColor("RANDOM")
    .setDescription(`Defina a Mensagem de Saída!
**Parametros Disponíveis:**
{user} - Mostra o usuário, sem mencionar!
{guild} - O Nome do servidor
{membros} - O Total de Membros do Servidor!`)
    if (!args.slice(1).join(" ")) return message.reply(embedE)
    db.set(`mensagemL_${message.guild.id}`, args.slice(1).join(" "))
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ativou o módulo **Mensagem do Contador**`)
    .addFields(
    {name: "Mensagem adicionada", value: `\`${args.slice(1).join(" ")}\``},
      {name: "Como irá ficar", value: `\`${placegolder}\``},
      )
    message.channel.send(embed)
  }
}
exports.help = {
  name: "!leave"
};

exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply("Parece que eu não encontrei sua empresa, lembre-se, em vez dos 'espaços' coloque '-'")
    let timeout = 25200000
    let lucro = await db.fetch(`lucro_${message.author.id}`)
    if (lucro !== null & timeout - (Date.now() - lucro) > 0) {
        let time = ms(timeout - (Date.now() - lucro));
        message.reply(`Utilize esse comando novamente em **${time.hours}h ${time.minutes}m e ${time.seconds}s!**`)
    } else {
    if (args[0] === "restaurante") {
        let restaurante = db.fetch(`restaurante_${message.author.id}`)
        if (restaurante < 1) return message.reply("Você precisa de um restaurante para executar esse comando!")
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
        let jogos = db.fetch(`jogos_${message.author.id}`)
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
};

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Digite um nick válido do Minecraft!")
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle(`Skin de ${args[0]}`)
  .setColor("RANDOM")
  .setDescription(`Aperte [aqui](https://mc-heads.net/download/${args[0]}) para fazer o download!`)
  .setImage(`https://mc-heads.net/body/${args[0]}`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
}
exports.help = {
  name: "!mcbody"
};

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Insira um nick válido do Minecraft!")
  let embed = new Discord.MessageEmbed()
  .setTitle(`Cabeça de ${args[0]}`)
  .setColor("RANDOM")
  .setDescription(`Aperte [aqui](https://mc-heads.net/download/${args[0]}) para fazer o download!`)
  .setImage(`https://mc-heads.net/head/${args[0]}`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
}
exports.help = {
  name: "!mchead"
};

exports.run = async (bot, message, args) => {
    if (!args.join(" ")) return message.reply("Defina sua Mensagem para mostrar no `!userinfo`! (Máximo 100 Caracteres)")
    if (args.join(" ") > 100) return message.reply("No máximo 100 Caracteres!")
    db.set(`mensagem_${message.author.id}`, args.join(" "))
    let embed = new Discord.MessageEmbed()
    .setTitle("Sua Mensagem foi definida!")
    .setColor("RANDOM")
    .setDescription(`Sua Mensagem foi definida para \`${args.join(" ")}\``)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
}
exports.help = {
    name: "!mensagem"
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`carteiro_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `!emprego`e saíba mais")
    let ganhar = await db.fetch(`mercadoria_${message.author.id}`)
    let tempo = 16200000
    if (ganhar !== null & tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 650)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como carteiro e ganhou **F$ 650**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!mercadoria"
};

exports.run = async (bot, message, args) => {
  let embedE = new Discord.MessageEmbed()
  .setTitle("Minerador")
  .setColor("RANDOM")
  .setDescription(`Olá! Seja Bem Vindo ao **Painel de Mineração** da **Isabela!**

Aqui, onde você compra seu minerador, ou pega seu minerador inicial gratuito

para comprar um minerador (ou pegar gratuitamente) use \`i!minerador [LVL-DO-MINERADOR]\`

Não sabe como ganhar LvL´s? Execute o comando \`i!levels\`e e saiba mais!`)
  .addFields(
  {name: "Minerador Gratuito", value: `Valor: \`F$ 0\`
Gasolina Requirida: \`50 Litros\`
Requer Nível: \`0\`
Comando: \`i!minerador gratuito\``},
  {name: "Minerador LvL 1", value: `Valor: \`F$ 100\`
Gasolina Requirida: \`100 Litros\`
Requer Nível: \`5\`
Comando: \`i!minerador lvl1\``},
  {name: "Minerador LvL 2", value: `Valor: \`F$ 200\`
Gasolina Requirida: \`150 Litros\`
Requer Nível: \`10\`
Comando: \`i!minerador lvl2\``},
  {name: "Minerador LvL 3", value: `Valor: \`F$ 300\`
Gasolina Requirida: \`200 Litros\`
Requer Nível: \`15\`
Comando: \`i!minerador lvl3\``},
    {name: "Minerador LvL 4", value: `Valor: \`F$ 400\`
Gasolina Requirida: \`250 Litros\`
Requer Nível: \`20\`
Comando: \`i!minerador lvl4\``},
    {name: "Minerador LvL 5", value: `Valor: \`F$ 500\`
Gasolina Requirida: \`300 Litros\`
Requer Nível: \`25\`
Comando: \`i!minerador lvl5\``},
  )
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  if (!args[0]) return message.reply(embedE)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!minerador"
};

exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
   function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `${days.padStart(1, 0)} dias, ${hrs.padStart(2, 0)} horas, ${min.padStart(2, 0)} minutos e ${sec.padStart(2, 0)} segundos!`
  }
    let embed = new Discord.MessageEmbed()
    .setTitle("Meu tempo Online! 💤")
    .setColor("RANDOM")
    .setDescription(`Eu estou acordado desde ${duration(bot.uptime)}`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.channel.send(embed)
}
exports.help = {
  name: "!ontime"
};

exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.author;
    let premium = db.fetch(`classic_${user.id}`)
    let gold = db.fetch(`gold_${user.id}`)
    let diamond = db.fetch(`diamond_${user.id}`)
    message.reply(`${premium} | ${gold} | ${diamond}`)
}
exports.help = {
  name: "!p"
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`policial_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `!emprego`e saíba mais")
    let ganhar = await db.fetch(`patrulhar_${message.author.id}`)
    let tempo = 18000000
    if (ganhar !== null & tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 700)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como policial e ganhou **F$ 700**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!patrulhar"
};

exports.run = async (bot, message, args) => {
     let user = bot.users.cache.get(args[0]) || message.mentions.users.first()
    if (!args[1]) return message.reply("Quanto de pagamento eu devo enviar?")
  if (user.id === message.author.id) return message.reply("Você não pode enviar um pagamento para si!")
    if (isNaN(args[1])) return message.reply("O Argumento informado não é um número!")
    let money = await db.fetch(`money_${message.author.id}`)
    if (money < args[1]) return message.reply("Você não tem o valor informado!")
    if (!user) return message.reply("Pra quem eu devo enviar o pagamento?")
  if (args[1] <= 1) return message.reply("Você não pode enviar apenas F$ 1!")
  if (args[1] >= 100) {
    var taxa1 = args[1] - 20
    message.channel.send(`Você está prestes a dar **F$ ${args[1]}** para ${user}
Ele irá receber **F$ ${taxa1}** (Taxa de F$ 20)
Aperte em '✅' para confirmar!`).then(msg => {
      msg.react("✅")
      let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(filtro, {max: 1, time: 15000})
      coletor.on("collect", () => {
        db.add(`xp_${message.author.id}`, 1)
        db.add(`money_${user.id}`, taxa1)
        db.subtract(`money_${message.author.id}`, args[1])
        msg.edit(`${user} recebeu **F$${taxa1}** de <@${message.author.id}>`)
      })
    })
  } else {
    var taxaP = args[1] - 1
        message.channel.send(`Você está prestes a dar **F$ ${args[1]}** para ${user}
Ele irá receber **F$ ${taxaP}** (Taxa de 1%)
Aperte em '✅' para confirmar!`).then(msg => {
      msg.react("✅")
      let filtro = (reaction, usuario) => reaction.emoji.name === "✔" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(filtro, {max: 1, time: 15000})
      coletor.on("collect", () => {
        db.add(`xp_${message.author.id}`, 1)
        db.add(`money_${user.id}`, taxaP)
        db.subtract(`money_${message.author.id}`, args[1])
        msg.edit(`${user} recebeu **F$${taxaP}** de <@${message.author.id}>`)
      })
    })
  }

}
exports.help = {
  name: "!pay"
};

exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Carregando Comando...");
  db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Pong! :ping_pong:")
    .setColor("RANDOM")
    .setDescription(`Veja o meu tempo de resposta!`)
    .addFields(
    {name: "<:bot:538163542260580352> Latência", value: `__**${m.createdTimestamp - message.createdTimestamp} MS**__`},
    {name: "<a:cd:651503387015381002> Latência da API", value: `__**${Math.round(bot.ws.ping)} MS**__`},
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    m.edit(embed)
}
exports.help = {
  name: "!ping"
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`fazendeiro_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `!empregos` e saiba maís")
    let ganhar = await db.fetch(`plantar_${message.author.id}`)
    let timeout = 9000000
    if (ganhar !== null & timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar));
        message.reply(`Para executar esse comando, espere **${time.hours}h ${time.minutes}m ${time.seconds}s!**`)
    } else {
        db.add(`cartão_${message.author.id}`, 300)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como fazendeiro e ganhou **F$ 300**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!plantar"
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`advogado_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `!emprego`e saíba mais")
    let ganhar = await db.fetch(`prender_${message.author.id}`)
    let tempo = 4680000
    if (ganhar !== null & tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 750)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como advogado e ganhou **F$ 750**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!prender"
};

exports.run = async (bot, message, args) => {
   let timeout = 259200000
    let rp = db.fetch(`rp_${message.author.id}`)
    if (rp !== null && timeout - (Date.now() - rp) > 0) {
      let time = ms(timeout - (Date.now() - rp));
      message.reply(`Você já coletou sua recompensa PREMIUM, colete novamente em **${time.days}d ${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
    } else {
      let premium = db.fetch(`diamond_${message.author.id}`)
      let embedErro = new Discord.MessageEmbed()
      .setTitle("Erro!")
        .setColor("#FF0000")
       .setDescription(`<@${message.author.id}>, Você não é um assinante PREMIUM! para ter todos os benefícios, doe R$19,99 [PayPal](https://paypal.me/ChromaMC/) // [Robux](https://robloxlink.tk/elite/)`)
      if (premium < 1) return message.reply(embedErro)
      db.set(`rp_${message.author.id}`, Date.now())
      db.add(`xp_${message.author.id}`, 1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Recompença Premium Coletada!")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> coletou **F$ 5,000** por causa da sua assinatura PREMIUM`)
      .setTimestamp()
      message.channel.send(embed)
      db.add(`money_${message.author.id}`, 5000)
    }
}
exports.help = {
  name: "!recompensa-premium"
};

exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply("Me informe o nome da empresa! (se tiver espaço, coloque `-`")
    let timeout = 172800000
    let roubar = await db.fetch(`roubar_${message.author.id}`)
    if (roubar !== null & timeout - (Date.now(2000) - roubar) > 0) {
        let time = ms(timeout - (Date.now(2000) - daily));
        message.reply(`Aguarde **${time.days}d ${time.hours}h ${time.minutes}m e ${time.seconds}s!**`)
    } else {
        if (args[0] === "loja-de-cosmeticos") {
            let arma = db.fetch(`uzi_${message.author.id}`)
            let munição = db.fetch(`Muzi_${message.author.id}`)
            if (arma < 1) return message.reply("Você precisa de uma **UZI** para executar esse comando!")
            if (munição < 10) return message.reply("Você precisa de Munição! Compre usando `!comprar`")
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
            if (munição < 10) return message.reply("Você precisa de Munição! Compre usando `comprar`")
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
            if (munição < 10) return message.reply("Você precisa de **Munição!** Compre usando `comprar`")
            db.add(`money_${message.author.id}`, 105000)
            db.subtract(`Mremington870_${message.author.id}`, 10)
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
            if (munição < 10) return message.reply("Você precisa de **Munição** Compre usando `comprar`")
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
            if (munição < 10) return message.reply("Você precisa de uma **Munição!** Compre usando `!comprar`")
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
            if (munição < 10) return message.reply("Você precisa de uma **Munição!** Compre usando `!comprar`")
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
            if (munição < 10) return message.reply("Você precisa de uma **Munição!** Compre uma usando `!comprar`")
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
            if (munição < 10) return message.reply("Você precisa de uma **Munição!** Compre uma usando `!comprar`")
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
    name: "!roubar"
};

exports.run = async (bot, message, args) => {
  if (message.author.id === "394076891801190410") {
      let user = message.mentions.users.first()
      if (!user) return message.reply("Quem deverá perder o Premium?")
      db.subtract(`premium_${user.id}`, 2)
      message.reply(`${user} agora não é mais premium!`)
    }
}
exports.help = {
  name: "!rp"
};

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Quanto de dinheiro eu devo pegar?")
    let money = await db.fetch(`money_${message.author.id}`)
    let cartão = await db.fetch(`cartão_${message.author.id}`)
    if (args[0] === "tudo") {
      if (!cartão) return message.reply("Você não tem saldo no cartão!")
    db.add(`money_${message.author.id}`, cartão)
    db.subtract(`cartão_${message.author.id}`, cartão)
    db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Valor Sacado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> sacou \`F$${cartão}\` para seu saldo em mãos!`)
    .setTimestamp()
    message.channel.send(embed)
  } else {
    if (cartão < args[0]) return message.reply("Você não tem o valor informado!")
  if (isNaN(args[0])) return message.reply("O Argumento informado não é um número!")
    db.add(`money_${message.author.id}`, args[0])
    db.subtract(`cartão_${message.author.id}`, args[0])
  db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Valor Sacado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> sacou \`F$${args[0]}\` para seu saldo em mãos!`)
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.help = {
  name: "!sacar"
};

exports.run = async (bot, message, args) => {
  let user = bot.users.cache.get(args[0]) || message.mentions.users.first() || message.author;
    let money = await db.fetch(`money_${user.id}`)
    if (money === null) money = 0;
     let cartão = await db.fetch(`cartão_${user.id}`)
     if (cartão === null) cartão = 0;
    db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Saldo")
    .setAuthor(`${user.username}`, `${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`) // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    .setColor("0EFEA7")
    .setDescription(`O Saldo de ${user}

:dollar: Saldo em Mãos: \`R${money}\`

:credit_card: Saldo no Cartão: \`R${cartão}\``)
    .setTimestamp()
    message.channel.send(embed)
  }
exports.help = {
  name: "!saldo"
};

exports.run = async (bot, message, args) =>  {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você precisa da permissão `Gerenciar Servidor` para executar esse comando!")
  if (!args.join(" ")) return message.reply(":x: | O que devo dizer?")
  if (args[0] == "embed") {
message.delete()
    if (!args.slice(1).join(" ")) return message.reply(":x: | O que devo dizer?")
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    .setColor("RANDOM")
    .setDescription(`${args.slice(1).join}`)
    .setTimestamp()
    message.channel.send(embed)
  } else {
    message.channel.send(`${args.slice(0).join("")}`)
  }
    db.add(`xp_${message.author.id}`, 1 `xp_${message.author.id}`, 2)
  

}
exports.help = {
  name: "!say"
};

exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Icone do servidor: ${message.guild.name}`)
  .setColor("RANDOM")
  .setDescription(`Clique [aqui](${message.guild.iconURL({dynamic: true, size: 1024, format: "png"})}) para fazer o download da imagem!`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setImage(message.guild.iconURL({dynamic: true, size: 1024, format: "png"}))
  message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!servericon"
};

exports.run = async (bot, message, args) => {
  let servidor = bot.guilds.cache.get(args[0]) || message.guild;
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle(`Informações do Servidor: ${servidor.name}`)
  .setThumbnail(servidor.iconURL({dynamic: true, size: 1024, format: "png"}))
  .addFields(
{name: "Nome do Servidor", value: `\`${servidor.name}\``},
    {name: "ID Do Servidor", value: `\`${servidor.id}\``},
    {name: "Dono do Servidor", value: `\`${servidor.owner.user.tag}\``},
    {name: "Quantidade de Membros", value: `\`${servidor.memberCount}\``},
    {name: "Criado em", value: `\`${moment.utc(servidor.createdAt).format("LLL")}\``},
  )
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
  }
exports.help = {
  name: "!serverinfo"
};

  exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão `Administrador` para executar esse comando!")
    let Cargo = db.fetch(`cargo_${message.guild.id}`)
    let mCargo = message.mentions.roles.first()
    if (!mCargo) return message.reply("Você esqueceu de mencionar um cargo para setar o autorole!")
    db.set(`cargo_${message.guild.id}`, mCargo.id)
    db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
  .setColor("RANDOM")
  .setDescription(`<@${message.author.id}> ativou o módulo **AutoRole!** | Quando um usuário entrar, ele vai receber o cargo ${mCargo} !`)
  message.channel.send(embed)
  }
  exports.help = {
    name: "!setautorole"
  };

exports.run = async (bot, message, args) => {
  const user = message.mentions.users.first();
  let embedC = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("Carregando comando!")
    let msgg = await message.channel.send(embedC);
    if (!user) return message.reply(":x: | Você esqueceu de mencionar um usuário para enviar um tapa!")
  db.add(`xp_${message.author.id}`, 1)
    fetch ("https://nekos.life/api/v2/img/slap")
    .then(res => res.json())
    .then (json => {
      let embedisa = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Como você vai se safar após bater em mim? <@694975753418440844> deu um **TAPA** bem dado em <@${message.author.id}>`)
      .setImage(json.url)
      .setFooter("Seu feio >:(")
      if (user.id === "694975753418440844") return message.reply(embedisa)
      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> deu um **TAPA** em ${user}`)
      .setImage(json.url)
      .setFooter("")
      msgg.edit(embed)
    })
}
exports.help = {
  name: "!slap"
};

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(":x: | Você precisa da permissão `Gerenciar Canais` para executar esse comando!")
    var time = message.content.split(" ").slice(1).join(" ")
    if(isNaN(time)) return message.reply(":x: | O Argumento informado não é um número! (coloque o tempo em segundos!)")
    if(!time) return message.reply(":x: | Me informe um tempo em segundos para setar o slowmode!")
  db.add(`xp_${message.author.id}`, 1)
    message.channel.setRateLimitPerUser(time)
    message.reply(":white_check_mark: | SlowMode setado com sucesso! Confira as configurações do canal!")
}
exports.help = {
 name: "!sm"
};

exports.run = async (bot, message, args) => {
     let embed = new Discord.MessageEmbed()
    .setTitle("Mais Sobre Mim =)")
    .setColor("00FF6C")
    .setDescription(`
Meu nome: **Banco**
Meu criador: **FIRE BOY#0001**
Linguagem: [JavaScript](https://js.org/)
Canal do Youtube: [Inscreva-se!](https://youtube.fireboy.ml/)
Host: [DisCloud](https://discloudbot.com) | [Glitch](https://glitch.com/)
Site Oficial: [Entre aqui](https://fireboy.ml/)
Versão do Bot: **8.0.0:0 PREMIUM**

Data de Nascimento: **06/07/2021**`)
    .setTimestamp() // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!sobremim"
};

exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Estatísticas da Bot!")
    .setColor("RANDOM")
    .setDescription("Veja Abaixo!")
    .addFields(
{name: "🖥 Servidores", value: `Eu estou em **${bot.guilds.cache.size}** Servidores!`},
    {name: "💻 Canais", value: `Eu estou verificando **${bot.channels.cache.size}** Canais!`},
    {name: "👥 Usuários", value: `Estou observando **${bot.members.cache.size}** Membros Incríveis!`})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!status"
};

exports.run = async (bot, message, args) => {
  let autorizado = message.author.id == 763398072587386912
  if (!autorizado) return message.reply("Esse comando só pode ser utilizado por pessoas autorizadas!")
  if (autorizado) {
    if (!args[0]) return message.reply("Quanto de dinheiro eu devo retirar?")
    if (isNaN(args[0])) return message.reply('O Argumento informado não é um número!')
    let user = message.mentions.users.first() || message.author;
    db.subtract(`money_${user.id}`, args[0])
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.tag} Perdeu Saldo!`, `${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    .setColor("RANDOM")
    .setDescription(`${user} perdeu \`F$${args[0]}\` solicitado por <@${message.author.id}>`)
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.help = {
  name: "!take"
};

exports.run = async (bot, message, args) => {
  let empresa = db.fetch(`empresa_${message.author.id}`)
  if (empresa < 1) return message.reply("Você precisa de uma empresa para executar esse comando!")
  let timeout = 43200000 
  let trabalhar = await db.fetch(`trabalhar_${message.author.id}`)
  if (trabalhar !== null & timeout - (Date.now() - trabalhar) > 0) {
    let time = ms(timeout - (Date.now() - trabalhar));
    message.reply(`Você está cansado, espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando!`)
  } else {
    db.set(`trabalhar_${message.author.id}`, Date.now())
    db.add(`money_${message.author.id}`, 1000)
    db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Trabalho!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> coletou **F$ 1,000** trabalhando e coletando com sua empresa!`)
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.help = {
  name: "!trabalhar"
};

exports.run = async (bot, message, args) => {
  const user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;
  let mensagem = db.fetch(`mensagem_${user.id}`)
  if (mensagem === null) mensagem = "Eu sou muito amigo da Isabela! Você sabia que poderia personalizar isso apenas usando `'mensagem`?"
    let lvl = db.fetch(`lvl_${user.id}`)
    let xp = db.fetch(`xp_${user.id}`)
    if (lvl === null) lvl = 0
  if (xp === null) xp = 0
    let embed = new Discord.MessageEmbed()
    .setTitle("Informações do usuário")
    .setColor("RANDOM")
    .addField("Nome de usuário", user.tag)
    .addField("ID de usuário", user.id)
    .addField("Quando entrou no Servidor...", moment.utc(user.joinedAt).format("LLL"))
    .addField("Quando entrou no Discord...", moment.utc(user.createdAt).format("LLL"))
    .addField("Level", lvl)
    .addField("XP", xp)
    .addField("Mensagem", mensagem)
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})) // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    message.channel.send(embed)
}
exports.help = {
  name: "!userinfo"
};

exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`barman_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `'emprego`e saíba mais")
    let ganhar = await db.fetch(`vender_${message.author.id}`)
    let tempo = 14400000
    if (ganhar !== null & tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 600)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como barman e ganhou **F$ 600**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!vender"
};

exports.run = async (bot, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão `Administrador` para executar esse comando!")
  let embedE = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setTitle("Escreva o Argumento Necessário!")
  .setColor("#FF0000")
  .setDescription(`Como configurar o **Welcome**
\`!welcome canal <#mencione o canal aqui>\`
\`!welcome mensagem <mensagem quando o usuário entrar no servidor!\``)
  .setTimestamp()
  if (!args[0]) return message.reply(embedE)
  if (args[0] == "canal") {
    let vCanal = db.fetch(`canalW_${message.guild.id}`)
    let mCanal = message.mentions.channels.first()
    if (!mCanal) return message.reply("Você esqueceu de mencionar um canal!")
    db.set(`canalW_${message.guild.id}`, mCanal.id)
    db.add(`configCW_${message.guild.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ativou o módulo **Canal do Welcome** | Quando um usuário entrar, eu vou enviar a mensagem no ${mCanal}`)
    message.channel.send(embed)
  }
  if (args[0] == "mensagem") {
    let vMensagem = db.fetch(`mensagemW_${message.guild.id}`)
    let mMensagem = args.slice(1).join(" ")
    let placeholder = mMensagem.replace("{user}", `${message.author.tag}`).replace("{@user}", `<@${message.author.id}>`).replace("{guild}", `${message.guild.name}`).replace("{membros}", `${message.guild.memberCount}`)
    let embedE = new Discord.MessageEmbed()
    .setTitle("Defina a mensagem de Bem Vindo!")
    .setColor("#FF0000")
    .setDescription(`Defina a Mensagem de Bem Vindo!
**Parametros Disponíveis:**
{user} - Mostra o Usuário sem mencionar
{@user} - Mostra o Usuário mencionando
{guild} - O Nome do servidor
{membros} - O Total de Membros do Servidor!`)
    if (!args.slice(1).join(" ")) return message.reply(embedE)
    db.set(`mensagemW_${message.guild.id}`, args.slice(1).join(" "))
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ativou o módulo **Mensagem do Contador**`)
    .addFields(
    {name: "Mensagem adicionada", value: `\`${args.slice(1).join(" ")}\``},
      {name: "Como irá ficar", value: `\`${placeholder}\``},
      )
    message.channel.send(embed)
  }
  if (args[0] == "embed") {
    let vMensagem = db.fetch(`EmensagemW_${message.guild.id}`)
    let mMensagem = args.slice(1).join(" ")
  }
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!welcome"
};