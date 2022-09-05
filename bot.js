const Discord = require("discord.js");
const bot = new Discord.Client();
const $ = require('cheerio');
const embed = new Discord.MessageEmbed()
const rp = require('request-promise');
const url ="https://powerlisting.fandom.com/wiki/Special:Random"



bot.login("NzczOTYwMzE2NjU1NzYzNDc2.X6Q0tg.qw3EcHdXgL2pxB3fm_eRQNaV7io");




bot.on('message', message =>{
if (message.content ==='-power'){


  rp(url)
.then(function(html){


var text = $('#mw-content-text > div > p:nth-child(7)', html).text()
var text2 = $('#mw-content-text > div > p:nth-child(9)', html).text()
var description = text + "\n" + text2;



    embed.setTitle($('#firstHeading', html).text())

    embed.setColor("BLUE")

    embed.setDescription(description)
    
    embed.setImage($("#mw-content-text > div > div.ib-wrap > aside > figure > a > img", html).attr('src'))

    embed.setFooter("https://powerlisting.fandom.com/wiki/"+$('#firstHeading', html).text());
    
    message.channel.send(embed);

    

  })
}});
