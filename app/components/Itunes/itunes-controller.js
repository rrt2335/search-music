import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  let songs = itunesService.Songs;
  let template = '';
  songs.forEach(song => {
    template += song.getTemplate();
  })
  document.getElementById('songs').innerHTML = template;
  document.querySelector('#get-music-button').textContent = 'Search music'
  console.log(itunesService.Songs)

}

// PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', drawSongs);
    drawSongs();
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'Searching...'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController