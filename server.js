var login = require("facebook-chat-api")
var weather = require('./api/weather')

var account = {
    email: "FB_ACCOUNT",
    password: "FB_PASSWORD"
}

var fb_id = '100000032727651' 

// Create simple echo bot
login(account, function callback (err, api) {
    if(err) return console.error(err);

    weather(function(err, message) {
        api.sendMessage(message, fb_id);
    })
});