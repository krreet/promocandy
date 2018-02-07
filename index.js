const TeleBot = require('telebot');





const botf = new TeleBot({
    token: '407044467:AAGMSmZzfdX3oZOxiX7OH8OGjRl0C8n3hgA', // Required. Telegram Bot API token. token bot
   
 }); 







var candytoken = '547810701:AAGauSHR_JFmDZ8S2bwizskawalhUtc7O0c';//'412537622:AAH-XPmHp86fO3qNFO-sG4iaLsDfn_9XmSc' ; //'510806049:AAEN3PCj03h_ZQzqkf2R5TbS6xOl7SlMDwQ';//'490749636:AAGz_DYCClBP3ZqfIWSlNwfqCWFS-ZfPVIA';//'470438928:AAE8xFF_kq4QLAI1N_aM3B7T-o1E_UoJH0Q';//'522847314:AAEhARhnwgQ1FqFlMgKRaYtgBXc0yIPTjjc';//'522144670:AAEhYDmZsWu0EBI89GxB65XYMq0sJYnXqDE'; //'520368868:AAHPua5_C7YGCEd2KCBjVaXNtm1dTSXg1-w';
var promo = "Please join our channel t.me/ultrapumpsignal and get extra 100 candy!!. Do follow us at twitter https://goo.gl/ozfpqo";
var bot = new TeleBot({
 //   token: '458278853:AAFxQ5mzgP2rVwA_38PO2MWYQjKLvmPSLec', // Required. Telegram Bot API token.
// token: '508295930:AAFPDa1ffAX7EASOP9JolugeVXVKhGzJWlU', // Required. Telegram Bot API token.


token:  candytoken ,// Required. Telegram Bot API token.
    allowedUpdates: []// Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
  
});

const bot2 = new TeleBot({
      token: '454962121:AAEc5NIjE8duckQLIIW47Q3hBO8kGI1eaHg', // Required. Telegram Bot API token.
   // token: '508295930:AAFPDa1ffAX7EASOP9JolugeVXVKhGzJWlU', // Required. Telegram Bot API token.
       allowedUpdates: [] // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
     
   }); 
   
const bot3 = new TeleBot({
      token: '504533873:AAHArdSOQZrzk0BvpHSz3_asfhrUbBaR88I', // Required. Telegram Bot API token.
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
       return bot2.sendMessage(msg2.chat.id, `Hi , ${name} !! ${promo} `);
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

     
       return bot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}` );
     
   
   });
    bot3.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return bot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}` );
     
   
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

botf.connect();
bot.connect();
bot2.connect();
bot3.connect();
