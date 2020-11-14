const Discord = require("discord.js");

module.exports.run = async (client, message, bot) => {
    botFetch = client.users.cache.get('732645141839609958')

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }


   
       message.channel.send("Getting bot Stats").then(m => {
              var ping = m.createdTimestamp - message.createdTimestamp

              var embed = new Discord.MessageEmbed()
              .setTitle('Bot Stats')
              .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
              .setDescription(`The bot ping is: ${ping}\n I have been online for: ${duration(bot.uptime)}`)
              .setColor("RANDOM")
              .setTimestamp()
              .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
              m.edit(embed)
          });
          message.delete();
        
        }
module.exports.help = {
name:"ping",
aliases: ["uptime", "botstats", "serverstats"]
}

