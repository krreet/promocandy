const TeleBot = require('telebot');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ msglog: [] })
    .write();
db.get('msglog')
    .remove()
    .write();


let stopg = [];
let activg = [];
let promo = "Please join our channel t.me/ultrapumpsignal and get FREE Airdrops!!. Do follow us at twitter https://goo.gl/ozfpqo";
let bottypes = ["vvfast", "vfast", "fast", "med", "slow", "vslow", "vvslow"];
let vvfast_g = ["officialios"];
let vfast_g = ["officialios"];
let fast_g = ["coindelta"];
let med_g = ["ALPHAPROTOCOL"];
let slow_g = ["sayofficial", "AFFILiATECOINTALK", "energitoken", "polymathnetwork", "gonetwork_ch2"];
let vslow_g = ["hurifyico", "candygame", "AIFUNS_Z", "earairdrop"];
let vvslow_g = ["officialios"];
let vvftoken = '419571025:AAGao9eeb_hdWKmUhZx3T1qnmU6Q7esUXhw';//sania aka vvfbabbot
let vftoken = '490311395:AAEdkvUXpnEzN6cs3O8-XAUPp7WeaoeUbF4';// Required. Telegram Bot API token. Megha Dutta vfbabbot
let ftoken = '462187839:AAHVtmruiQoXGV5Bb28Fl4qevYpE3m_9AVs';// Required. Telegram Bot API token. Maria Misty fbabbot
let mtoken = '524655667:AAFQLJHOzIG-hxqR5hgGbO9ZD10-bm2JY-o'; // Required. Telegram Bot API token. Changchang mbabbot
let stoken = '507972597:AAH_yfATs8vBj_Euk6JUT7xOWOqfGnxbn4M'; // Required. Telegram Bot API token.  NATASHA slbabbot
let vstoken = '524873436:AAF6SklKY45wAMg0CGD0q29QWxoxp5IfEqA';// Required. Telegram Bot API token. SASHA vsbabbot
let vvstoken = '518243930:AAE-b8FxGOx-_eGppzaLiGsQeVI1S0vH59Y';// aditi aka vvsbabbot
let xtra1 = '540001794:AAF4ZFxr4FkKESxLxLi_HdsQpKJMMxi0VMQ';// official Claim aka becbabbot
let xtra2 = '482293461:AAEtYVpd0v3cYefDpahN98fYrjgI1TGP8z0'; //  Claim Token aka  cafbabbot
let xtra3 = '527690509:AAFFvJh7PB22xAL16VFLHejPGnhdJCREc9Y'; //admin aka edbabbot
let xtra4 = '532190109:AAHGlgspToPFAIKRuJg8LR2C_37rh559k28';//  karan Jaat aka karanbabbot
let caftoken = '560247092:AAGDGG_oxUw-i0iJbme9vVHebCzEDXwsEA0';// token ckaim aka cafbotbot
let cafalt ='523565035:AAEqDfpUg957kZaR_0NQ11GtncXVh4zuzvM' // cafgotbot

let xtra1msg =  'Join Here to claim your  Tokens @ultrapumpsignal';//becbabbot
let xtra2msg = 'Join Here to claim your  Coins @ultrapumpsignal'; //cafbot3bot
let xtra3msg = 'Join Here to claim your Coins @ultrapumpsignal'; //edbabbot
let xtra4msg = 'Join Here to claim your Coins @ultrapumpsignal';//karan_jaabot

var cafmsg1 = `BITSONG AirDrop. 

Free 200 BTSG==>>$1750. 

Register here and get free 200 BTSG https://bitsong.io/start/MULH4ZJB` ;//cafwelbot 126690


let cafmsg2 = `Make sure you Join and stay in our partner channel else you won't receive tokens. Leaving this channel will disqualify you from the AirDrop campaign!!!.
t.me/ultrapumpsignal  . 
Do follow us at twitter
 https://goo.gl/ozfpqo` ;

 
