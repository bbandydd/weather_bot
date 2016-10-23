var cheerio = require('cheerio')
var request = require('request')

module.exports = function(req, res) {
    var url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Kaohsiung_City.htm'

    var data = []

    request.post(url, function(err, response, body) {
    	var $ = cheerio.load(body)

        $('.FcstBoxTable01 > tbody > tr').map((idx, ele) => {
            data.push({
                date: $(ele).find('th:nth-child(1)').text(),
                temperature: $(ele).find('td:nth-child(2)').text(),
                rainProbability: $(ele).find('td:nth-child(5)').text()
            })
        })

        res.json(data)
    })
}
