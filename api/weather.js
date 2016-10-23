var cheerio = require('cheerio')
var request = require('request')

module.exports = function(callback) {
    var url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Kaohsiung_City.htm'

    var data = []

    request.post(url, function(err, response, body) {
    	var $ = cheerio.load(body)

        $('.FcstBoxTable01 > tbody > tr').map((idx, ele) => {
            var date = $(ele).find('th:nth-child(1)').text()
            var temperature = $(ele).find('td:nth-child(2)').text()
            var rainProbability = $(ele).find('td:nth-child(5)').text()

            data.push(
                date + ' ' +
                '氣溫：' + temperature + ' ' +
                '降雨機率' + rainProbability
            )
        })

        callback(err, data.join('\n'))
    })
}
