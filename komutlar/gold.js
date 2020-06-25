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
  member.addRole('723237196659818506')
      const emojis = client.emojis.find(e => e.name === "tikimiz")
          await message.react(emojis)
  db.add(`erkekpuan_${message.guild.id}_${message.author.id}`, 1)

     const kanal = message.guild.channels.find(c => c.id == "725662155571200021")
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${kullanıcı} adlı üyeye <@&723237196659818506> rolünü verdim. Yetkili ${message.author} ${emoji}`)
    .setColor("ffbc00")
    .setTimestamp()
    .setFooter(`Created by Resital`)

  
  
  let embed = new Discord.RichEmbed() 
  .setThumbnail(message.author.avatarURL)
  .setDescription(`**✦ Algessa**\n\n${kullanıcı} adlı üyeye <@&723237196659818506> rolünü verdim.${emoji}`)
  .setColor("ffbc00")
  .setTimestamp()
  .setFooter(`Created by Resital`)

  return message.channel.send(embed).then(kanal.send(embed1))
    
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['g'],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'gold',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
} 