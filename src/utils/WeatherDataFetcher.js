class WeatherDataFetcher {
    constructor () {
        this.url = new URL('https://api.openweathermap.org/data/2.5/weather');
        this.city = 'Barcelona';
        this.country = 'ES';
        this.APPID = 'd783aaa006f35d3d881745eba04e89ad';
        this.requestSetup = {            
            method: 'GET'
        }
    }

    buildUrlWithParams() {
        this.url.searchParams.append('q', this.city + ',' + this.country);
        this.url.searchParams.append('APPID', this.APPID);

        return this.url.toString();
    }

    loadData() {
        const weatherRequest = new Request(this.buildUrlWithParams(), this.requestSetup);

        return fetch(weatherRequest)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                console.error('Something went terribly wrong :(');
            })
    }
}

export default WeatherDataFetcher;