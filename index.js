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
client.login("ODAzNTY3ODQyNTExMjkwMzc4.YA_q3w.hiO5Pl-QXdxBVMeeGz28zurZiMQ")