app.service("APIService", function ($http) {
    this.getAddress = function (address, objType) {
        //var url = 'https://maps.googleapis.com/maps/api/geocode/' + objType + '?address = ' +
         //   address + '&key=AIzaSyCyvHqEcZ7He28JBLBoKEIHeoSeXkWOop4'
        var url = 'https://maps.googleapis.com/maps/api/geocode/' + objType.toLowerCase()+'?address='+address+'&key=AIzaSyCyvHqEcZ7He28JBLBoKEIHeoSeXkWOop4';
        return $http.get(url)
    }
});   