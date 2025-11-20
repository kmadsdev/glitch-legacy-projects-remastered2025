const Discord = require("discord.js");
const moment = require("moment")
exports.run =  (bot, guild) => {
  let canal = bot.channels.cache.get("847522283991334922")
  let embed = new Discord.MessageEmbed()
  .setTitle("Entrei em um novo servidor!")
  .setColor("#2a9c0e")
  .addFields(
  {name: "Nome do Servidor", value: `\`${guild.name}\``},
  {name: "Proprietário", value: `\`${guild.owner.user.tag}\``},
    {name: "Id do Proprietário", value: `\`${guild.owner.user.id}\``},
    {name: "Região", value: `\`${guild.region}\``},
  {name: "Quantidade de Membros", value: `\`${guild.memberCount}\``},
  {name: "Criado em ", value: `\`${moment.utc(guild.createdAt).format("LLL")}\``},
  )
  .setImage(guild.iconURL({dynamic: true, size: 1024, format: "png"})) // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
  .setTimestamp()
  canal.send(embed).then(msg => msg.react("🤩"))
  guild.owner.send(`Muito obrigado **MESMO** por você (ou algum administrador do seu servidor) ter me adicionado no *${guild.name}* ! :heart_eyes:
Bom, primeiramente, deixa eu me apresentar!
Meu nome é *${bot.user.username}* e estou aqui para te ajudar no que for preciso! Com comandos de Moderação, Diversão e Economia!
Meu prefixo é \`i!\` e você pode executar meu comando de ajuda, o comando é \`i!ajuda\`
Se puder, claro! Iria ajudar bastante, você fazendo essas ações!

1 - Se tornando **PREMIUM** você tem benefícios exclusivos! Para saber mais, consulte o discord (https://discord.fireboy.ml/)

É isso, para saber mais sobre mim, visite o nosso site (https://fireboywork.ml/)

mais uma vez, **MUITO OBRIGADO!**`).then(msg => msg.react("❤"))

}