let cafmsg = `Make sure you Join and stay in our partner channel!!!.

t.me/ultrapumpsignal . 

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

const cafbotalt = new TeleBot({
    token: cafalt, // Required. Telegram Bot API token. Megha Dutta vfast_babbot

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

status_babbot.on(/^\/clear(.+)$/, async function (msg, props) {
    let text = props.match[1];

    text = text.trim();
    stopg = stopg.filter(e => e !== text);

    return await status_babbot.sendMessage(-1001224956341, "stopped grps by admin  " + text + "   " + JSON.stringify(stopg));

});

status_babbot.on(/^\/act(.+)$/, async function (msg, props) {

    return await status_babbot.sendMessage(-1001224956341, "active groups currently beta   " + JSON.stringify(activg));


});



status_babbot.on(/^\/rem(.+)$/, async function (msg, props) {
    let text = props.match[1];

    text = text.trim();

    if (!(isNaN(text))) {

        text = Number(text);
    }
    activg = activg.filter(e => e !== text);

    return await status_babbot.sendMessage(-1001224956341, "manually removed" + text + "   " + JSON.stringify(activg));

});


status_babbot.on(/^\/delall(.+)$/, async function (msg, props) {

    activg = [];

    return await status_babbot.sendMessage(-1001224956341, "manually removed all   " + JSON.stringify(activg));

});

status_babbot.on(/^\/status (.+)$/, (msg, props) => {
    console.log(JSON.stringify(msg) + 'msg');
    console.log(JSON.stringify(props) + 'props');

    let bottype = msg.text.split(' ').slice(1)[0];
    console.log("message captured " + bottype);
    if (!isNaN(bottype) || !bottype)
        return status_babbot.sendMessage(msg.from.id, 'Sorry, you didn\'t pass a valid bot type.');
    if (!isInArray(bottypes, bottype))
        return status_babbot.sendMessage(msg.from.id, 'Sorry,  bot type does not exist');

    bottype = bottype.toLowerCase();
    var bottype_g = bottype.toLowerCase() + '_g';
    status_babbot.sendMessage(msg.from.id, `quering staus for ${bottype}`, { replyToMessage: msg.message_id });

    for (var i = 0; i < eval(bottype_g).length; i++) {
        let cg = '';
        cg = eval(bottype_g)[i];

        let kicked = '';
        eval(bottype).sendMessage('@' + eval(bottype_g)[i], ".").catch(error => {
            console.log('caught', error);
            console.log(i);
            kicked = cg;

            status_babbot.sendMessage(msg.from.id, `@${bottype}_babbot kicked from  @${cg} `);

        });



    }
    return;

});

x1.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;

    activg = activg.filter(e => e !== text);
    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);


});
x2.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});

x3.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});
x4.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});
vvfast.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});




vfast.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});


fast.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});


med.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});


slow.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});



vslow.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});


vvslow.on('leftChatMember', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    let un = msg.left_chat_member.username;
    let bn = msg.left_chat_member.first_name;
    let sg = msg.chat.title;
    let kr = msg.from.username;
    let kn = msg.from.first_name;
    //  return vfast.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  hii` );

    return status_babbot.sendMessage(-1001224956341, `Bot @${un} aka ${bn} was kicked from @${sg} by @${kr} aka ${kn}`);
    // return;

});

x1.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await x1.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${xtra1msg}`);

        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) {
            if (!(activg.indexOf(usernameorid) > -1)) {

                activg.push(usernameorid);
            }

        }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await x1.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
    // return x1.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${xtra1msg}`   );


});


x1.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await x1.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }

    db.get('msglog')
        .remove({ id: text })
        .write();
    return await x1.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});

x2.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await x2.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${xtra1msg}`);
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await x2.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


x2.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await x2.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return await x2.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});


x3.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await x3.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${xtra1msg}`);
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await x3.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


x3.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await x3.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return await x3.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});
x4.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await x4.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${xtra1msg}`);
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await x4.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


x4.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await x4.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return await x4.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});
vvfast.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

      thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await vvfast.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${promo}`, { replyToMessage: msg[0].message.message_id });
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await vvfast.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


