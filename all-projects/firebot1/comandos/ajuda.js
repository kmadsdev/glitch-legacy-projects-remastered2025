const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
  let embedP = new Discord.MessageEmbed()
    .setTitle(`Central de Ajuda | ${bot.user.username}`)
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("RANDOM")
    .setDescription(`:gear:  | Olá! <@${message.author.id}> , Essa é minha **Central de Ajuda** onde você pode ver todos os meus comandos!

Só lembrando, que meu prefixo é \`'\`

Precisa de mais ajuda? por que você não visita o [servidor de suporte](https://discord.gg/W4JqnG26tK)?

Agora, vamos as categorias de comandos:

1️⃣ | Moderação

2️⃣ | Diversão

3️⃣ | Economia

4️⃣ | Adicionais

5️⃣ | Configurações`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true,size: 1024,format: "png"})}`);
  message.channel.send(embedP).then(msg => {
    msg.react("1️⃣");
    msg.react("2️⃣");
    msg.react("3️⃣");
    msg.react("4️⃣");
    msg.react("5️⃣");
    msg.react("◀");
    let filtro1 = (r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1);
    let filtro2 = (r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id;
    let coletor2 = msg.createReactionCollector(filtro2);
    let filtro3 = (r, u) => r.emoji.name === "3️⃣" && u.id === message.author.id;
    let coletor3 = msg.createReactionCollector(filtro3);
    let filtro4 = (r, u) => r.emoji.name === "4️⃣" && u.id === message.author.id;
    let coletor4 = msg.createReactionCollector(filtro4);
    let filtro5 = (r, u) => r.emoji.name === "5️⃣" && u.id === message.author.id;
    let coletor5 = msg.createReactionCollector(filtro5);
    let filtroV = (r, u) => r.emoji.name === "◀" && u.id === message.author.id;
    let coletorV = msg.createReactionCollector(filtroV);
    coletor1.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("Central de Ajuda | Moderação")
        .setColor("RANDOM")
        .setDescription(`Todos os comandos da categoria **Moderação**
Total de Comandos da Categoria: **8**

》 \`'ban\`
》 \`'kick\`
》 \`'clear\`
》 \`'slowmode\`
》 \`'avatar\`
》 \`'userinfo\`
》 \`'serverinfo\`
》 \`'servericon\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    });
    coletor2.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Diversão")
      .setColor("RANDOM")
      .setDescription(`Todos os comandos da categoria **Diversão**
Total de Comandos da Categoria: **7**

》 \`'slap\`
》 \`'abraçar\`
》 \`'kiss\`
》 \`'say\`
》 \`'mcbody\`
》 \`'mchead\`
》 \`'ascii\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor3.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Economia")
      .setColor("RANDOM")
      .setDescription(`Todos os Comandos da Categoria **Economia**
Total de Comandos da Categoria: **6**

》 \`'saldo\`
》 \`'give\`
》 \`'take\`
》 \`'daily\`
》 \`'apostar\`
》 \`'pay\`
》 \`'armas\`
》 \`'empresas\`
》 \`'empregos\``)
      .setTimestamp()
      .setFooter("Presione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor4.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Adicionais")
      .setColor("RANDOM")
      .setDescription(`Todos os Comandos da Categoria **Adicionais**
Total de Comandos da Categoria: **8**

》 \`'ping\`
》 \`'sobremim\`
》 \`'ontime\`
》 \`'status\`
》 \`'bug\`
》 \`'suporte\`
》 \`'créditos\`
》 \`'invite\`
》 \`'cpu\``)
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
》 \`'setautorole\`
》 \`'welcome\`
》 \`'leave\`
》 \`'desativar\``)
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
