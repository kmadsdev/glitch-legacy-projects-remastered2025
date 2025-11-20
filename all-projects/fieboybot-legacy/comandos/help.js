const fs = require("fs");
const Discord = require("discord.js");

exports.run = async (client, message) => {
	const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));
	
	// Get command names from files
	const commands = commandFiles.map(f => {
		const cmd = require(`./commands/${f}`);
		return cmd.help?.name || f.replace(".js", "");
	});

	const embed = new Discord.MessageEmbed()
		.setColor('#04FAA5')
		.setTitle('Central de Ajuda')
		.setURL('https://fireboy.ml/')
		.setAuthor('Autor da mensagem', 'https://i.imgur.com/wSTFkRM.png', 'https://fireboy.ml/')
		.setDescription(`**Meus comandos são:** ${commands.map(c => `!${c}`).join(" | ")}`)
		.addField('Titulo', 'texto')
		.setTimestamp();

	message.reply({ embeds: [embed] });
};
