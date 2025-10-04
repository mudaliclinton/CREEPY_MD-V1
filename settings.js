//-------------------[Created by mudali]-----------------// 
//-------------------[contact (me wa.me/mudalitech)]----------------------//

//-------[import]------//
const fs = require('fs')
const chalk = require('chalk')





//------- [put your credintials below]------//

global.SESSION_ID = process.env.SESSION_ID || "SESSION_ID_HERE" // session id


global.ownernomer = process.env.OWNER_NUMBER || "25403338485"

global.ownername = process.env.OWNER_NAME || "Mudali"


global.ownernumber = process.env.OWNER_NUMBER2 || '255697608274'  


//put your phone number above
//let the owner as Danny or you can just put your name


//custom prefix
global.prefa = [',','!','.','#','&']


//false=disable and true=enable



global.autostatusReact = true //status reactions

global.autoreact = false // autoreact

global.autoRecording = false //auto recording

global.autoTyping = true //auto typing

global.autorecordtype = false //auto typing + recording

global.autoread = false //auto read messages

global.autobio = true //auto update bio

global.anti91 = false //auto block +91 

global.autoswview = true //auto view status/story


//Thank you for using 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥2
//suppoet us by following our official channel
//https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r
//𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝔂 𝒟𝒶𝓃𝓃𝓎




// Reply messages
global.mess = {
    done: "`Bot Creepy Done..!`",
    prem: "`Oh no 😔! This for creepy premium users only...`",
    admin: "`Only Mudali can use this 😩`",
    botAdmin: "`🤖 I'm not an admin here 🚶`",
    owner: "`You are not my owner 😡`",
    group: "`This is only for groups idiot?🤔`",
    private: "`Use this in my Dm 😡`",
    wait: "`Wait i 'm on it ...`",
    error: "`Error!`",
};

global.ytname = "YT: https://www.youtube.com/@creepy_technology";
global.socialm = "GitHub: https://github.com/DannyTech20";
global.location = "Arusha/Tanzania";
global.ownername = "𝐷𝛥𝛮𝛮𝑌";
global.botname = "CREEPY_MD-V1"; 

// Sticker details
global.packname = "Creepy-Tech";
global.author = "Danny";

// Console view/theme
global.themeemoji = "🤖";
global.wm = "Danny";

global.link = "https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r";







// Watch file changes
global.thumb = fs.readFileSync("./DannyTechMedia/thumb.jpg");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});
