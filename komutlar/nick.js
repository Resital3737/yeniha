const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;

 if (!message.member.roles.has('723237194264739980') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Bu komutu kullanmak için <@&723237194264739980> rolüne sahip olman gerekiyor ❌ ').setColor("Black"));
  let member = message.mentions.members.first()
  if (!member) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir kişiyi etiketlemelisiniz <a:tikimiz:724281232225206303>').setColor("Black"));
   let isim = args[1]
   let yaş = Number (args [2])
        if(!isim) return message.channel.send("Lütfen Bir İsim Yazınız.").then(m => m.delete(5000));
        if(!yaş) return message.channel.send("Lütfen Bir Yaş Yazınız.").then(m => m.delete(5000));
  await member.setNickname(`✦ ${isim} | ${yaş}`)
      const emojis = client.emojis.find(e => e.name === "tikimiz")
    await message.react(emojis)
          const emoji = client.emojis.find(emoji => emoji.name === "tikimiz"); 
    db.add(`nickpuan_${message.guild.id}_${message.author.id}`, 1)


  let embed = new Discord.RichEmbed() 
  .setThumbnail(message.author.avatarURL)
  .setDescription(`**✦ Algessa**\n\n**Değiştirilen Kullanıcı : ${member}\n\nDüzenlenmiş Kullanıcı Adı : \`✦ ${isim} | ${yaş}\`**`)                                                                                   
  .setColor("BLACK")
  .setTimestamp()
   .setFooter(`Created by Resital`)
  return message.channel.send(embed)
  
  
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isim'],
  permLevel: 0
}
exports.help = {
  name: 'nick',
  description: "Birinin nickini değiştirir.",
  usage: 'nick <yeni nick>'
}