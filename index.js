const TeleBot = require('telebot');


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
let bottypes = ["vvfast" ,"vfast", "fast", "med", "slow" , "vslow", "vvslow"];
let vvfast_g  = ["officialios"];
let vfast_g  = ["officialios"];
let fast_g  = ["coindelta"];
let med_g  = ["ALPHAPROTOCOL"];
let slow_g  = ["sayofficial" , "AFFILiATECOINTALK","energitoken", "polymathnetwork" , "gonetwork_ch2"];
let vslow_g  = ["hurifyico", "candygame"  , "AIFUNS_Z" ,"earairdrop"];
let vvslow_g  = ["officialios"];
let vvftoken = '508633256:AAH0rCkHJSkl5kLksastG0AwoyITwbyccR4';//sania aka vvf_babbot
let vftoken = '498032041:AAFTTeXTypck6bhCdfdj9OtOlOM3bJOifoo';// Required. Telegram Bot API token. Megha Dutta vfast_babbot
let ftoken = '514572195:AAERzGh1fhXSoqEbrOC-3Cle6Kt9zoKGGsg';// Required. Telegram Bot API token. Maria Misty fast_babbot
let mtoken = '523699902:AAHZtbThaE-gjQaHOOlA3bfg77hzKFUmiKk'; // Required. Telegram Bot API token. Changchang med_babbot
let stoken = '541983996:AAGP5TWESVky9M7W8owBN0TDSNWoQqddWgs'; // Required. Telegram Bot API token.  NATASHA slow_babbot
let vstoken = '541231414:AAG1szi1ukPijqjInWgKO2zGnfTGyuF4ao4';// Required. Telegram Bot API token. SASHA vslow_babbot
let vvstoken = '468516961:AAH-aJwvpcG3RcUg5Vd_VkVSJDsmm-d8liQ';// aditi aka vvsbabbot
let xtra1 = '459033614:AAGYAgWOiBHFniSub011sx-dmy2GcH-LK2M';//becbabbot
let xtra2 = '426160897:AAGqBzSld5PSkXAVvW4JrDCBFtlinT6BJqY' ; //cafbot3bot
let xtra3 = '399924697:AAGRKF977JpWzQvPV0SE3HYsb7JR113eHr8' ; //edu_babbot
let xtra4 = '529537511:AAF4PiS4OuVtg6GKpqlHmF-BoCOskq70qaY' ;//karan_jaabot
let caftoken = '485818823:AAFmSNklLwgF4M0QZK2cAAvMUDKWXhnJzKw';//cafbot


let xtra1msg = 'Join Here to claim your  Tokens @ultrapumpsignal';//becbabbot
let xtra2msg = 'Join Here to claim your  Coins @ultrapumpsignal'; //cafbot3bot
let xtra3msg = 'Join Here to claim your Coins @ultrapumpsignal'; //edu_babbot
let xtra4msg = 'Join Here to claim your Coins @ultrapumpsignal' ;//karan_jaabot

let cafmsg = `Make sure you Join and stay in our partner channel else you won't receive tokens. Leaving this channel will disqualify you from the AirDrop campaign!!!.

https://t.me/joinchat/AAAAAFBCbvoFDOChyxUIRg` ;//cafwelbot


let cafmsg2 = `Make sure you Join and stay in our partner channel else you won't receive tokens. Leaving this channel will disqualify you from the AirDrop campaign!!!.
t.me/ultrapumpsignal  . 
Do follow us at twitter
 https://goo.gl/ozfpqo` ;
function isInArray(bottypes, type) {
    return bottypes.indexOf(type.toLowerCase()) > -1;
}

