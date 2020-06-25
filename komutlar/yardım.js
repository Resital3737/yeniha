const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
 if (!message.member.roles.has('723237194264739980') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Bu komutu kullanmak için <@&723237194264739980> rolüne sahip olman gerekiyor ❌ ').setColor("Black"));
  
  message.channel.send(
    new Discord.RichEmbed()
      .setColor('PURPLE')
      .setAuthor(message.author.username, message.author.avatarURL)     
      .setDescription(`**• Algessa Register**\n**.erkek @Kullanıcı İsim Yaş** : _Erkek Kullanıcıları Kayıt Edersiniz._\n**.erkekal @Kullanıcı** : _Erkek Rolünü Alırsınız._\n**.kadın @Kullanıcı İsim Yaş** : _Kadın Kullanıcıları Kayıt Edersiniz._\n**.kadınal @Kullanıcı** : _Kadın Rolünü Alırsınız._\n**.isim @Kullanıcı İsim Yaş** : _İsim Değiştirirsiniz._\n**.couple @Kullanıcı** : _Sevgilisi Olanlara Verilen Roldür._\n**.alone @Kullanıcı** : _Sevgilisi Olmayanlara Verilen Roldür._\n**.ksorgula @Kullanıcı** : _Etiketlediğiniz Kişinin Kaç Kişi Kayıt Ettiğine Bakarsınız._`)
        .setTimestamp()
        .setFooter(`Created by Resital`)
    
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'help', 'y', 'ryardım'],
  permLevel: 0
};

exports.help = {
  name: 'ryardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
