const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {

    let user = bot.users.cache.get(args[0]) || message.mentions.users.first();
    if (!user) return message.reply("👤 Pra quem eu devo enviar o pagamento?");

    if (!args[1]) return message.reply("💰 Quanto de pagamento eu devo enviar?");
    if (isNaN(args[1])) return message.reply("❌ O valor informado não é um número!");
    if (user.id === message.author.id) return message.reply("❌ Você não pode enviar um pagamento para si mesmo!");
    if (args[1] <= 1) return message.reply("⚠️ Você não pode enviar apenas **F$ 1**!");

    let money = await db.fetch(`money_${message.author.id}`);
    if (money < args[1]) return message.reply("💸 Você não tem o valor informado!");

    let valor = parseInt(args[1]);

    // Sistema de taxas
    let taxa;
    let taxaTexto;

    if (valor >= 100) {
        taxa = 20;
        taxaTexto = "Taxa fixa de **F$ 20**";
    } else {
        taxa = Math.floor(valor * 0.01);
        if (taxa < 1) taxa = 1; // evita taxa zero
        taxaTexto = `Taxa de **1% (F$ ${taxa})**`;
    }

    let totalRecebido = valor - taxa;

    let embedP = new Discord.MessageEmbed()
        .setTitle("📤 Confirmação de Pagamento")
        .setColor("YELLOW")
        .setDescription(`Você está prestes a enviar **F$ ${valor}** para ${user}
Ele irá receber **F$ ${totalRecebido}**  
💸 (${taxaTexto})

👉 Aperte **'✅'** para confirmar.`)
        .setTimestamp()
        .setFooter(`Pagamento solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embedP] }).then(msg => {
        msg.react("✅");

        let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, { max: 1, time: 15000 });

        coletor.on("collect", () => {
            db.subtract(`money_${message.author.id}`, valor);
            db.add(`money_${user.id}`, totalRecebido);
            db.add(`xp_${message.author.id}`, 1);

            let embedFinal = new Discord.MessageEmbed()
                .setTitle("📨 Pagamento Enviado!")
                .setColor("GREEN")
                .setDescription(`${user} recebeu **F$ ${totalRecebido}** de <@${message.author.id}>`)
                .setTimestamp()
                .setFooter("Pagamento concluído!");

            msg.edit({ embeds: [embedFinal] });
        });
    });
};

exports.help = {
    name: "!pay"
};
