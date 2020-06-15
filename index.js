

const Discord = require('discord.js');
const bot = new Discord.Client();

 


const token = 'NzIxODg3MDkwNDU0OTUzOTk0.XubHgQ._Xut5lDPOnaLdwULj4XVFCSn-HE'
bot.login(token);
bot.on('ready', () =>{
    console.log("bot on");
})
const PREFIX = '!';
const fs = require('fs')
bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ally':
            
            fs.readFile('members.txt', function (err, data) {
                var help = args[1].toString();
                help = help.toLowerCase();
                if (err) throw err;
                if(data.includes(help)){
                    msg.channel.send(":shield: This is an ally. Please do not attack :shield:");
                } else{
                    msg.channel.send(":crossed_swords: NOT ALLIED. Feel free to attack :crossed_swords:")
                }
              });
            break;
        case 'addmember':
            if(msg.member.hasPermission("ADMINISTRATOR", explicit = true)){
                console.log(args[1]);
                var help = args[1].toString();
                help = help.toLowerCase();
                console.log(help);
                fs.appendFile('members.txt', "\n"+help, (err)=>{
                    if(err) throw err;
                })
                console.log("updated members.txt succesfully");
            }
            break;
                
        case 'removemember':
            if(msg.member.hasPermission("ADMINISTRATOR", explicit = true)){
                var fileString;
                fileString = fs.readFile('members.txt');
                console.log(fileString);
                
            }

            break;
    
        
    }
        
            
        
                
            
        
        
        
})

function calcTime(offset) {

    d = new Date();

    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    nd = new Date(utc + (3600000*offset));

    return nd.toLocaleString();

}

function prettyDate2(time){
    var date = new Date(parseInt(time));
    var localeSpecificTime = date.toLocaleTimeString();
    return localeSpecificTime.replace(/:\d+ /, ' ');
}

const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}:${minutes}`;
  }



var EVENTS = [
"Team Instances 10:00-14:00 | 18:00-22:00\n"            //0 Team Instances
, "Convoy / Plunder 11:00-14:00 | 18:00-21:00\n"        //1 Convoy / Plunder
, "Decisive Bonds 18:00-24:00\n"                        //2 Decisive bonds
, "Nine-Tails Invasion 20:10-21:00\n"                   //3 Nine-Tails Invasion
, "Matsuri Challenge 19:00-22:00\n"                     //4 Matsuri (normal)
, "Sage World Battlefield 19:30-20:05 \n"               //5 Sage World 
, "Great Ninja War (Wed / Sat) 19:30-21:45\n"           //6 Great Ninja War
, "Rescue the Jinchuriki 18:00-22:30\n"                 //7 Jinchuriki
, "Cat Quiz 20:10-20:30\n"                              //8 Cat Quiz
, "Rogue Ninja Outburst 18:00-18:30\n"                  //9 Rogue ninja
, "Sage World Arena 15:30-16:05\n"                      //10 Sage World Arena
, "Matsuri Challenge (Arena)\n"];                       //11 Fighting Matsuri (Arena)


