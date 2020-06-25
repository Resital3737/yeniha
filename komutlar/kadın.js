const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('723237194264739980') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Bu komutu kullanmak için <@&723237194264739980> rolüne sahip olman gerekiyor ❌ ').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir kişiyi etiketlemelisiniz <a:tikimiz:724281232225206303>').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1]
   let yaş = Number (args [2])
      if(!isim) return message.channel.send("Lütfen Bir İsim Yazınız.").then(m => m.delete(5000));
        if(!yaş) return message.channel.send("Lütfen Bir Yaş Yazınız.").then(m => m.delete(5000));

        const emoji = client.emojis.find(emoji => emoji.name === "tikimiz"); 
        const emoji2 = client.emojis.find(emoji2 => emoji2.name === "tikimiz");
await member.setNickname(`✦ ${isim} | ${yaş}`)
  //message.react('<a:tik2:660042050175107082>') 
  member.addRole('723237201789321288')
  member.addRole('723237202997542983')
  member.removeRole ('723237206499524659') 
  member.removeRole ('723237207359488050') 
  const emojis = client.emojis.find(e => e.name === "tikimiz")
    await message.react(emojis)
  db.add(`kadınpuan_${message.guild.id}_${message.author.id}`, 1)


     const kanal = message.guild.channels.find(c => c.id == "723237350397968454")
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${kullanıcı} Ailemize Hoşgeldin, Seninle beraber **${message.guild.memberCount}** kişiyiz, <#723237325429276704> Kuralları Okuyarak Bilgi Edinebilirsin.${emoji2}`)
    .setColor("BLACK")
    .setTimestamp()
    .setFooter(`Created by Resital`)
  
  
  let embed = new Discord.RichEmbed() 
  .setThumbnail(message.author.avatarURL)
  .setDescription(`**✦ Algessa**\n\n${kullanıcı} adlı üyeye <@&723237201789321288> rolünü verdim\n\nİsmini \`✦ ${isim} | ${yaş}\` olarak kaydettim. ${emoji}`)  
  .setColor("BLACK")
  .setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  .setFooter(`Created by Resital`)
  return message.channel.send(embed).then(kanal.send(embed1))
    
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kız', 'k'],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'kadın',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
} 