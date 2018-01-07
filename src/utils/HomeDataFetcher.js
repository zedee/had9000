class HomeDataFetcher {
    constructor () {
        this.url = new URL('http://example.org');
        this.params = '';
        this.apiKey = '123456';
        this.requestSetup = {            
            method: 'GET'
        }
    }

    buildUrlWithParams() {
        this.url.searchParams.append(this.params);
        this.url.searchParams.append(this.apiKey);

        return this.url.toString();
    }

    loadData(mode) {
        if (mode === 'offline') {
            return new Promise((resolve, reject) => {
                resolve({ 
                    data: { 
                        temp: 0.0,
                        lighting: [
                            {
                                name: 'Dining Room',
                                status: true
                            },
                            {
                                name: 'Bedroom',
                                status: false
                            },
                            {
                                name: 'Kitchen',
                                status: false
                            }
                        ],
                        presence: {
                            lastSeen: '2017-01-08 08:30:15'
                        },
                        misc: {
                            dogHasFood: true
                        }
                    }
                });
            })
        }
        else {
            const homeDataRequest = new Request(this.buildUrlWithParams(), this.requestSetup);

            return fetch(homeDataRequest)
                .then(response => {
                    return response.json()
                })
                .catch(error => {
                    console.error('Something went terribly wrong :(');
                });
        }
    }
}

export default HomeDataFetcher;