const Playlist = require('./playlist');

module.exports = class Color_Playlist extends Playlist 
{
	constructor(id, owner, songs, color)
	{
		super(id, owner, songs);
		this._color = color;
	}

	get color()
	{
		return this._color;
	}

	set color(c)
	{
		if(c.R && c.G && c.B)
		{
			this._color = c;
		}
		else
		{
			console.log("ERROR: could not change color; missing R, G, or B value.");
		}
	}
}