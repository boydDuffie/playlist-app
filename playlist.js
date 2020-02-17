//making playlist object
//playlist has a unique id
//owner will be the user id for the user who created the playlist
//songs will be an array of song objects
//color will be an object with 3 properties: R, G, and B

const colorPlaylistFactory = (id, owner, songs, color) => {
	return {
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
		}
	}
};