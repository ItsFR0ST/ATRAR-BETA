const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')


    let subreddits = [  
    'https://cdn.discordapp.com/attachments/772898814138908752/776946905434947604/471289cde2490c80f60d5e85bcdfb6da.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to airstrike");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["RIP", "Say GoodBye", "Dead Man"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`WHY....`, `Sad I am nuked now`, `OH NO-`, `Holy shit!!`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '776471071443779634') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`Dude use it to kill someone else and not yourself :facepalm:`, `Are you ok buddy?`, `This guy nuked him self`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} AirStriked ${user}\n` + ` ${replies[result]}`) 
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())


    message.channel.send(embed);

}

module.exports.help = {
    name: "airstrike",
    aliases: [""]
}