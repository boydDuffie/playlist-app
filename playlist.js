//making playlist object
//playlist has a unique id
//owner will be the user id for the user who created the playlist
//songs will be an array of song objects
//color will be an object with 3 properties: R, G, and B

//TODO: implement inheritance to make a parent playlist class
	//colorPlaylists should inherit all general playlist properties but should have a color field

const colorPlaylistFactory = (id, owner, songs, color) => {
	return {
		//want to protect these properties
		_id: id,
		_owner: owner, 
		_songs: songs, 
		_color: color,

	//GETTERS
		get id() {
			return this._id;
		},
		get owner() {
			return this._owner;
		},
		get songs() {
			return this._songs;
		},
		get color() {
			return this._color;
		},

	//SETTERS
		//should not be able to set new id, owner, or array of songs
		set color(newColor) {
			if(typeof newColor === "object" && newColor.R && newColor.G && newColor.B)
			{
				this._color = newColor;
			}
		},

	//FUNCTIONALITY
		addSong(newSong) {
			if(newSong.id)	//newSong needs an id
			{
				let duplicate = false;
				//check that newSong isn't already in playlist
				//each song in playlist is checked by id against newSong; if no matches are found then song is pushed to this._songs array
				this._songs.forEach(item => {
					if(item.id === newSong.id) 
					{
						console.log(`Cannot add song; ${newSong.name} is already in this playlist.`);
						duplicate = true;
					}
				});
				if(!duplicate)
				{
					this._songs.push(newSong);
					return;
				}
				else
				{
					return;
				}
			}
		}
	}
};