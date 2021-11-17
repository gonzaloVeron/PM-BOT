const rp = require("request-promise");

class Weather{
    execute(args, characters, regions, message){
        const options = {
            url: 'http://api.openweathermap.org/data/2.5/weather?id=3436227&APPID=673d4f56895ad88c703249a5a8267f13&units=metric',
            json: true,
          };
          return rp.get(options).then(response => {
            message.channel.send("```La temperatura actual de avellaneda es de: " + Math.round(response.main.temp) + "°C\n" + 
                                 "La Sensacion termica es de: " + Math.round(response.main.feels_like) + "°C\n" +
                                 "La temperatura min/max es de: " + Math.round(response.main.temp_min) + "°C/" + Math.round(response.main.temp_max) + "°C\n" +
                                 "La humedad es de: " + response.main.humidity + "%\n" +
                                 "La velocidad del viento es de: " + response.wind.speed + "(???)```");
          });
    }
}

module.exports = Weather;