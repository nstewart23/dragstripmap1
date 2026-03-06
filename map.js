var map = L.map('map').setView([39.5,-98.35],4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19
}).addTo(map);

var markers=[];

fetch("tracks.json")
.then(response=>response.json())
.then(data=>{

data.forEach(track=>{

var marker=L.marker([track.lat,track.lng]).addTo(map);

marker.bindPopup(
"<b>"+track.name+"</b><br>"+
track.city+", "+track.state+"<br>"+
"<a href='"+track.url+"' target='_blank'>Track Website</a>"
);

});


});
