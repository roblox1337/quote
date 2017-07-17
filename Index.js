const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MjgzNjU1ODIwOTU1MDkwOTU0.DD0XqQ.YaYWll7bEz3ToNdi-tMRBD0OBV8'
const Webhook = require("webhook-discord")
const Hook = new Webhook("https://discordapp.com/api/webhooks/323523844386062337/ZVKB5_wd4fj-pvcoTIdcHVqeEjLBqalyo1FQ9z7x0cl8P0TaqsZI7uXwJ5HccV6fS54k")
const fs = require("fs");
const yt = require('ytdl-core');
var googl = require('goo.gl');
googl.setKey('AIzaSyA1fPkdLGelNBZOCA3nrVY_zojAy8k7wzI');
googl.getKey();

var rbx = require('roblox-js');
var jar = rbx.options.jar;
var options = {
  username: 'DoTTBot',
  password: 'VHmHfLqS'
}


bot.on('ready', () => {
  bot.user.setGame("With ur mom");
  console.log('Turned on!');





});
const prefix = "!";


bot.on("guildMemberAdd", member =>{
  let guild = member.guild;
  guild.defaultChannel.sendMessage("Welcome, " + member.user + " to Atlas Corporation Discord Server.  Please verify your ROBLOX account with your Discord account in the text channel, #verification-channel.  Run '!verify <USERID> <USERNAME>', thanks!")
});

bot.on("guildMemberRemove", member =>{
});

bot.on("guildMemberUpdate", member => {
  let guild = member.guild;

});

