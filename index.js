const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzI1NjI2Nzc5MzA5NzAzMTc5.XvR9Jg.H_QLtDb9QpqRwm8MMD3c4NB5mTE';
const welcomeChannelName = "일반";
const byeChannelName = "일반";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === 'fuck') {
    message.reply('you');
  }
});

client.login(token);