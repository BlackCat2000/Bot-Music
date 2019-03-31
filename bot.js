const Discord = require("discord.js");

const client = new Discord.Client();
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("
ضع عدد الرسائل التي تريد مسحها 👌
").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("
php\nعدد الرسائل التي تم مسحها: " + textxt + "\n
").then(m => m.delete(3000));
        }
    }
}
});

client.on('message', message => {
if (message.content.startsWith("*kick")) {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning: ماعندك الصلاحيات');
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);

    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});


client.on('message', (message) => {
    if (message.content.startsWith('*ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});



client.login(process.env.BOT_TOKEN);
