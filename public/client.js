// client-side js
// run by the browser each time your view template is loaded

document.addEventListener('DOMContentLoaded', function() {
    
  fetch('/search-track').then(resp => resp.json()).then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    
    //Js-only version
    // Display the track name
    document.getElementById("search-track-container").innerHTML = '<h3><a href="' + data.external_urls.spotify + '" target="blank">' + data.name + '</a></h3>';
    
    
    //JQuery version
    // Display the track name
    // var trackName = $(
    //   // '<h3><a href="' + data.external_urls.spotify + '" target="blank">' + data.name + '</a></h3>'
    //   `<h3><a href="${data.external_urls.spotify}">${data.name}</a></h3>`
    // );
    // trackName.appendTo('#search-track-container');    
    
    
    // Display the artist name
    var artists = '';
    
    data.artists.forEach(function(item) {
      artists = artists + item.name + ' ';
    });
    
    let h5 = document.createElement('h5');
    h5.innerText = artists;
    document.getElementById('search-track-container').append(h5);
    
    // Display the album art
    //Js-only version
   
    var img = document.createElement('img');
    img.innerHTML = img.setAttribute('src', data.album.images[0].url);
    document.getElementById('search-track-container').append(img);
    

    //JQuery Version
  //   var img = $('<img/>');
  //   img.attr('src', data.album.images[0].url);
  //   img.appendTo('#search-track-container');
  // 
  });
  
  fetch('/category-playlists').then(resp => resp.json()).then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the covers of the playlists
    //JS-only version 
    data.forEach((c) => {
      c.data.playlists.items.map(function(playlist, i) {
        var img = document.createElement('img');
        img.innerHTML = '<img class="cover-image"/>';
        img.innerHTML += img.setAttribute('src', playlist.images[0].url);
        document.getElementById('artist-container').append(img);

      });
    });
  
    });
    });

//  data.map(function(track, i) {
//  var trackName = document.createElement('trackName');
//       trackName.innerHTML = '<li>' + track.name + '</li>'
//       document.getElementById('top-tracks-container').append(trackName);
//     });
  
  
  //JQuery Version
  // data
  //     .forEach((c) => {
  //     $('#category-playlists-container').append(`<br><h1>${c.name}</h1><br>`)
  //     c.data.playlists.items.map(function(playlist, i) {
  //     var img = $('<img class="cover-image"/>');
  //     img.attr('src', playlist.images[0].url);
  //     img.appendTo('#category-playlists-container');
  //   });
  //   })
  // });
  
  
  
fetch('/audio-features').then(resp => resp.json()).then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "speechiness", "loudness"]
    
    
    //JS-only version
    keys.map(function(key, i) {
      if (data.hasOwnProperty(key)) {
        var feature = document.createElement('feature');
        feature.innerHTML = '<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>';
        document.getElementById('audio-features-container').append(feature);
      }
    });
    // Display the audio features
    // keys.map(function(key, i) {
    //   if (data.hasOwnProperty(key)) {
    //     var feature = $('<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>');
    //     feature.appendTo('#audio-features-container');
    //   }
    // });
    
  });
  
fetch('/artist').then(resp => resp.json()).then((data) => {
 //var feature = document.createElement('feature');
// feature.innerHTML = '<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>';
// document.getElementById('audio-features-container').append(feature);    
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
//JS-only section
    // Display the artist's image
    var img = document.createElement('img');
    img.innerHTML = '<img class="circle-image" />';
    img.innerHTML += img.setAttribute('src', data.images[0].url);
    document.getElementById('artist-container').append(img);
    
    // Display the artist name
    var trackName = document.createElement('trackName');
    trackName.innerHTML = '<h3>' + data.name + '</h3>';
    document.getElementById('artist-container').append(trackName);
    
    // Display the artist's genres
    data.genres.map(function(genre, i) {
    var genreItem = document.createElement('genreItem');
    genreItem.innerHTML = '<p>' + genre + '</p>';
    document.getElementById('artist-container').append(genreItem);
    });
    
    //JQuery Section
    // Display the artist's image
    // var img = $('<img class="circle-image" />');
    // img.attr('src', data.images[0].url);
    // img.appendTo('#artist-container');
    
    // // Display the artist name
    // var trackName = $('<h3>' + data.name + '</h3>');
    // trackName.appendTo('#artist-container');
    
  //   // Display the artist's genres
  //   data.genres.map(function(genre, i) {
  //     var genreItem = $('<p>' + genre + '</p>');
  //     genreItem.appendTo('#artist-container');
  //   });
  // });
  });
    
    

  
  fetch('/artist-top-tracks').then(resp => resp.json()).then((data) => {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    //JS-only Version
    // Display the top tracks
      data.map(function(track, i) {
      var trackName = document.createElement('trackName');
      trackName.innerHTML = '<li>' + track.name + '</li>'
      document.getElementById('top-tracks-container').append(trackName);
    });

    //Helpful resource: https://www.w3schools.com/jsref/prop_html_innerhtml.asp

    
  //JQuery Version
  // Display the top tracks
  //   data.map(function(track, i) {
  //     var trackName = $('<li>' + track.name + '</li>');
  //     trackName.appendTo('#top-tracks-container');
  //   });
  // });

// });
  });
});
