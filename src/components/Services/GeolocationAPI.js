export default class GeolocationAPI {
    GeolocationAPI() {

    }

    getCurrentPosition() {
        return new Promise(function(resolve, reject) {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    resolve({
                        lat : pos.coords.latitude,
                        long : pos.coords.longitude
                    });
                })
            }
            else
            {
                reject('Not support');
            }
        });
    }
}