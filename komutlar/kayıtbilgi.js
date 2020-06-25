const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client,message,args) => {
const user = message.mentions.users.first()
if(!user) return message.channel.send(
new Discord.RichEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Lütfen birisini etiketle! <a:tikimiz:724281232225206303>'))

let erkek = db.get(`erkekpuan_${message.guild.id}_${user.id}`)
let kadın = db.get(`kadınpuan_${message.guild.id}_${user.id}`)
let nick = db.get(`nickpuan_${message.guild.id}_${user.id}`)
let gold = db.get(`goldpuan_${message.guild.id}_${user.id}`)
let sap = db.get(`sappuan_${message.guild.id}_${user.id}`)
let couple = db.get(`couplepuan_${message.guild.id}_${user.id}`)


const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('RANDOM')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`${user} kişisinin kayıt bilgileri;
    ───────────────
    **➥ Kayıt Bilgileri**
   • Toplam \`${erkek || '0'}\` erkek üyeyi kayıt etmiş,
   • Toplam \`${kadın || '0'}\` kadın üyeyi kayıt etmiş,
   • Toplam \`${nick || '0'}\` üyenin ismini değiştirmiş,
   • Toplam \`${gold || '0'}\` kişiye gold vermiş,
   • Toplam \`${sap || '0'}\` kişiye sevgilim yok vermiş,
   • Toplam \`${couple || '0'}\` kişiye sevgilin var vermiş.
   `)
    .setFooter(`Created by Resital`)
    .setTimestamp()

message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['kprofil', 'ksorgula']
}

exports.help = {
name: 'kayıt-profil'
}