vvfast.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await vvfast.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return vvfast.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});

vfast.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await vfast.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${promo}`, { replyToMessage: msg[0].message.message_id });
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await vfast.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


vfast.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await vfast.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return vfast.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});
fast.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await fast.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${promo}`, { replyToMessage: msg[0].message.message_id });
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await fast.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


fast.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await fast.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return fast.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});
med.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await med.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${promo}`, { replyToMessage: msg[0].message.message_id });
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await med.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


med.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await med.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return med.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});

slow.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await slow.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${promo}`, { replyToMessage: msg[0].message.message_id });
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await slow.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


slow.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await slow.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return slow.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});

vslow.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await vslow.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${promo}`, { replyToMessage: msg[0].message.message_id });
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await vslow.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


vslow.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await vslow.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return vslow.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});

vvslow.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }

        let msglog = await vvslow.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${promo}`, { replyToMessage: msg[0].message.message_id });


        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await vvslow.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }

    }
    return;
});


vvslow.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await vvslow.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return vvslow.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});

const botf = new TeleBot({
    token: '407044467:AAGMSmZzfdX3oZOxiX7OH8OGjRl0C8n3hgA', // Required. Telegram Bot API token. token bot

});


var candytoken = '520899316:AAHvX2qPTDrlhvsGymISjKoEcSLJet_zqtM'; //'520368868:AAHPua5_C7YGCEd2KCBjVaXNtm1dTSXg1-w';

const bot = new TeleBot({

    token: candytoken,// Required. Telegram Bot API token.

});

const bot2 = new TeleBot({
    token: '454962121:AAEc5NIjE8duckQLIIW47Q3hBO8kGI1eaHg', // Required. Telegram Bot API token.
    // token: '508295930:AAFPDa1ffAX7EASOP9JolugeVXVKhGzJWlU', // Required. Telegram Bot API token.
    allowedUpdates: [] // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.

});


botf.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];

    candytoken = text;



    bot.stop("polling stopped bot");
    bot = null;
    bot = new TeleBot({



        token: candytoken,// Required. Telegram Bot API token.
        allowedUpdates: []// Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.

    });
    bot.start();
    return botf.sendMessage(msg.from.id, `candytoken set to ${text}`, { replyToMessage: msg.message_id });


});

cafbot.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }
      await cafbot.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${cafmsg1}`, { replyToMessage: msg[0].message.message_id, webPreview: true });
      await cafbot.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${cafmsg}`, { replyToMessage: msg[0].message.message_id, webPreview: false });
       let msglog = {ok: false};
       if (msglog.ok) { 
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await cafbot.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }
    }
    }

    return;

    //  return cafbot.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${cafmsg2}`, { replyToMessage: msg[0].message.message_id, webPreview: true });

});



cafbot.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await cafbot.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return cafbot.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});



cafbot.on(/^\/msg (.+)$/, async function (msg, props) {
    let text = props.match[1];
    
    cafmsg1 = text;
    return cafbot.sendMessage(msg.from.id, "messge changed to  " + text, { replyToMessage: msg.message_id });
});



cafbot.on(/^\/leave (.+)$/, async function (msg, props) {
    let text = props.match[1];

   let sts = await cafbot.leaveChat(text);
    if(sts.ok)
    return await  cafbot.sendMessage(msg.from.id, "left group " + text, { replyToMessage: msg.message_id });
    else
    return await  cafbot.sendMessage(msg.from.id, "cannot find" + text, { replyToMessage: msg.message_id });
});

