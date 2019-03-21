require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
const command = process.argv.slice(2, 3).join("");
const song = process.argv.slice(3).join(" ");

function spotifySong() {
    spotify
        .search({ type: 'track', query: song })
        .then(function (response) {

            let items = response.tracks.items;

            // for each index in items array
            for (item in items) {
                
                let album = items[item].album;
                let artists = album.artists;
                let name = items[item].name;
                let url = items[item].preview_url;

                console.log("album: " + album.name);
                console.log("name: " + name);
                console.log("url: " + url);

                for (i in artists) {
                    console.log("artist: " + artists[i].name);
                }
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

if (command === "spotify-this-song") {
    spotifySong();
}