const status_babbot = new TeleBot({
    token: '477009936:AAFHOhrbcUedcc-4XA4qKsGsUb29Dc4Ug-E', // Required. Telegram Bot API token. ststus babbot
   
 }); 


 const cafbot = new TeleBot({
    token: caftoken, // Required. Telegram Bot API token. Megha Dutta vfast_babbot
   
 }); 

 const x1 = new TeleBot({
    token: xtra1, // Required. Telegram Bot API token. Megha Dutta vfast_babbot
   
 }); 

 const x2 = new TeleBot({
    token: xtra2, // Required. Telegram Bot API token. Megha Dutta vfast_babbot
   
 }); 
 const x3 = new TeleBot({
    token: xtra3, // Required. Telegram Bot API token. Megha Dutta vfast_babbot
   
 }); 
 const x4 = new TeleBot({
    token: xtra4, // Required. Telegram Bot API token. Megha Dutta vfast_babbot
   
 }); 

 const vvfast = new TeleBot({
    token: vvftoken, // Required. Telegram Bot API token. Megha Dutta vfast_babbot
   
 }); 

 const vfast = new TeleBot({
    token: vftoken, // Required. Telegram Bot API token. Megha Dutta vfast_babbot
   
 }); 
 const fast = new TeleBot({
    token: ftoken, // Required. Telegram Bot API token. Maria Misty fast_babbot
   
 });
 const med = new TeleBot({
    token: mtoken, // Required. Telegram Bot API token. Changchang med_babbot
   
 });
 const slow = new TeleBot({
    token: stoken, // Required. Telegram Bot API token.  NATASHA slow_babbot
   
 });
 const vslow = new TeleBot({
    token: vstoken, // Required. Telegram Bot API token. SASHA vslow_babbot
   
 });

 const vvslow = new TeleBot({
    token: vvstoken, // Required. Telegram Bot API token. SASHA vslow_babbot
   
 });
 status_babbot.on(/^\/status (.+)$/, (msg, props) => {
console.log(JSON.stringify(msg)+'msg');
console.log(JSON.stringify(props)+'props');

let bottype = msg.text.split(' ').slice(1)[0];
console.log("message captured "+bottype);
if (!isNaN(bottype) || !bottype) 
return status_babbot.sendMessage(msg.from.id ,'Sorry, you didn\'t pass a valid bot type.');
if (!isInArray(bottypes, bottype)) 
return status_babbot.sendMessage(msg.from.id ,'Sorry,  bot type does not exist');

bottype = bottype.toLowerCase();
var bottype_g =  bottype.toLowerCase()+'_g';
status_babbot.sendMessage(msg.from.id,`quering staus for ${bottype}`, { replyToMessage: msg.message_id });

for (var i = 0; i < eval(bottype_g).length; i++) {
    let cg =  '';
    cg = eval(bottype_g)[i];
    //console.log(i);
   var kicked = '';
  eval(bottype).sendMessage('@'+eval(bottype_g)[i], ".").catch(error => { console.log('caught', error);
   console.log(i );
   kicked = cg;
//console.log(cg);
   status_babbot.sendMessage(msg.from.id,`@${bottype}_babbot kicked from  @${cg} `);

});

//if( cg !== kicked)
//status_babbot.sendMessage(msg.from.id,`@${bottype}_babbot alive in  ${cg} `);

    //Do something


}
return;

 });

x1.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });
   x2.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });

   x3.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });
   x4.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });
 vvfast.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });


  

 vfast.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });


   fast.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });


   med.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });


   slow.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });



   vslow.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });


   vvslow.on('leftChatMember' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);


     let un = msg.left_chat_member.username;
     let bn = msg.left_chat_member.first_name;
     let sg = msg.chat.title;
     let kr = msg.from.username;
     let kn = msg.from.first_name;
     //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

     return status_babbot.sendMessage('407003132,',`Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;
   
   });

   x1.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);
let un = msg[0].message.from.first_name;
     if(msg[0].message.from.username){

        un =  msg[0].message.from.username;
     }
       return x1.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${xtra1msg}`   );
     
   
   });
   x2.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     let un = msg[0].message.from.first_name;
     if(msg[0].message.from.username){

        un =  msg[0].message.from.username;
     }
       return x2.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${xtra2msg}`  );
     
   
   });
   x3.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return x3.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${xtra3msg}`   );
     
   
   });
   x4.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return x4.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${xtra4msg}`  );
     
   
   });

   vvfast.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return vvfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`  , { replyToMessage: msg[0].message.message_id } );
     
   
   });

   vfast.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`  , { replyToMessage: msg[0].message.message_id } );
   
   });
   fast.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return fast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`  , { replyToMessage: msg[0].message.message_id } );
   
   });
   med.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return med.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`  , { replyToMessage: msg[0].message.message_id } );
   
   });

   slow.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return slow.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`  , { replyToMessage: msg[0].message.message_id } );
   
   });

   vslow.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return vslow.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`  , { replyToMessage: msg[0].message.message_id } );
   
   });


   vvslow.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return vvslow.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`  , { replyToMessage: msg[0].message.message_id } );
   
   });
   
