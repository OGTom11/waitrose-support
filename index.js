const discord = require("discord.js")
const client = new discord.Client({ intents: [100] })
const prefix = "!"

client.login("MTAxNzg4OTM5MDA5NTI0MTI2Ng.GsoW5P.ZFjrgZGgQfeKm9p9M44RxwogJJ1XWsDr7iQOYs");

if(client.on) {
  console.log(`Waitrose Support is online.`)
}

client.on('message', (msg) => {
  var ping = Date.now() - msg.createdTimestamp + " ms";
  if (msg.content.startsWith(`${prefix}ping`))
  msg.reply(`Pong? Your ping is ${ping}.`);
  }
);

client.on('message', (msg) => {
if (msg.content.startsWith(`${prefix}kick`)) {
  if (!msg.guild.member(msg.author).hasPermission("KICK_MEMBERS")) {
      return msg.channel.send('You do not have the permission for kick users!');
  }
  if (!msg.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      return msg.channel.send("I don’t have the permission for kick users!");
  }
  if (msg.mentions.users.size === 0) {
      return msg.channel.send("You need to ping a user or the user can't be found!");
  }
  var member = msg.mentions.members.first();
  member
      .kick()
      .then(member => {
          msg.channel.send(member.displayName + " has been successfully kicked");
      })
      .catch(() => {
          msg.channel.send("Sorry, you can't kick this member");
      });
  }
})

client.on("message", (msg) => {
  if(msg.content.startsWith(`${prefix}help`)) {
    if (msg.guild.member(msg.author).hasPermission("ADMINISTRATOR")) {
    msg.reply("Here's the guide for Waitrose Support Systems.")
    msg.channel.send("Moderation Commands:")
    console.log(`Sending RES for !help`)
      msg.channel.send("1. !kick <@member>")
      msg.channel.send("2. !ping")
      msg.channel.send("3. !help")
    
  }else {
    console.log("User has no permissions.")
    msg.reply("You don't have permissions to execute this command.")
  }
}
  })

  client.on('message', (msg) => {
    if (msg.content.startsWith(`${prefix}ban`)) {
      if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
          return msg.channel.send('You do not have the permission for kick users!');
      }
      if (!msg.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
          return msg.channel.send("I don’t have the permission to ban users!");
      }
      if (msg.mentions.users.size === 0) {
          return msg.channel.send("You need to ping a user or the user can't be found!");
      }
      var member = msg.mentions.members.first();
      member
          .ban()
          .then(member => {
              msg.channel.send(member.displayName + " has been successfully banned!");
          })
          .catch(() => {
              msg.channel.send("Sorry, you can't ban this member");
          });
      }
    })

    client.on("message", (msg) => {
      if(msg.content.startsWith(`${prefix}credit`)) {
        msg.reply("Waitrose Support is owned and developed by OGTom11#7398, if you wish to find out more DM Him!")
      }
    })



    