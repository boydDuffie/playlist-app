const Playlist = require('./playlist');

module.exports = class Color_Playlist extends Playlist 
{
	constructor(id, owner, songs, color)
	{
		super(id, owner, songs);
		this._color = color;
		this.name += color;
	}

	get color()
	{
		return this._color;
	}

	set color(newColor)
	{
		if(newColor.R && newColor.G && newColor.B)
		{
			this._color = newColor;
		}
		else
		{
			console.log("ERROR: could not change color; missing R, G, or B value.");
		}
	}
}