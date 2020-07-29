const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { Client, MessageEmbed } = require("discord.js");
const { RitchEmbed } = require("discord.js");
const iconCooldown = false;
const openedTickets = new Map();



client.on("ready", () => {
  console.log(`ready to go meh mehing`);
  client.user.setActivity(`my daddy playing with his thing 😉`, {
    type: `WATCHING`
  });
  var currentdate = new Date();
  var currentdate2 = new Date();
  var datetime =
    "Date Time: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate2.getFullYear() +
    " @ " +
    currentdate2.getHours() +
    ":" +
    currentdate2.getMinutes();
  console.log(datetime);

});

//commands without prefix

client.on("message", async message => {
  if(message.channel.type === "dm") return
  if (message.author.bot) return;
  const amount = 3;

  if (message.content.toLowerCase().includes("hehe")) {
    message.channel.send("<:hehe:709820829520756868>");
  } else if (message.content.toLowerCase().includes("haha")) {
    message.channel.send("<:hehe:709820829520756868>");
  } else if (message.content.toLowerCase().includes("meh")) {
    message.channel.send("<:meh:709820286735876108>");
  } else if (message.content === "cry") {
    message.channel.send(`${message.author} is crying:cry:`);
  } else if (message.content.toLowerCase().includes("lmao")) {
    message.channel.send(":rofl:");
  } else if (message.content.toLowerCase().includes("rofl")) {
    message.channel.send(":rofl:");
  } else if (message.content.toLowerCase().includes("lol")) {
    message.channel.send(":rofl:");
  } else if (message.content.toLowerCase().includes("lfmao")) {
    message.channel.send(":rofl:");
  } else if (message.content.toLowerCase().includes("who does milas love")) {
    message.channel.send("...");
    setTimeout(function() {
      message.channel.send("he loves firefox and would do anything for her");
      message.channel.send("please dont tell him that i told you this");
    }, 3000);
    setTimeout(function() {
      message.channel.send("<@355993074117115914> hehehe they asked");
      message.channel.send("<:meh:709820286735876108>");
      message.channel.send("<:meh:709820286735876108>");
      message.channel.send("<:meh:709820286735876108>");
    }, 10000);
  } else if (message.content.toLowerCase().includes("i feel like dying")) {
    message.reply(
      "well i know that milas is feeling like that but one million times worse"
    );
  }
});

