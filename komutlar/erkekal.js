const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('723237194264739980') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Bu komutu kullanmak için <@&723237194264739980> rolüne sahip olman gerekiyor ❌ ').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir kişiyi etiketlemelisiniz <a:tikimiz:724281232225206303>').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
        const emoji = client.emojis.find(emoji => emoji.name === "tikimiz"); 
  //message.react('<a:tik2:660042050175107082>') 
  member.removeRole('723237204637253652')
  member.removeRole('723237205300215919')
  member.addRole ('723237206499524659') 
  member.addRole ('723237207359488050') 
      const emojis = client.emojis.find(e => e.name === "tikimiz")
    await message.react(emojis)
  let embed = new Discord.RichEmbed() 
    .setThumbnail(message.author.avatarURL)
  .setDescription(`**✦ Algessa**\n\n${kullanıcı} adlı üyenin <@&723237204637253652> rolünü alıp.\n\n<@&723237206499524659> rolünü verdim. ${emoji}`) 
  .setColor("BLACK")
  .setTimestamp()
  .setFooter(`Created by Resital`)
  return message.channel.send(embed)
 
    
}
  


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'erkekal',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
} 