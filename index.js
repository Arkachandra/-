var Discord = require("discord.js")
var client = new Discord.Client();
var prefix = "!"
client.on("ready", massage => {
    console.log("I am ready to Go");

}};


client.on("massage", massage => {
    if(massage.content === `${prefix}pong`){
        if(massage.channel.send(`pong - ${client.ws.ping}`)
    }
})
client.login("process.env.BOT_TOKEN")