//commands with prefix
client.on("message", async message => {

  if(message.channel.type === "dm") return
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  if (command == "test") {
    message.channel.send(`${message.author}`);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const jointest = new MessageEmbed()
      .setTitle(`Welcome to Anime hangout.`)
      .setImage(message.author.displayAvatarURL())
      .setColor("#" + randomColor);
    message.channel.send(jointest);
  } else if (command == "amrish") {
    const amrish = new MessageEmbed()
      .setColor("#9932CD")
      .setTitle("About Amrish")
      .addFields(
        {
          name: "irl stuff",
          value: "Name:\nB-Day:\nRelation ship:",
          inline: true
        },
        {
          name: "Answers",
          value: "Amrish\n21st of august 2006\nsingle boy cri",
          inline: true
        }
      );
    message.channel.send(amrish);
  } else if (command == "milas") {
    const Milas = new MessageEmbed()
      .setColor("#000a81")
      .setTitle("About Milas")
      .addFields(
        {
          name: "irl stuff",
          value: "Name:\nAge:\nB-Day:\nRelation ship:",
          inline: true
        },
        {
          name: "Answers",
          value: "Milas\n14\n9th of february  2006\nsuper single",
          inline: true
        }
      );
    message.channel.send(Milas);
  } else if (command == "yikes") {
    const yikes = new MessageEmbed()
      .setColor("#078db4")
      .setTitle("About Yikes")
      .addFields(
        {
          name: "irl stuff",
          value: "Name:\nB-Day:\nRelation ship:",
          inline: true
        },
        {
          name: "Answers",
          value: "Yikes\n6th of march (year unkown)\nsingle",
          inline: true
        }
      );
    message.channel.send(yikes);
  } else if (command === "alina") {
    const alina = new MessageEmbed()
      .setColor("#FFB45F")
      .setTitle("About Alina")
      .addFields(
        {
          name: "irl stuff",
          value: "Name:\nB-Day:\nRelation ship:",
          inline: true
        },
        {
          name: "answers",
          value: "Alina\nMay the 19th\nTaken so leave me alone",
          inline: true
        }
      );
    message.channel.send(alina);
  } else if (command === "yuri") {
    const alina = new MessageEmbed()
      .setColor("#87ceeb")
      .setTitle("About yuri")
      .addFields(
        {
          name: "irl stuff",
          value: "Name:\nB-Day:\nRelation ship:",
          inline: true
        },
        {
          name: "answers",
          value: "jen\nmay 17th 2005\ntaked (married to)",
          inline: true
        }
      );
    message.channel.send(alina);
  } else if (command === "help") {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const helpEmbed = new MessageEmbed()
      .setTitle("help")
      .setColor("#" + randomColor)
      .addFields(
        {
          name: "Commands",
          value: "about\nrandom\ndate",
          inline: true
        },
        {
          name: "Description",
          value:
            "meh\nrandomizer use a!random help for help\n tells you the date and time **cest**"
        }
      );
  } else if (command === "about") {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const About = new MessageEmbed()
      .setColor("#" + randomColor)
      .setTitle("How to use our About command")
      .addFields({ name: "Members", value: "alina\namrish\nmilas\nyikes" });
    message.channel.send(About);
  } else if (command === "congrats") {
    const user = message.mentions.users.first() || message.author;
    if (message.author.bot) return;
    if (!args.length) {
      return message.channel.send(
        `${message.author} who the fuck do i have to congratulate?`
      );
    } else if (args[0] === "foo") {
      return message.channel.send("bar");
    }
    let congrats = args[0];
    const congrats2 = new MessageEmbed()
      .setTitle(`congrats and getting a whole year closer to the end`)
      .setColor("#87ceeb")
      .setImage(user.displayAvatarURL);
    /*message.channel.send("but i dont want to congratulate anyone")*/
    setTimeout(() => {
      message.channel.send(`happoy birthday ${args[0]}`);
      message.channel.send(congrats2);
    }, 1);
  } else if (command === "SIMP") {
    const user = message.mentions.users.first() || message.author;
    if (message.author.bot) return;
    if (!args.length) {
      return message.channel.send(
        `${message.author} who the fuck is simping now?`
      );
    } else if (args[0] === "foo") {
      return message.channel.send("bar");
    }
    let congrats = args[0];
    const SIMP = new MessageEmbed()
      .setTitle(`I think ${args[0]} forgot to  take their pill`)
      .setColor("#87ceeb");
  }

  if (command === "suggest") {
    const channel = message.guild.channels.find(
      ch => ch.name === "bot-suggestions"
    );

    channel.send("Suggestion:\n " + args.join(" "));
  } else if (command === "test3") {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
      .setColor(0x333333)
      .setAuthor(user.username)
      .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
  } else if (command === "anime") {
    var Anime = [
      "Attack on titan",
      "Inu x boku ss",
      "Miss Kobayashi's Dragon Maid",
      "Nekopara",
      "Rewrite",
      "Isekai Cheat Magician",
      "kakegurui",
      "Sakura-sou no Pet na Kanojo",
      "tokyo ghoul",
      "Sword Art Online :face_vomiting: ",
      "spriggan",
      "Enen no Shouboutai",
      "date a live"
    ];
    var randomAnime = Anime[Math.floor(Math.random() * Anime.length)];
    message.channel.send(randomAnime);
  }

  var Anime = [
    "Attack on titan",
    "Inu x boku ss",
    "Miss Kobayashi's Dragon Maid",
    "Nekopara",
    "Rewrite",
    "Isekai Cheat Magician",
    "kakegurui",
    "Sakura-sou no Pet na Kanojo",
    "tokyo ghoul",
    "Sword Art Online :face_vomiting: ",
    "spriggan",
    "Enen no Shouboutai",
    "death note",
    "blue exorcist",
    "Akame ga kill",
    "7 seeds",
    "is it my to pick up girls in a dungeon. Aka the anime with a way to long name",
    "Guilty crown",
    "anohana",
    "erased",
    "Charlotte",
    "angel beats",
    "mob psycho 100",
    "castlevania",
    "Your life in april ",
    "beastars",
    "date a Live "
  ];

  var randomAnime = Anime[Math.floor(Math.random() * Anime.length)];
  var randomAnime = Anime[Math.floor(Math.random() * Anime.length)];
  var slam = false;

  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  if (command === "random") {
    if (message.author.bot) return;
    if (!args.length) {
      return message.channel.send(
        `${message.author} what do i have to make random!`
      );
    } else if (args[0] === "anime") {
      return message.channel.send(randomAnime);
    } else if (args[0] === "number") {
      const randomNr = Math.floor(Math.random() * 10).toString(16);
      message.channel.send(randomNr);
    } else if (args[0] === "help") {
      const randomhelp = new MessageEmbed()
        .setTitle("help for the random help")
        .setColor("#ffffff")
        .addFields(
          {
            name: "Commands",
            value: "anime\nhelp\nnumber\nname\n",
            inline: true
          },
          {
            name: "Description",
            value:
              "tells you a random anime's name from <#710408531232423966>\nyoure already here<:hehe:709820829520756868>\ngives you a random number from 0 to 100\n gives you a random name output. can be used without any extensions to get a random name without being gender specific",
            inline: true
          },
          {
            name: "extenstions",
            value: "None\nNone\nNone\nboy, girl",
            inline: true
          }
        );
      message.channel.send(randomhelp);
    }
  }

  /*if(command === "æøåspamæøå") {
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone") 
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone") 
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone") 
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone") 
       message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone") 
       message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      message.channel.send("@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone") 
  
  }*/

  //Set commands
  if(command === "set"){
    if(args[0] === "icon") {
      if(iconCooldown === false) {
        if(message.author.id === "355993074117115914" || message.author.id === "736604807678263327") {
          if(!message.attachments.size) {
            if(!args[1]) {
              message.reply("you need to attach an image or the image link (must be an jpg or png")
            } else if(args[1].endsWith("jpg") || args[1].endsWith("png")) {
              client.user.setAvatar(args[1])
              message.channel.send("avatar has been set to " + client.user.avatarURL)
              iconCooldown = true;
              setTimeout(() => {
                iconCooldown = false
              }, 300000);
            }
          } else {
            const attachment = message.attachments.array()[0].url;
            client.user.setAvatar(attachment)
            message.channel.send("avatar has been set to " + attachment)
            iconCooldown = true;
            setTimeout(() => {
              iconCooldown = false
            }, 300000);
          }
        } else {
          message.channel.send("you do not have permission to use this command ")
        }
      } else {
        message.channel.send("this command is on cooldown")
      }
    }
  } else if(command === "jackhammer") {
    const botAuthor = client.users.cache.get("355993074117115914")
    const amrish = client.users.cache.get("702518527910871050")
    const sextingEmbed = new MessageEmbed()
    .setTitle(`"${amrish.tag}" hello`)
    .setImage("./images/awkwerd.jpg")
    .setDescription(`hi sweaty... \n i see you have been texting me alot and im sorry i havent responded before now\nuse the commad "hello?" if want to talk`)
    .setAuthor(amrish.tag, amrish.displayAvatarURL());
    botAuthor.send(sextingEmbed)
  }
});


