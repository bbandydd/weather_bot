var login = require("facebook-chat-api")
var weather = require('./api/weather')

weather(function(err, message) {
    console.log(message)
})