const botf = new TeleBot({
    token: '407044467:AAGMSmZzfdX3oZOxiX7OH8OGjRl0C8n3hgA', // Required. Telegram Bot API token. token bot
   
 }); 







var candytoken = '520899316:AAHvX2qPTDrlhvsGymISjKoEcSLJet_zqtM'; //'520368868:AAHPua5_C7YGCEd2KCBjVaXNtm1dTSXg1-w';

const bot = new TeleBot({

token:  candytoken ,// Required. Telegram Bot API token.
 
});

const bot2 = new TeleBot({
      token: '454962121:AAEc5NIjE8duckQLIIW47Q3hBO8kGI1eaHg', // Required. Telegram Bot API token.
   // token: '508295930:AAFPDa1ffAX7EASOP9JolugeVXVKhGzJWlU', // Required. Telegram Bot API token.
       allowedUpdates: [] // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
     
   }); 
   




 botf.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    //split props by space 1st is bot naem 2nd token rn only 1
  //  console.log(text);
  candytoken = text;


 
  bot.stop("polling stopped bot");
bot = null;
  bot = new TeleBot({
    //   token: '458278853:AAFxQ5mzgP2rVwA_38PO2MWYQjKLvmPSLec', // Required. Telegram Bot API token.
   // token: '508295930:AAFPDa1ffAX7EASOP9JolugeVXVKhGzJWlU', // Required. Telegram Bot API token.
   
   
   token:  candytoken ,// Required. Telegram Bot API token.
       allowedUpdates: []// Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
     
   });
  bot.start();
  return botf.sendMessage(msg.from.id,`candytoken set to ${text}`, { replyToMessage: msg.message_id });
 

});

/* bot.on('update' , (msg) => {
   
   var darta =  JSON.stringify(msg)
   //console.log(darta);
   // return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
  }); */


  cafbot.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);
   //  cafbot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${cafmsg}`  , { replyToMessage: msg[0].message.message_id } );
     
       return cafbot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${cafmsg}`  , { replyToMessage: msg[0].message.message_id , webPreview: true} );
   
   });


  cafbot.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);
    // cafbot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${cafmsg}`  , { replyToMessage: msg[0].message.message_id } );
     
       return cafbot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${cafmsg2}`  , { replyToMessage: msg[0].message.message_id , webPreview: true} );
   
   });


  




 bot2.on('newChatMembers' , (msg2) => {
   
    var darta =  JSON.stringify(msg2)
     console.log("nishabot"+darta);

     if (msg2.new_chat_member ){

        if(!msg2.new_chat_member.is_bot){
            var name =msg2.new_chat_member.first_name ;
            //if(msg.new_chat_member.username)
           // var name ='@'+msg.new_chat_member.username ; //https://goo.gl/o5FioD
       var nc2 =  msg2.new_chat_member;
       console.log(nc2);
       return bot2.sendMessage(msg2.chat.id, `Hi , ${name} !! ${promo} ` , { replyToMessage: msg2.message_id });

       
     }}
    // return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
   }); 

/*    bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    console.log(text);
  promo = text;
  return;
}); */
  bot.on('newChatMembers' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     if (msg.new_chat_member ){

        if(!msg.new_chat_member.is_bot){
            var name =msg.new_chat_member.first_name ;
            //if(msg.new_chat_member.username)
           // var name ='@'+msg.new_chat_member.username ; 
       var nc =  msg.new_chat_member;
       console.log(nc);
       return bot.sendMessage(msg.chat.id,  `Hi , ${name} !! ${promo} ` );
     }}
    // return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
   });
  

    bot.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return bot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`  , { replyToMessage: msg[0].message.message_id } );
     
   
   });
  

   bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});
/* bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(-1001132537476, `You said: ${ text}`);
}); */

//botf.connect();
x1.connect();
x2.connect();
x3.connect();
x4.connect();


bot.connect();
bot2.connect();
status_babbot.connect();
vfast.connect();
slow.connect();
vslow.connect();
fast.connect();
med.connect();
vvfast.connect();
vvslow.connect();
cafbot.connect();