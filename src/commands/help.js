const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  botFetch = client.users.cache.get('732645141839609958')

  if (message.channel.type === "dm") return message.reply(embed)


  let embed = new Discord.MessageEmbed()
    .setTitle("Help Page [Prefix `a!`]")
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    .addField("RolePlay Commands", "`hug` `cuddle` `kiss` `slap` `kill` `pat` `airstrikePUBG` `airstrike`")
    .setDescription("Note: If you want to add some replies to the commands such as `oof, RIP`\n so join the bot support server and add your suggetion in the server and it will be added soon")
    .addField("Information Commands", "`serverinfo` `userinfo` `botinfo` `credits` `botstats`")
    .addField("Fun Commands", "`meme` `8ball` `dare` `truth` `avatar` `gay` `cs` `rickroll` `lovemeter` `gaymeter`")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Version: 1.65, If you want to get the full features ${message.author.username} so get the premium version of the bot for full features`, botFetch.displayAvatarURL())
  message.channel.send(embed)




}

module.exports.help = {
  name: "help",
  aliases: [""]
}