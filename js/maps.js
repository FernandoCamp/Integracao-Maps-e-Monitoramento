var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8080/monitorias");

xhr.send();

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -22.510215, lng: -41.925271 },
        zoom: 15

    });

    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;
        var monitorias = JSON.parse(resposta);
        monitorias.forEach(monitoria => {
            if (monitoria.status) {
                var marker = new google.maps.Marker({
                    position: { lat: monitoria.latitude, lng: monitoria.longitude },
                    map: map,
                    title: monitoria.nome,
                    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                });
            } else {
                var marker = new google.maps.Marker({
                    position: { lat: monitoria.latitude, lng: monitoria.longitude },
                    map: map,
                    title: monitoria.nome,
                });
            }

        });
    })

}