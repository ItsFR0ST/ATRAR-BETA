const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let replies = ["Put your real name in your nickname for all the day.", "Say any secret about yourself.", "DM someone with your selfie and post it back in the server when you do it.", "Say to a girl I love you.", "Showcase your worst stuff.", "Tell us about something you don't want to say it to anyone.", "Try to touch your nose with your tongue.", "Say your real name.", "Nickname yourself with a silly name.", "Send every curse word you can think of in chat.", "Change your phone wallpaper to the choice of the group for 7 days.", ""];
    let result = Math.floor((Math.random() * replies.length));
    if (user) return message.reply('This Feature isn\'t added yet, Sorry')


    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    .addField('**You Choosed A Dare**', `${replies[result]}`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RANDOM")
    .setFooter(`if you want to add more dares go to the support server`)
    .setTimestamp()
    message.channel.send(embed);
    }

   
module.exports.help = {
    name: "dare",
    aliases: ["challenge"]
}