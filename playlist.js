//making playlist object
//playlist has a unique id
//owner will be the user id for the user who created the playlist
//songs will be an array of song objects


module.exports = class Playlist
{
	constructor(id, owner, songs)
	{
		this._id = id;
		this._owner = owner;
		this._songs = songs;
		let name = 'Songs that are ';
	}

	get id()
	{
		return this._id;
	}

	get owner()
	{
		return this._owner;
	}

	get songs()
	{
		return this._songs;
	}

	addSong(newSong)
	{
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

	removeSong(song)
	{
		if(song.id)
		{
			for(i=0; i<this._songs.length; i++)
			{
				if(this._songs[i].id === song.id)
				{
					this._songs.splice(i, 1);
				}
			}
		}
	}
}