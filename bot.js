const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Five Stars`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);




client.on('message', msg => {
    if (msg.content === 'هلا') {
       msg.reply('هلابيك:heart: ');
      }
    });



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كسمك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "🌟Five Stars🌟    [ !^мohαmε𝕯^!#4476      -     W͈̪̣AR NI̴̧͝GH̴̵T͇#4506 ]"
        }
      }}).then(msg => {msg.delete(10000)});
                          }
 
     
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('نيك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "🌟Five Stars🌟    [ !^мohαmε𝕯^!#4476      -     W͈̪̣AR NI̴̧͝GH̴̵T͇#4506 ]"
        }
      }}).then(msg => {msg.delete(10000)});
                          }
 
     
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('عرص')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "🌟Five Stars🌟    [ !^мohαmε𝕯^!#4476      -     W͈̪̣AR NI̴̧͝GH̴̵T͇#4506 ]"
        }
      }}).then(msg => {msg.delete(10000)});
                          }
 
     
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('متناك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "🌟Five Stars🌟    [ !^мohαmε𝕯^!#4476      -     W͈̪̣AR NI̴̧͝GH̴̵T͇#4506 ]"
        }
      }}).then(msg => {msg.delete(10000)});
                          }
 
     
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('احا')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "🌟Five Stars🌟    [ !^мohαmε𝕯^!#4476      -     W͈̪̣AR NI̴̧͝GH̴̵T͇#4506 ]"
        }
      }}).then(msg => {msg.delete(10000)});
                          }
 
     
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('a7a')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "🌟Five Stars🌟    [ !^мohαmε𝕯^!#4476      -     W͈̪̣AR NI̴̧͝GH̴̵T͇#4506 ]"
        }
      }}).then(msg => {msg.delete(10000)});
                          }
 
     
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كوسمك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "🌟Five Stars🌟    [ !^мohαmε𝕯^!#4476      -     W͈̪̣AR NI̴̧͝GH̴̵T͇#4506 ]"
        }
      }}).then(msg => {msg.delete(10000)});
                          }
 
     
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('خول')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "🌟Five Stars🌟    [ !^мohαmε𝕯^!#4476      -     W͈̪̣AR NI̴̧͝GH̴̵T͇#4506 ]"
        }
      }}).then(msg => {msg.delete(10000)});
                          }
 
     
});