// cafaltbot start
cafbotalt.on('update', async function (msg) {

    var darta = JSON.stringify(msg)
    console.log(darta);
    let thisg = msg[0].message.chat.id;
    if (msg[0].message.chat.username) {

        thisg = '@' + msg[0].message.chat.username;
    }

    if (!(stopg.indexOf(thisg) > -1)) {
        let un = msg[0].message.from.first_name;
        if (msg[0].message.from.username) {

            un = '@' + msg[0].message.from.username;
        }
      await cafbotalt.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${cafmsg1}`, { replyToMessage: msg[0].message.message_id, webPreview: true });
      await cafbotalt.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${cafmsg}`, { replyToMessage: msg[0].message.message_id, webPreview: false });
       let msglog = {ok: false};
       if (msglog.ok) { 
        let usernameorid = msg[0].message.chat.id;
        if (msg[0].message.chat.username)
            usernameorid = '@' + msg[0].message.chat.username
        if (msglog.ok) { if (!(activg.indexOf(usernameorid) > -1)) { activg.push(usernameorid); } }
        console.log(JSON.stringify(msglog) + " msglog");
        db.get('msglog')
            .push({ id: usernameorid, title: msglog.result.message_id })
            .write()


        let size = db.get('msglog')
            .filter({ id: usernameorid }).size()
            .value();


        console.log(size + "  " + usernameorid);

        if (size >= 5) {

            let tobedeleted = db.get('msglog').filter({ id: usernameorid })
                .map('title')
                .value()

            console.log(tobedeleted);
            for (let i in tobedeleted) {
                await cafbotalt.deleteMessage(usernameorid, tobedeleted[i]);
            }

            db.get('msglog')
                .remove({ id: usernameorid })
                .write()

        }
    }
    }

    return;

    //  return cafbotalt.sendMessage(msg[0].message.chat.id, `Hi , ${un} !!  ${cafmsg2}`, { replyToMessage: msg[0].message.message_id, webPreview: true });

});



cafbotalt.on(/^\/say (.+)$/, async function (msg, props) {
    let text = props.match[1];
    let arrayOfMessages = db.get('msglog').filter({ id: text })
        .map('title')
        .value()
    for (let i in arrayOfMessages) {
        await cafbotalt.deleteMessage(text, arrayOfMessages[i]);
    }

    if (!(stopg.indexOf(text) > -1)) {
        stopg.push(text);

    }


    db.get('msglog')
        .remove({ id: text })
        .write();
    return cafbotalt.sendMessage(msg.from.id, "muted from " + text, { replyToMessage: msg.message_id });
});



cafbotalt.on(/^\/msg (.+)$/, async function (msg, props) {
    let text = props.match[1];
    
    cafmsg1 = text;
    return cafbotalt.sendMessage(msg.from.id, "messge changed to  " + text, { replyToMessage: msg.message_id });
});



cafbotalt.on(/^\/leave (.+)$/, async function (msg, props) {
    let text = props.match[1];

   let sts = await cafbotalt.leaveChat(text);
    if(sts.ok)
    return await  cafbotalt.sendMessage(msg.from.id, "left group " + text, { replyToMessage: msg.message_id });
    else
    return await  cafbotalt.sendMessage(msg.from.id, "cannot find" + text, { replyToMessage: msg.message_id });
});




//cafaltbot end

bot2.on('newChatMembers', (msg2) => {

    var darta = JSON.stringify(msg2)
    console.log("nishabot" + darta);

    if (msg2.new_chat_member) {

        if (!msg2.new_chat_member.is_bot) {
            var name = msg2.new_chat_member.first_name;

            var nc2 = msg2.new_chat_member;
            console.log(nc2);
            return bot2.sendMessage(msg2.chat.id, `Hi , ${name} !! ${promo} `, { replyToMessage: msg2.message_id });


        }
    }

});

bot.on('newChatMembers', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);

    if (msg.new_chat_member) {

        if (!msg.new_chat_member.is_bot) {
            var name = msg.new_chat_member.first_name;

            var nc = msg.new_chat_member;
            console.log(nc);
            return bot.sendMessage(msg.chat.id, `Hi , ${name} !! ${promo} `);
        }
    }

});


bot.on('update', (msg) => {

    var darta = JSON.stringify(msg)
    console.log(darta);


    return bot.sendMessage(msg[0].message.chat.id, `Hi , ${msg[0].message.from.first_name} !!  ${promo}`, { replyToMessage: msg[0].message.message_id });


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
cafbotalt.connect();