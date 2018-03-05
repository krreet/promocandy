const TeleBot = require('telebot');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ msglog: [] })
  .write();
  db.get('msglog')
  .remove()
  .write();

/*const http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Last, but not least, listen on port 8080
// The environment variable PORT is automatically defined and equals to 8080
server.listen(process.env.PORT, '0.0.0.0');

*/


let promo = "Please join our channel t.me/ultrapumpsignal and get FREE Airdrops!!. Do follow us at twitter https://goo.gl/ozfpqo";
let btoken = '508633256:AAH0rCkHJSkl5kLksastG0AwoyITwbyccR4';


let vvftoken = '508633256:AAH0rCkHJSkl5kLksastG0AwoyITwbyccR4';//sania aka vvf_babbot
let vftoken = '498032041:AAFTTeXTypck6bhCdfdj9OtOlOM3bJOifoo';// Required. Telegram Bot API token. Megha Dutta vfast_babbot
let ftoken = '514572195:AAERzGh1fhXSoqEbrOC-3Cle6Kt9zoKGGsg';// Required. Telegram Bot API token. Maria Misty fast_babbot
let mtoken = '523699902:AAHZtbThaE-gjQaHOOlA3bfg77hzKFUmiKk'; // Required. Telegram Bot API token. Changchang med_babbot
let stoken = '541983996:AAGP5TWESVky9M7W8owBN0TDSNWoQqddWgs'; // Required. Telegram Bot API token.  NATASHA slow_babbot
let vstoken = '541231414:AAG1szi1ukPijqjInWgKO2zGnfTGyuF4ao4';// Required. Telegram Bot API token. SASHA vslow_babbot
let vvstoken = '468516961:AAH-aJwvpcG3RcUg5Vd_VkVSJDsmm-d8liQ';// aditi aka vvsbabbot
let xtra1 = '459033614:AAGYAgWOiBHFniSub011sx-dmy2GcH-LK2M';//becbabbot
let xtra2 = '522840427:AAHiVcmgK46bY6fmhZzHRo-EE9dp5_bVST4' ; //cafbot4bot
let xtra3 = '399924697:AAGRKF977JpWzQvPV0SE3HYsb7JR113eHr8' ; //edu_babbot
let xtra4 = '529537511:AAF4PiS4OuVtg6GKpqlHmF-BoCOskq70qaY' ;//karan_jaabot
let caftoken = '485818823:AAFmSNklLwgF4M0QZK2cAAvMUDKWXhnJzKw';//cafbot
let testtoken = '485377837:AAHxJ13WnQOcYGckWknmZaQYvOgBaRnB8HE';//delchbot

let xtra1msg = 'Join Here to claim your  Tokens @ultrapumpsignal';//becbabbot
let xtra2msg = 'Join Here to claim your  Coins @ultrapumpsignal'; //cafbot3bot
let xtra3msg = 'Join Here to claim your Coins @ultrapumpsignal'; //edu_babbot
let xtra4msg = 'Join Here to claim your Coins @ultrapumpsignal' ;//karan_jaabot
let delmsg = 'delch test msg';

let cafmsg = `Make sure you Join and stay in our partner channel else you won't receive tokens. Leaving this channel will disqualify you from the AirDrop campaign!!!.

https://t.me/joinchat/AAAAAFBCbvoFDOChyxUIRg` ;//cafwelbot


let cafmsg2 = `Make sure you Join and stay in our partner channel else you won't receive tokens. Leaving this channel will disqualify you from the AirDrop campaign!!!.
t.me/ultrapumpsignal  . 
Do follow us at twitter
 https://goo.gl/ozfpqo` ;
function isInArray(bottypes, type) {
    return bottypes.indexOf(type.toLowerCase()) > -1;
}



 const delch = new TeleBot({
    token: testtoken, // Required. Telegram Bot API token. Megha Dutta vfast_babbot
   
 }); 

 



   delch.on('update' ,  async function (msg) {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);
let un = msg[0].message.from.first_name;
     if(msg[0].message.from.username){

        un =  '@'+msg[0].message.from.username;
     }
     var msglog =  await delch.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${delmsg}`   );
     var usernameorid = msg[0].message.chat.id;
    if(msg[0].message.chat.username)
     var usernameorid = '@'+msg[0].message.chat.username
     console.log(JSON.stringify(msglog)+" msglog");
     db.get('msglog')
     .push({ id: usernameorid, title: msglog.result.message_id})
     .write()
   

    var size = db.get('msglog')
     .filter({id : usernameorid}).size()
     .value();
    
   
console.log(size + "  " + usernameorid); 

if(size >= 5){

   let tobedeleted = db.get('msglog').filter({id : usernameorid})
  .map('title')
  .value()

  console.log(tobedeleted);
  for (let i in tobedeleted) {
    await delch.deleteMessage(usernameorid, tobedeleted[i]);
}
  
    db.get('msglog')
    .remove({ id : usernameorid })
    .write()

}
     

  
  

   // Set a user using Lodash shorthand syntax
  
     
   // Increment count
  
   });

   delch.on(/^\/say (.+)$/, async function (msg, props){
    const text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({id : text})
    .map('title')
    .value()
    


    // need to get array of text msgs sent to text
    for (let i in arrayOfMessages) {
        await delch.deleteMessage('@'+text, arrayOfMessages[i]);
    }

    db.get('msglog')
    .remove({ id : text })
    .write();
    return delch.sendMessage(msg.from.id, "deleted from "+text, { replyToMessage: msg.message_id });
});

 


   




   




 


  




 

delch.connect();
//botf.connect();
// x1.connect();
// x2.connect();
// x3.connect();
// x4.connect();


// bot.connect();
// bot2.connect();
// status_babbot.connect();
// vfast.connect();
// slow.connect();
// vslow.connect();
// fast.connect();
// med.connect();
//vvfast.connect();
//vvslow.connect();
//cafbot.connect();