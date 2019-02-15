export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
        this.title = song.trackName
    }

    getTemplate() {
        return `
        <div class="col-12 col-sm-6 col-lg-3">
            <div class="card border-light bg-transparent m-2">
                <div class="card-body">
                <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
                    <h2>${this.title}</h2>
                    <h4>${this.artist}</h4>
                    <h5>${this.collection}</h5>
                    <h5>$${this.price}</h5>
                    <audio controls>
                        <source src="${this.preview}" type="audio/mp3">
                    </audio>
                </div>
            </div>
        </div>`
    }
}