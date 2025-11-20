const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) =>  {
  message.delete()
  if (!args.join(" ")) return message.reply("Me informe a plataforma de live ultilizada. (Youtube Ou Twitch)")

// ↓ - - - - - - - - - - - - - - - - - - - - - - ↓ ajuda ↓ - - - - - - - - - - - - - - - - - - - - - - ↓
{
  if(args[0] === 'ajuda'){
message.reply(`
**Twitch**
\`.live twitch\` Mostra a live da twitch 
\`.live ttv\` Mostra a live da twitch
**Youtube**
\`.live youtube\` Mostra o link do canal de lives
\`.live yt\` Mostra o link do canal de lives
\`.live link <link>\` Envia o link da live (youtube)`);
}
  }
// ↓ - - - - - - - - - - - - - - - - - - - - - - ↓ twitch ↓ - - - - - - - - - - - - - - - - - - - - - - ↓
{
  if(args[0] === 'twitch'){
const channel = bot.channels.cache.get(`810580239948185651`);
channel.send(`||                                                                               ||
**Live do Brunimations! Vai lá assistir UwU**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
› https://twitch.tv/brunimations`);
}
  }
// ↓ - - - - - - - - - - - - - - - - - - - - ↓ twitch (curto) ↓ - - - - - - - - - - - - - - - - - - - - ↓
{
  if(args[0] === 'ttv'){
const channel = bot.channels.cache.get('810580239948185651');
channel.send(`||                                                                               ||
**Live do Brunimations! Vai lá assistir UwU**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
› https://twitch.tv/brunimations`);
}
  }
// ↓ - - - - - - - - - - - - - - - - - - - - - - ↓ youtube ↓ - - - - - - - - - - - - - - - - - - - - - - ↓
{
if(args[0] === 'youtube'){
const channel = bot.channels.cache.get('810580239948185651');
channel.send(`||                                                                               ||
**Live do Brunimations! Vai lá assistir UwU**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
› https://www.youtube.com/channel/UC9V_WgBmV0L89D67c2aUSbA`);
}
  }
// ↓ - - - - - - - - - - - - - - - - - - - - ↓ youtube (curto) ↓ - - - - - - - - - - - - - - - - - - - - ↓
{
if(args[0] === 'yt'){
const channel = bot.channels.cache.get('810580239948185651');
channel.send(`||                                                                               ||
**Live do Brunimations! Vai lá assistir UwU**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
› https://www.youtube.com/channel/UC9V_WgBmV0L89D67c2aUSbA`);
}
  }
// ↓ - - - - - - - - - - - - - - - - - - - - ↓ youtube (link) ↓ - - - - - - - - - - - - - - - - - - - - ↓
{
if(args[0] === 'link'){
const channel = bot.channels.cache.get('810580239948185651');
channel.send(`||                                                                               ||
**Live do Brunimations! Vai lá assistir UwU**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
› ${args[1]} `); 
}
 }
// ↓ - - - - - - - - - - - - - - - - - - - - - - ↓ Prefixo ↓ - - - - - - - - - - - - - - - - - - - - - - ↓

}

exports.help = {
  name: ".live"
}