initMap = () => {
  let position = {
    zoom: 15,
    center: { lat: -6.256276, lng: 106.853215 }
  };

  const map = new google.maps.Map(document.getElementById("map"), position);

  google.maps.event.addListener(map, "click", function(event) {
    addMarker({ coords: event.latLng });
  });

  var markers = [
    {
      coords: { lat: -6.256276, lng: 106.853215 },
      iconImage:
        "https://resizeimage.net/mypic/uMiWuzgew3VdVnDa/0Osbn/shopping-cart.png",
      content: "<p>SellSayur cabang Kalcit</p>"
    },
    {
      coords: { lat: -6.2568115, lng: 106.812866 },
      iconImage:
        "https://resizeimage.net/mypic/uMiWuzgew3VdVnDa/0Osbn/shopping-cart.png",
      content: "<p>SellSayur cabang Impact Byte</p>"
    }
  ];

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
    });

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
  }
};