bot.on('message', message => {
  if(message.author.bot) return;
console.log(`${message.guild} | ${message.author.username} said: "${message.content} - ${message.channel}".`);


if (message.content.startsWith(prefix + "developer")) {
  message.author.sendMessage("The developer of this bot is (Heroku heheheh) (if that doesn't work, contact Discord_Developer#0669).")
}

if (message.content.startsWith(prefix + "shorten")) {
let args = message.content.split(" ").slice(1);
googl.shorten(message.content.slice(message.content.indexOf(message.content.split(" ")[1])))
    .then(function (shortUrl) {
message.channel.sendMessage("I've sent you a goo.gl version of that link that you have asked me to shorten.")
        message.author.sendMessage(shortUrl);
    })
    .catch(function (err) {
        console.error(err.message);
    });


}

rbx.login(options)
.then(function (info) {
  console.log('Logged in with ID ' + info.userId)
})
.catch(function (err) {
  console.error(err.stack);
});

if (message.content.startsWith(prefix + "shout")) {
  let modRole = message.guild.roles.find("name", "Moderator");
  if (!message.member.roles.has(modRole.id)) {
    return Hook.error("Atlas | Check System", message.author + " you don't have the correct role to run this command.")
  }
		let argss = message.content.split(" ").slice(1);
		rbx.login(options)
		.then(function (info) {
      rbx.shout(2873712, message.content.slice(message.content.indexOf(message.content.split(" ")[1])), jar)

  })
		.catch(function (err) {
		  console.error(err.stack);
		});
    return Hook.success("Atlas | Check System","Shouted by " + message.author + " with a message of ```" + message.content.slice(message.content.indexOf(message.content.split(" ")[1])) + "```")
	}


if (message.content.startsWith(prefix + "promote")) {
		let modRole = message.guild.roles.find("name", "Moderator");
  if (!message.member.roles.has(modRole.id)) {
    return message.reply("You don't have the correct role to run this command.");
  }
		let id = rbx.getIdFromUsername(message.content.slice(message.content.indexOf(message.content.split(" ")[1])))
		rbx.login(options)
		.then(function (info) {
		  rbx.setRank(2873712, id, 2, jar)
		 rbx.message(id, "[Atlas | PROMOTION]", "Congratulations on being promoted to the next rank in Atlas.  It sure is an exaltation having you in our community, see you at the next event!", jar)
			Hook.success("Promoted " + message.content.slice(message.content.indexOf(message.content.split(" ")[1])));
			//3009388
		})
		.catch(function (err) {
		  console.error(err.stack);
		});
	}


if (message.content.startsWith(prefix + "membercount")) {
console.log("User ran MemberCount command")
message.delete()
message.channel.sendMessage("There are currently " + message.guild.memberCount + " members here.");
  }

if (message.content.startsWith(prefix + "prune")) {
let modRole = message.guild.roles.find("name", "Moderator");
if (!message.member.roles.has(modRole.id)) {
	return  message.reply("you don't have the correct role to run this command.")
	}
  let args = message.content.split(" ").slice(1);
    let amount = args[0]
    message.channel.bulkDelete(amount).catch(console.error);
    return  Hook.success("Pruned message(s)")


}

if (message.content.startsWith(prefix + "verify")) {
  let args = message.content.split(" ").slice(1);
let amount = args[0];

let godRole = message.guild.roles.find("name", "Verified");
if (message.member.roles.has(godRole.id)) {
  return message.reply("Already verified, please contact an administrator if you're having a problem.")
}
    message.reply("please check your ROBLOX.com messages. We've messaged you with a verification code, follow instructions found in the message. **Change your settings so all users can message, you may change your settings back once verified.**  \nCopy and paste the specific code that was sent to you.")

    var code = [
      "ASDjl129381209d",
      "asjdlakjsd92sd$28",
      "asldSK12da21938%",
      "Aowi12839zz",
      "ASKdu1239945#(@3812391238)",
      "ASld129384)(asdl293848)",
      "asdfm921838",
      "asdlfkjasd;asdf!!!",
      "asdl24;laskdfj01928312093u;;213123",
      "asdk2389cxq"


    ]
    let zz = code[Math.floor(Math.random()*code.length)]
    rbx.login(options)
        .then(function (info) {
          rbx.message(args[0], "Atlas | Verification", "Dear user, \nA user from the Atlas Discord server has submitted a verification for their discord account to be linked with this ROBLOX account. If you did not submit this verification then please ignore this message.\n \nHowever, if you did send the message please copy and paste the specific code below onto our discord. \n" + "\n" + zz + "\n" + "\nKind regards, \Atlas", jar)

      })


      .then(() => {
        message.channel.awaitMessages(response => code.includes(response.content), {
          max: 1,
          time: 60000,
          errors: ['time'],
        })
        .then((collected) => {
          message.delete()
          let member = message.author
  let guild = member.guild;
  message.member.setNickname(args[1])
          message.member.addRole(message.guild.roles.find('name', 'Verified')).catch(console.error);
          message.author.sendMessage("You've been officially verified!");
        })

          .catch((c) => {
            console.log(c)
            message.channel.sendMessage('Please try again later...');
          });
    })
  }





if (message.content.startsWith(prefix + "message")) {
  var args = message.content.split(/[ ]+/)
  let modRole = message.guild.roles.find("name", "Moderator");
  if (!message.member.roles.has(modRole.id)) {
  return  Hook.error("Atlas | Check System", message.author + " you don't have the correct role to run this command.")
  }
        rbx.login(options)
        .then(function (info) {
          rbx.message(args[1], "[D | MESSAGE]", message.content.slice(message.content.indexOf(message.content.split(" ")[2])), jar)
        return  Hook.success("Atlas | Check System","Messaged " + args[1] + " " + message.content.slice(message.content.indexOf(message.content.split(" ")[2])) + " " + message.author)
})
        .catch(function (err) {
          console.error(err.stack);
        });
    }






if (message.content.startsWith(prefix + "warn")) {
  let modRole = message.guild.roles.find("name", "Moderator");
  if (!message.member.roles.has(modRole.id)) {
    return Hook.error("Atlas | Check System", message.author + " you don't have the correct role to run this command.")
  }
let user = message.guild.member(message.mentions.users.first())
let args = message.content.split(" ").slice(1);
message.mentions.users.first().sendMessage(message.content.slice(message.content.indexOf(message.content.split(" ")[2])));
message.delete()
return Hook.success("Atlas | Check System", message.mentions.users.first() + " was warned by " + message.author + " with reason... ```" + message.content.slice(message.content.indexOf(message.content.split(" ")[2])) + "```")
message.channel.sendMessage("User has been warned")
  tts: true
  message.delete()
  };



if (message.content.startsWith(prefix + "kick")) {
  let modRole = message.guild.roles.find("name", "Moderator");
  if(!message.member.roles.has(modRole.id)) {
    return Hook.error("Atlas | Check System", message.author + " you don't have the correct role to run this command.")
  }
  if(message.mentions.users.size === 0) {
    return Hook.error("Atlas | Check System", message.author + " mention a user to kick")
  }
  let kickMember = message.guild.member(message.mentions.users.first());
  if(!kickMember) {
    return Hook.error("Atlas | Check System", message.author + " user isn't in the server.")
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("sorry!  I don't have the permissions to do this. ");
  }
  let args = message.content.split(" ").slice(1);
  message.mentions.users.first().sendMessage();
  kickMember.kick().then(member => {
    return Hook.success("Atlas | Check System", member.user.username + " was kicked by " + message.author + " with reason of ```" + message.content.slice(message.content.indexOf(message.content.split(" ")[2])) + "```")
message.channel.sendMessage("User has been kicked from the server.")
  tts: true
message.delete
 }).catch(e => {
    console.error(e);
    console.log("Kick command ran by " + member.user)
  });
}

if (message.content.startsWith(prefix + "ban")) {
  let modRole = message.guild.roles.find("name", "Moderator");
  if(!message.member.roles.has(modRole.id)) {
    return Hook.error("Atlas | Check System", message.author + " you don't have the correct role to run this command.")
  }
  if(message.mentions.users.size === 0) {
    return Hook.error("Atlas | Check System", message.author + " mention a user to ban.")
  }
  let banMember = message.guild.member(message.mentions.users.first());
  if(!banMember) {
    return Hook.error("Atlas | Check System", message.author + " user isn't in the server")
  }

  if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
    return message.reply("sorry!  I don't have the permissions to do this. ");
  }
  banMember.ban().then(member => {
    return Hook.success("Atlas | Check System", member.user.username + " was banned by " + message.author  + message.author + " with reason of ```" + message.content.slice(message.content.indexOf(message.content.split(" ")[2])) + "```")
  message.channel.sendMessage("User has been banned from the server.")
  tts: true
  message.delete()
  }).catch(e => {
    console.error(e);
    console.log("RAN BAN COMMAND")
  });
}


     if (message.content.startsWith(prefix + "exile")) {
        let modRole = message.guild.roles.find("name", "Moderator");
        if (!message.member.roles.has(modRole.id)) {
          return Hook.error("Atlas | Check System", message.author + " you don't have the correct role to run this command.")

        }
          rbx.login(options)
              .then(function (info) {
                rbx.exile(816616, args[1], jar)
              })
              .catch(function (err) {
                console.error(err.stack);
              });
            return Hook.success("Atlas | Check System", message.author + " user has been exiled")
        }

if (message.content.toLowerCase().includes("anarchasdjlaskdji29djndalskjy")) {
  message.delete()
  message.channel.sendMessage("This is your emergency broadcast system announcing the commencement of the Annual Purge sanctioned by the U.S. Government.", {
    tts: true
  });
  message.channel.sendMessage("Weapons of class 4 and lower have been authorized for use during the Purge. All other weapons are restricted.", {
    tts: true
  });
  message.channel.sendMessage("And for the first time since its inception, no one has been granted special immunity from the Purge. No citizen or group will be exempt.", {
    tts: true
  });
  message.channel.sendMessage("Commencing at the siren, any and all crime, including murder, will be legal for 12 continuous hours.", {
    tts: true
  });
  message.channel.sendMessage("Police, fire, and emergency medical services will be unavailable until tomorrow morning until 7 a.m., when The Purge concludes.", {
    tts: true
  });
  message.channel.sendMessage("Blessed be our New Founding Fathers and America, a nation reborn. May God be with you all", {
    tts: true
  });
}

if (message.content === "roast me") {
  var response = [
    "No one likes you.",
    "If I wanted to kill myself I would jump from your hairline to your IQ.",
    "Your name reminds me of a japanese toy for 3 year olds.",
    "Honestly if i had to pick between killing myself and talking to you, i would jump off the nearest bridge",
    "Take a seat, it looks like your stomach is having a party your legs weren't invited to.",
    "Can prostitutes collect unemployment? You look like you'd know.",
    "I don't need to roast you because you already look like a burn victim.",
    "Does your ass get jealous of the amount of shit that comes out of your mouth?",
    "Tell me, did your parents have any children who lived?",
    "Does your mouth get watery of the amount of cum that comes out?",
    "Why should I roast you if you're already roasted; you're black as a burnt toast omg...",
    "Your mom is a bad cook, she burnt my dick from the overdose'ed friction",
    "I have five fingers and the middle one is for you",
    "You're so white you make me look black",
    "Just looking at you gave me my virginity back.",
    "Your personal hygiene is so bad the EPA would classify you as an environmental disaster.",
    "you call yourself Barbie because nobody over the age of 9 finds you valuable",
    "Your too ugly to roast",
    "Hey there, don't you dare look at the mirror..it is expensive and you will pay me if it breaks!"
  ]
  message.channel.sendMessage(response[Math.floor(Math.random()*response.length)])
}

if (message.content.startsWith(prefix + "countdown")) {
let i = 60;
message.channel.sendMessage("Countdown: " + i + "s").then(message => {
    var countInterval = setInterval(() => {
      if(i === 10) {
        message.edit(i = "Countdown complete.");
        return clearInterval(countInterval);
      }
      message.edit("Countdown: " + (i = i - 10) + "s")
    }, 10000);
  })
}

if (message.content.startsWith(prefix + "cmds")) {
message.author.sendMessage("The commands to run the bot are... \n!countdown \n!membercount \n!prune \n!message \n!shout \n!exile \n!lockdown \n!unlockdown \n!mute \n!warn \n!kick \n!ban  \n!avtar \n!ping ")
}

if (message.content.startsWith(prefix + "lockdown")) {
  let modRole = message.guild.roles.find("name", "Moderator");
  if (!message.member.roles.has(modRole.id)) {
    return message.reply("you don't have the correct role to run this command.");
  }
message.channel.overwritePermissions("267127079856898063", {
 SEND_MESSAGES: false,
 READ_MESSAGES: false,
 READ_MESSAGE_HISTORY: false
})
.then(() => console.log('Locked!'))
.catch(console.error);
return Hook.success("Atlas | Check System", "The chat is now locked.  Command was ran by user " + message.author)

}


if (message.content.startsWith(prefix + "unlockdown")) {
  let modRole = message.guild.roles.find("name", "Moderator");
  if (!message.member.roles.has(modRole.id)) {
    return message.reply("you don't have the correct role to run this command.");
  }
message.channel.overwritePermissions("267127079856898063", {
 SEND_MESSAGES: true,
 READ_MESSAGES: true,
 READ_MESSAGE_HISTORY: true
})
.then(() => console.log('Unlocked!'))
.catch(console.error);
return Hook.success("Atlas | Check System", "The chat is now unlocked.  Command was ran by user " + message.author)
}

if (message.content === "kys") {
  var response = [
  "knock your socks",
  "kick your socks",
  "kanye you shithead",
  "kiss your sister",
  "know your sexisms",
  "krumping youths stop",
  "kill your stereotypes",
  "keem your star",
  "know your self",
  "keep yaoi safe",
  "kick young sinners",
  "keep yourself sterile",
  "kittens yell sometimes",
  "kan’t you spell",
  "krank your souljaboy",
  "keep your sins",
  "kidnap young schoolchildren",
  "kresident yonald slump",
  "kinkshame your senpai",
  "know your status",
  "killed your self-esteem",
  "kanye you’re swaggering",
  "keep yourself single",
  "kiddo you’re supercalifragilisticexpialidocious",
  "kick your self",
  "kick your supporter",
  "kool your self",
  "krunchy yogurt sticks",
  "kairoes your self",
  "kiss your self",
  "kinky yellow socks",
  "kiting your syndra",
  "knowing your smile",
  "kill yeast someone",
  "kiss yellow shits",
  "kraken your step",
  "kids yum silence",
  "knit your shit",
  "kling yolo sellout",
  "kan your sass",
  "kinky young sinners",
  "kiwi youth suckers",
  "kolibob your stoles",
  "Kunt your self",
"Kawaii your self",
"Kpop your shit",
  "Krunch your shoes",
  "Kick your sacks",
  "Klinton your self",
  "Keep your shit",
  "Know your shit",
  "Keep young sexists",
  "Kancer your self",
"Kan your sucker",
  "Klan your sexy",
  "Keep your shoes",
  "kit your sleeve",
  "knock yummy stuff",
  "knuckle your symbal",
  "Klean your something",
  "Knock your self",
  "Knock young soccer",
  "Kum yellow stuffies",
  "Kairoes your stuffies",
  "Knot yam senpai",
  "Klorox your shirt",
  "Kawaii your senpai",
  "keep young sass",
  "key young synths",
  "kiss your shit",
  "kneel young somebodies",
  "krusty young shitstains",
  "kolibob your system",
  "knead yale suppliers",
  "kissing your sausage",
  "kappa your self",
  "Klaw your sausage",
  "Knit your sausage"

];
message.channel.sendMessage(response[Math.floor(Math.random()*response.length)])

}
if (message.content.startsWith(prefix + "join")) {
  // Iterate over all channels
  for (var channel of message.channel.server.channels) {
    // If the channel is a voice channel, ...
    if (channel instanceof Discord.VoiceChannel) {
      // ... reply with the channel name and the ID ...
      client.reply(m, channel.name + " - " + channel.id);
      // ... and join the channel
      client.joinVoiceChannel(channel).catch(error);
      // Afterwards, break the loop so the bot doesn't join any other voice
      // channels
      break;
    }
  }
}

if (message.content.startsWith(prefix + "triggered")) {
  message.delete()
  message.channel.sendMessage("http://i.imgur.com/PijcGEU.gif?noredirect")
}


if (message.content === "no") {
  message.reply("boi chu better say yes or imma spank you with mah belt. :angry:  ");
}

if (message.content === "ppl") {
  message.reply("learn to spell, 'people' please.");
}

if (message.content === "gn") {
  message.reply("good night baby :) ");
}

if (message.content === "rip") {
  message.reply("rice in pies, yum!");
}

if (message.content.startsWith(prefix + "meme")) {
  var response = [
    "http://images.memes.com/meme/1372374",
    "http://images.memes.com/meme/1372373",
    "http://images.memes.com/meme/1372366",
    "http://www.quickmeme.com/p/3vogj2",
    "http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-collection.jpg",
    "https://d2pu2bk1b66iw6.cloudfront.net/photos/2014/10/13/6-81136-8-1413244653.jpg"

  ]
  message.channel.sendMessage(response[Math.floor(Math.random()*response.length)])
}


// Math.random()

if (message.content === "idk") {
  message.reply("I don't know either  :( ");
}


if (message.content.startsWith(prefix + "avatar")) {
        message.reply(message.author.avatarURL);
      };

if (message.content.startsWith(prefix + "ping")) {
          message.channel.sendMessage(`\`${Date.now() - message.createdTimestamp}ms\``);
      }
if (message.content === "prefix") {
  message.channel.sendMessage("My prefix is, ```" + prefix + "```")
}


});




bot.login('MjgzNjU1ODIwOTU1MDkwOTU0.DD0XqQ.YaYWll7bEz3ToNdi-tMRBD0OBV8');
