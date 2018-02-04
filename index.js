const TeleBot = require('telebot');

var bot = new TeleBot({
 //   token: '458278853:AAFxQ5mzgP2rVwA_38PO2MWYQjKLvmPSLec', // Required. Telegram Bot API token.
// token: '508295930:AAFPDa1ffAX7EASOP9JolugeVXVKhGzJWlU', // Required. Telegram Bot API token.



token: '520368868:AAHPua5_C7YGCEd2KCBjVaXNtm1dTSXg1-w', // Required. Telegram Bot API token.
    allowedUpdates: [], // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
  
});

const bot2 = new TeleBot({
      token: '454962121:AAEc5NIjE8duckQLIIW47Q3hBO8kGI1eaHg', // Required. Telegram Bot API token.
   // token: '508295930:AAFPDa1ffAX7EASOP9JolugeVXVKhGzJWlU', // Required. Telegram Bot API token.
       allowedUpdates: [], // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
     
   }); 
   

/* bot.on('update' , (msg) => {
   
   var darta =  JSON.stringify(msg)
   //console.log(darta);
   // return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
  }); */
 bot2.on('newChatMembers' , (msg2) => {
   
    var darta =  JSON.stringify(msg2)
     console.log(darta);

     if (msg2.new_chat_member ){

        if(!msg2.new_chat_member.is_bot){
            var name =msg2.new_chat_member.first_name ;
            //if(msg.new_chat_member.username)
           // var name ='@'+msg.new_chat_member.username ; //https://goo.gl/o5FioD
       var nc2 =  msg2.new_chat_member;
       console.log(nc2);
       return bot2.sendMessage(msg2.chat.id, `Hi , ${name} !!  Please join our channel t.me/ultrapumpsignal and get extra 100 candy!! . Do follow us at twitter https://goo.gl/ozfpqo` );
     }}
    // return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
   }); 

   
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
       return bot.sendMessage(msg.chat.id, `Hi , ${name} !!  Please join our channel t.me/ultrapumpsignal and get extra 100 candy!!. Do follow us at twitter https://goo.gl/ozfpqo` );
     }}
    // return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
   });
  

    bot.on('update' , (msg) => {
   
    var darta =  JSON.stringify(msg)
     console.log(darta);

     
       return bot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  Please join our channel  t.me/ultrapumpsignal and get extra 100 candy!!. Do follow us at twitter https://goo.gl/ozfpqo` );
     
   
   });
  


/* bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(-1001132537476, `You said: ${ text}`);
}); */


bot.connect();
bot2.connect();
