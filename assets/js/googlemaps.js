//oslo map

// Initialize and add the map
function initMap() {
  // The location of Oslo
  var oslo = { lat: 59.911491, lng: 10.757933 };
  // The map, centered at Oslo
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: oslo,
  });

  // The  Restaurant Locations

  $("#restaurants, .fa-utensils").click(function () {
       var oslo = { lat: 59.9160454, lng: 10.7362453 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: oslo,
        });
    //array of markers

    var restaurantMarkers = [
      {
        coords: { lat: 59.9178541, lng: 10.7339675 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant1.jpg) no-repeat center"><h6>Den Glade Gris</h6><br><p>St. Olavs Gate 33</p></div>',
      },
      {
        coords: { lat: 59.9088001, lng: 10.7247294 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant2.jpg) no-repeat center"><h6>Rorbua Aker Brygge</h6><br><p>Stranden 71</p></div>',
      },
      {
        coords: { lat: 59.9075576, lng: 10.758191 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant3.jpg) no-repeat center"><h6>Maaemo</h6><br><p>Dronning Eufemias gate 23</p></div>',
      },
      {
        coords: { lat: 59.9226899, lng: 10.7356068 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant4.jpg) no-repeat center"><h6>Sofies Mat Og Vinhus</h6><br><p>Sofies gate 15</p></div>',
      },
      {
        coords: { lat: 59.9167545, lng: 10.7377502 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant5.jpg) no-repeat center"><h6>Restaurant Fjord</h6><br><p>Kristian Augusts gate 11</p></div>',
      },
      {
        coords: { lat: 59.9091625, lng: 10.7422209 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant6.jpg) no-repeat center"><h6>Rest</h6><br><p>Kirkegata 1-3</p></div>',
      },
      {
        coords: { lat: 59.9163672, lng: 10.7506229 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant7.jpg) no-repeat center"><h6>Arakataka</h6><br><p>Mariboes gate 7B</p></div>',
      },
      {
        coords: { lat: 59.9163238, lng: 10.7387246 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant8.jpg) no-repeat center"><h6>Elias mat & sånt</h6><br><p>Kristian Augusts gate 14</p></div>',
      },
      {
        coords: { lat: 59.9229418, lng: 10.7511292 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant9.jpg) no-repeat center"><h6>Restaurant Kontrast</h6><br><p>Maridalsveien 15a</p></div>',
      },
      {
        coords: { lat: 59.912725, lng: 10.7093833 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant10.jpg) no-repeat center"><h6>Hos Thea</h6><br><p>Gabels gate 11</p></div>',
      },
    ];

    //Loop Through Markers
    for (var i = 0; i < restaurantMarkers.length; i++) {
      //Add Marker
      addMarker(restaurantMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The  CoffeeShop Locations 

  $("#coffeeshops, .fa-coffee").click(function () {
      var oslo = { lat: 59.9211046, lng: 10.7427449 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: oslo,
        });
    //array of markers

    var coffeeshopMarkers = [
      {
        coords: { lat: 59.9141009, lng: 10.7528633 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee3.jpg) no-repeat center"><h6>Espresso House</h6><br><p>Gunerius, Storgata 32</p></div>',
      },
      {
        coords: { lat: 59.9097227, lng: 10.7266688 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee2.jpg) no-repeat center"><h6>Starbucks</h6><br><p>Stranden 7</p></div>',
      },
      {
        coords: { lat: 59.9233709, lng: 10.7556998 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee1.jpg) no-repeat center"><h6>Tim Wendelboe</h6><br><p>Grüners gate 1</p></div>',
      },
      {
        coords: { lat: 59.9172303, lng: 10.7397703, },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee4.jpg) no-repeat center"><h6>Fuglen</h6><br><p>Universitetsgata 2</p></div>',
      },
      {
        coords: { lat: 59.9231622, lng: 10.7260787 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee5.jpg) no-repeat center"><h6>Stockfleths</h6><br><p>Josefines gate 23</p></div>',
      },
      {
        coords: { lat: 59.9220352, lng: 10.7512782 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee6.jpg) no-repeat center"><h6>Hendrix Ibsen</h6><br><p>Vulkan 22</p></div>',
      },
      {
        coords: { lat: 59.9280583, lng: 10.7592917 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee7.jpg) no-repeat center"><h6>Supreme Roastworks AS</h6><br><p>Thorvald Meyers gate 18A</p></div>',
      },
      {
        coords: { lat: 59.9149799, lng: 10.7504415 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee8.jpg) no-repeat center"><h6>My ugly baby</h6><br><p>Youngs gate 9</p></div>',
      },
      {
        coords: { lat: 59.9243908, lng: 10.7396507 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee9.jpg) no-repeat center"><h6>Java espresso</h6><br><p>Ullevålsveien 47</p></div>',
      },
      {
        coords: { lat: 59.9207398, lng: 10.728077 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee10.jpg) no-repeat center"><h6>Kaffebrenneriet</h6><br><p>Parkveien 25</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < coffeeshopMarkers.length; i++) {
      //Add Marker
      addMarker(coffeeshopMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The  Accomodation Locations 
    
  $("#accomodation, .fa-bed").click(function () {
      var oslo = { lat: 59.9132002, lng: 10.7533018 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: oslo,
        });
    //array of markers

    var accomodationMarkers = [
      {
        coords: { lat: 59.9100318, lng: 10.741466, },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room1.jpg) no-repeat center"><h6>Saga Hotel Oslo Central</h6><br><p>Kongens gate 7</p></div>',
      },
      {
        coords: { lat: 59.9156194, lng: 10.7404806 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room2.jpg) no-repeat center"><h6>Thon Hotel Rosenkrantz Oslo</h6><br><p>Rosenkrantz gate 1</p></div>',
      },
      {
        coords: { lat: 59.9136725, lng: 10.7774321 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room3.jpg) no-repeat center"><h6>Central City Apartments</h6><br><p>Kjølberggata 29C</p></div>',
      },
      {
        coords: { lat: 59.9092528, lng: 10.7666435 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room4.jpg) no-repeat center"><h6>Center rooms</h6><br><p>Schweigaards gate 44</p></div>',
      },
      {
        coords: { lat: 59.9103456, lng: 10.7472907 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room5.jpg) no-repeat center"><h6>Citybox Oslo</h6><br><p>Prinsens gate 6</p></div>',
      },
      {
        coords: { lat: 59.9106631, lng: 10.748712 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room6.jpg) no-repeat center"><h6>Comfort Hotel Xpress</h6><br><p>Fred Olsens gate 11</p></div>',
      },
      {
        coords: { lat: 59.9144276, lng: 10.7421132 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room7.jpg) no-repeat center"><h6>P-Hotel Oslo</h6><br><p>Grensen 19</p></div>',
      },
      {
        coords: { lat: 59.9139846, lng: 10.7556568 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room8.jpg) no-repeat center"><h6>Thon Hotel Spectrum</h6><br><p>Brugata 7</p></div>',
      },
      {
        coords: { lat: 59.9164346, lng: 10.749522 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room9.jpg) no-repeat center"><h6>Comfort Hotel Youngstorget</h6><br><p>Møllergata 26</p></div>',
      },
      {
        coords: { lat: 59.9118434, lng: 10.7461162 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room10.jpg) no-repeat center"><h6>Comfort Hotel Karl Johan</h6><br><p>Karl Johans gate 12</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < accomodationMarkers.length; i++) {
      //Add Marker
      addMarker(accomodationMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The Activities Locations

  $("#activities, .fa-snowboarding").click(function () {
      var oslo = { lat: 59.9114009, lng: 10.7483125 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: oslo,
        });
    //array of markers

    var activitiesMarkers = [
      {
        coords: { lat: 59.9012828, lng: 10.7524521 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun1.jpg) no-repeat center"><h6>Friluftshuset</h6><br><p>Sørengkaia 122</p></div>',
      },
      {
        coords: { lat: 59.9108958, lng: 10.7508731 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun2.jpg) no-repeat center"><h6>Oslo Visitor Center</h6><br><p>Jernbanetorget 1</p></div>',
      },
      {
        coords: { lat: 59.9106119, lng: 10.7412764 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun3.jpg) no-repeat center"><h6>Viking Biking & Viking Hiking</h6><br><p>Nedre Slottsgate 4</p></div>',
      },
      {
        coords: { lat: 59.9104695, lng: 10.7316016 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun4.jpg) no-repeat center"><h6>Norway Yacht Charter</h6><br><p>Rådhusbrygge 3</p></div>',
      },
      {
        coords: { lat: 59.9184768, lng: 10.7588392 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun5.jpg) no-repeat center"><h6>Grünerløkka Minigolf Park</h6><br><p>Søndre gate 1</p></div>',
      },
      {
        coords: { lat: 59.9111335, lng: 10.7502324 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun6.jpg) no-repeat center"><h6>Free Walking Tours Oslo</h6><br><p>Jernbanetorget 8</p></div>',
      },
      {
        coords: { lat: 59.9074885, lng: 10.7531275 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun7.jpg) no-repeat center"><h6>Operahuset Oslo</h6><br><p>Kirsten Flagstads Plass 1</p></div>',
      },
      {
        coords: { lat: 59.907586, lng: 10.7370841 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun8.jpg) no-repeat center"><h6>Akershus Festning</h6><br><p>0150 Oslo</p></div>',
      },
      {
        coords: { lat: 59.9077956, lng: 10.7356282 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun9.jpg) no-repeat center"><h6>Norway Resistance Museum</h6><br><p>Bygning 21</p></div>',
      },
      {
        coords: { lat: 59.9200554, lng: 10.7475185 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun10.jpg) no-repeat center"><h6>Damstredet and Telthusbakken</h6><br><p>Damstredet 4A</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < activitiesMarkers.length; i++) {
      //Add Marker
      addMarker(activitiesMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The Parks Locations

  $("#parks, .fa-tree").click(function () {
      var oslo = { lat: 59.9177345, lng: 10.7370972 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 13,
            center: oslo,
        });
    //array of markers

    var parksMarkers = [
      {
        coords: { lat: 59.9264583, lng: 10.7034734 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks1.jpg) no-repeat center"><h6>Frognerparken</h6><br><p>Kirkeveien</p></div>',
      },
      {
        coords: { lat: 59.917625, lng: 10.730332 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks2.jpg) no-repeat center"><h6>Slottsparken</h6><br><p>Slottsplassen 1</p></div>',
      },
      {
        coords: { lat: 59.927029, lng: 10.700865 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks3.jpg) no-repeat center"><h6>Vigelandsparken</h6><br><p>Nobels gate 32</p></div>',
      },
      {
        coords: { lat: 59.8995816, lng: 10.7611578 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks4.jpg) no-repeat center"><h6>Ekebergparken Skulpturpark</h6><br><p>Kongsveien 15</p></div>',
      },
      {
        coords: { lat: 59.9063176, lng: 10.7217175 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks5.jpg) no-repeat center"><h6>Tjuvholmen Sculpture Park</h6><br><p>Strandpromenaden 2</p></div>',
      },
      {
        coords: { lat: 59.9230071, lng: 10.764023 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks6.jpg) no-repeat center"><h6>Sofienberg Park</h6><br><p>Sofienberggata 14</p></div>',
      },
      {
        coords: { lat: 59.9047091, lng: 10.7625675 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks7.jpg) no-repeat center"><h6>Middelalderparken</h6><br><p>Sørenga 5</p></div>',
      },
      {
        coords: { lat: 59.9171009, lng: 10.7772202 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks8.jpg) no-repeat center"><h6>Tøyen Park</h6><br><p>Helgesens gate 90</p></div>',
      },
      {
        coords: { lat: 59.9147141, lng: 10.734458 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks9.jpg) no-repeat center"><h6>Studenterlunden Park</h6><br><p>Johanne Dybwads plass</p></div>',
      },
      {
        coords: { lat: 59.9131819, lng: 10.7570827 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks10.jpg) no-repeat center"><h6>Vaterlandsparken</h6><br><p>0186 Oslo</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < parksMarkers.length; i++) {
      //Add Marker
      addMarker(parksMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The Bars Locations
  
  $("#bars, .fa-glass-martini-alt").click(function () {
      var oslo = { lat: 59.9193175, lng: 10.7543608 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: oslo,
        });
    //array of markers

    var barsMarkers = [
      {
        coords: { lat: 59.9136839, lng: 10.7399639 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar1.jpg) no-repeat center"><h6>Eight</h6><br><p>Karl Johans gate 27</p></div>',
      },
      {
        coords: { lat: 59.9139799, lng: 10.7487005 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar2.jpg) no-repeat center"><h6>Angst</h6><br><p>Torggata 11</p></div>',
      },
      {
        coords: { lat: 59.9154592, lng: 10.737899 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar3.jpg) no-repeat center"><h6>Magic Ice Bar</h6><br><p>Kristian IVs gate 12</p></div>',
      },
      {
        coords: { lat: 59.9140704, lng: 10.7514605 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar4.jpg) no-repeat center"><h6>HIMKOK Storgata Destilleri</h6><br><p>Storgata 27</p></div>',
      },
      {
        coords: { lat: 59.9248815, lng: 10.7594508 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar5.jpg) no-repeat center"><h6>Aku-Aku Tiki Bar</h6><br><p>Thorvald Meyers gate 32</p></div>',
      },
      {
        coords: { lat: 59.9147255, lng: 10.7365552 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar6.jpg) no-repeat center"><h6>Last Train</h6><br><p>Karl Johans gate 45</p></div>',
      },
      {
        coords: { lat: 59.9171972, lng: 10.7534148 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar7.jpg) no-repeat center"><h6> Crow Bar & Brewery</h6><br><p>Torggata 32</p></div>',
      },
      {
        coords: { lat: 59.9140818, lng: 10.7552122 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar8.jpg) no-repeat center"><h6>Brewgata</h6><br><p>Brugata 5</p></div>',
      },
      {
        coords: { lat: 59.9254338, lng: 10.759332 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar9.jpg) no-repeat center"><h6>Bar Boca</h6><br><p>Thorvald Meyers gate 30</p></div>',
      },
      {
        coords: { lat: 59.9187185, lng: 10.7339001 },
        content:
          '<div class="marker" style="background: url(assets/images/bars/bar10.jpg) no-repeat center"><h6>Summit Bar</h6><br><p>Holbergs gate 30</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < barsMarkers.length; i++) {
      //Add Marker
      addMarker(barsMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });
}

$("#register, .fa-key").on('click', function(){
     window.location = "contact.html";    
});