const Discord = require("discord.js")

module.exports.run = async (client, message) => {
    botFetch = client.users.cache.get('732645141839609958')

    let serverembed = new Discord.MessageEmbed()
        .setColor("#9400D3")
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .addField(`Version`, `1.64`, true)
        .addField(`Library`, `Discord.js`, true)
        .addField(`Creator`, `LoneFrosty#9026`, true)
        .addField(`Servers`, `${client.guilds.cache.size}`, true)
        .addField(`Users`, `${client.users.cache.size}`, true)
        .addField(`Invite`, `[Invite ATRAR](https://discord.com/oauth2/authorize?client_id=732645141839609958&permissions=8&scope=bot)`, true)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(serverembed);

}

module.exports.help = {
    name: "info",
    aliases: ["botinfo"]

}