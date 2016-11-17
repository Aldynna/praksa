for(var i=0;i<4;++i)

{

    var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),southWest.lng() + lngSpan * Math.random());

    pointsrand.push(point);

}

for(var i=0;;++i)

{
    var position=pointsrand[i];
    addMarkerWithTimeout(position, i * 3000);

}

}

clearMarkers(num) {
    window.setTimeout(function() {
        for (var i = 0; i < markers.length; i++) {
            markers[num].setMap(null);
        }
        markers = [];
    }, 7000);
}

if(pokemon<6&&markers[pokemon]==null&&operacijaUToku==false) {
    operacijaUToku=true;
    i=pokemon;
    pokemon++;


    gift http://rs231.pbsrc.com/albums/ee83/spell-edicion/Togepix100.gif~c200

        'http://wallpapercave.com/wp/aJCzeTw.png',


            map.setZoom(25);
    map.setCenter(markers[num].getPosition());
});

bearer({
    //Make sure to pass in the app (express) object so we can set routes
    app:app,
    //Please change server key for your own safety!
    serverKey:"12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678",
    tokenUrl:'/login', //Call this URL to get your token. Accepts only POST method
    extendTokenUrl:'/extendtoken', //Call this URL to get your token. Accepts only POST method
    cookieName:'x-auth', //default name for getting token from cookie when not found in Authorization header
    createToken:function(req, next, cancel){
        //If your user is not valid just return "underfined" from this method.
        //Your token will be added to req object and you can use it from any method later
        var username=req.body.username;
        //var password=req.body.password;
        //You get the idea how to use next and cancel callbacks, right?
        if (true){
            next({
                expire: moment(Date.now()).add('days', 1).format('YYYY-MM-DD HH:mm:ss'),
                username: username,
                contentType: req.get('Content-Type'),
                ip: req.ip,
                userAgent: req.header('user-agent'),
                custom_id: '55555',
                another: 'Some data you need in your token',
                moreData: 'Some more data you need'
            });
        }else{
            cancel({code:1000, message: 'I do not like you'});
        }
    },
    extendToken:function(req, next, cancel){
        var token=req.authToken;
        if (token){
            next({
                expire: moment(Date.now()).add('days', 1).format('YYYY-MM-DD HH:mm:ss'),
                username: token.username,
                contentType: req.get('Content-Type'),
                ip: req.ip,
                userAgent: req.header('user-agent'),
                custom_id: '55555',
                another: 'Some data you need in your token',
                moreData: 'Some more data you need'
            });
        }else{
            cancel();
        }
    },
    validateToken:function(req, token){
        //you could also check if request came from same IP using req.ip==token.ip for example
        if (token){
            return moment(token.expire)>moment(new Date());
        }
        return false;
    },
    onTokenValid:function(token, next, cancel){
        //This is in case you would like to check user account status in DB each time he attempts to do something.
        //Doing this will affect your performance but its your choice if you really need it
        //Returning false from this method will reject user even if his token is OK
        var username=token.username;
        if (true){
            next()
        }else{
            cancel();
        }
    },
    userInRole:function(token, roles, next, cancel){
        //Provide role level access restrictions on url
        //You can use onTokenValid for this also, but I find this easier to read later
        //If you specified "roles" property for any secureRoute below, you must implement this method
        var username=token.username;
        if (true){
            next();
        }else
        {
            cancel();
        }
    },
    onAuthorized: function(req, token, res){
        //console.log("this will be executed if request is OK");
    },
    onUnauthorized: function(req, token, res, errorMessage){
        //console.log(req.path, "this will be executed if request fails authentication");
        //res.send({error:errorMessage});
    },
    secureRoutes:[
        {url:'/secure', method:'get'},
        {url:'/secure', method:'post', roles:["admin"]},
        {url:'/secure/*', method:'get'} //any action under /secure route but NOT default "/secure" route
    ]
});



<!DOCTYPE html>
<html>
<head>
<link rel='stylesheet' href='/stylesheets/style.css' />


    </head>
    <body onload="getLocation()">

    <p id="demo"></p>
    <!--<button onclick="drop()">START</button>-->

    <button onclick="clearInterval(myVar)">Stop time</button>


<div id="map"  ></div>
    <div id="map1"  ></div>

    <button onclick="granice()">JOS</button>
    <script>
var x = document.getElementById("demo");
var markers = [];
var pokemoni=[];
var map;
var latitude;
var longitude;
var uluru;
var latlon;
var icon;
var bounds;
pointsrand=[];
var myVar;
var southWest;
var northEast;
var latSpan;
var lngSpan;
var time;
var pokemoni=new Array(5);



function granice() {

    bounds = map.getBounds();
    southWest = bounds.getSouthWest();
    northEast = bounds.getNorthEast();
    lngSpan = northEast.lng() - southWest.lng();
    latSpan = northEast.lat() - southWest.lat();
    myVar=window.setInterval(myTimer,2000);
    myTimer();

}


function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    latlon="lat:"+latitude+","+"lng:"+longitude;
    initMap()
}


function initMap() {
    uluru ={lat: latitude , lng: longitude};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: uluru,
        mapTypeId: 'roadmap'
    });
    for(var j=0;j<5;j++) pokemoni[j]=0;
    granice()
}

function ikona() {
    icon = {
        url: 'http://rs231.pbsrc.com/albums/ee83/spell-edicion/Togepix100.gif~c200',
        scaledSize: new google.maps.Size(35, 35)
    };
}
function myTimer() {

    for(var i=0;i<5;i++)
    {
        if(pokemoni[i]==0) {
            pokemoni[i]=1,

                pointsrand[i] = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());
            addMarkerWithTimeout(pointsrand[i], (i + 2) * randomNumber(1000, 2000), i);
            i=5;
        }

    }

}
function addMarkerWithTimeout(position, timeout,num) {

    ikona();
    window.setTimeout(function() {
        markers[num]=(new google.maps.Marker({
            position: position,
            map: map,
            icon:icon,
            animation: google.maps.Animation.BOUNCE
        }));
        clearMarkers(num);

    }, timeout);


}



function clearMarkers(num) {
    markers[num].addListener('click', function() {
        map.setZoom(25);
        map.setCenter(markers[num].getPosition());
    });

    window.setTimeout(function() {
        markers[num].setMap(null);
        pokemoni[num]=0;
    }, randomNumber(2000,4000));

}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVh0OoLuEvIpSNmmShYcvF5ZZy082g_Tc&callback=initMap">
    </script>
    </body>
    </html>



var styles = [
    {
        featureType: 'landscape.natural',
        elementType: 'all',
        stylers: [
            { hue: '#809f80' },
            { lightness: -35 }
        ]
    }
];
var options = {
    mapTypeControlOptions: {
        mapTypeIds: ['Styled']
    },
    center: new google.maps.LatLng(-7.245217594087794, 112.74455556869509),
    zoom: 16,
    disableDefaultUI: true,
    mapTypeId: 'Styled'
};
var div = document.getElementById('surabaya');
var map = new google.maps.Map(div, options);
var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
map.mapTypes.set('Styled', styledMapType);
};