//dm commands
client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith("hello?")) {
    if(message.channel.type === "dm") {
      message.channel.send(`if want to talk use the command "hello?" to start my ai`)
    }
  }
  if(message.channel.type === "dm") {
    
    if(!openedTickets.has(message.author.id)) {
      const ACCEPT = "737027189782085662";
      const DENY = "737027191166205962";
        message.author.send("sorry im not allowed to talk to strangers. im gonna ask my daddy if i can talk to you 😃 if he doesnt respond in the next 5 min i will take it as a no")
        openedTickets.set(message.author.id, message.guild)
        const DESTINATION = "737008900800512024"
        const ch = client.channels.cache.get(DESTINATION)     
        const chatEmbed = new MessageEmbed()
          .setTitle(`"${message.author.username}" wants to talk to animehub`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL());
        const msg = await ch.send(chatEmbed)
        await msg.react(ACCEPT);
        await msg.react(DENY);


        try {
          const reactionFilter = (reaction, user) => [ACCEPT, DENY].includes(reaction.emoji.id) && !user.bot;
          const reactions = await msg.awaitReactions(reactionFilter, { max:1, time: 300000, errors:["time"]})
          const choice = reactions.get(ACCEPT) || reactions.get(DENY)
          if(choice.emoji.id === ACCEPT) {
            await handleCollectors(ch, message);
            message.author.send("i can talk to you yay. :partying_face:")
          } else if(choice.emoji.id === DENY) {
            message.author.send("HE SAID NO :sob:")
            setTimeout(() => {
              openedTickets.delete(message.author.id)
            }, 21600000)
          }


        } catch (err) {
            console.log("youre an idiot and slow fucker")
            ch.send("TOOO SLOW BIG DICK BOI")
            console.log(err)
            message.author.send("HE WAS TOOO SLOW SORWY I CAN'T TALK WITH YOU :sob:")
            openedTickets.delete(message.author.id)
        }

      } else {
        message.author.send("error: the user could not be found")
        openedTickets.delete(message.author.id)
      }
  }
})

client.on("guildMemberAdd", member => {
  console.log("new member in " + guild.name)
});

client.login(config.token);

function handleCollectors(channeL, message) {


  const filter = m => m.author.id === message.author.id;
  const daddyCollector = message.channel.createMessageCollector(filter);
  
  const userFilter = m => m.channel.id === channeL.id && !m.author.bot;
  const usercollector = channeL.createMessageCollector(userFilter);


  return new Promise((resolve, reject) => {


    daddyCollector.on("collect", m => {
      if(m.content.toLowerCase() === "bye") {
        
        m.author("bye. sorry i dont feel like talking anymore1")
        daddyCollector.stop();
        usercollector.stop();
        resolve();
      } else {
        
        channeL.send(`"***${m.author}***": ${m}`)
      }
    });

    usercollector.on("collect", m => {
      if(m.content.toLowerCase() === "bye") {
        
        channeL.send("bye. sorry i dont feel like talking anymore2")
        daddyCollector.stop();
        usercollector.stop();
        resolve();
      } else {
        message.author.send(m)
      }
    
    });
  })
}