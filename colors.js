//Declaration of the Color class, and its helper functions.  


/*
Going with RGB since it's the easiest to average from what I've found, will work on
making this more usable with whatever format we throw at it.
*/


class Color 
{
    constructor(R, G ,B) 
    {
        this.R = R;
        this.G = G;
        this.B = B; 
    }

    //Using weighted RMS formula to find the resulting mix of two colors
    //returns an array containing the new colors
    averageColors(color1, color2, weight1, weight2)
    {
       newR = sqrt((color1.R*color1.R*weight1)+(color2.R*color2.R*weight2));
       newG = sqrt((color1.G*color1.G*weight1)+(color2.G*color2.G*weight2)); 
       newB = sqrt((color1.B*color1.B*weight1)+(color2.B*color2.B*weight2)); 
       return [newR, newG, newB]; //should this call setColors() with the new array?
    }


    //Set color using array
    //May just accomplish this later, but we have the option to throw
    //away results by handling in two separate functions like this. 
    setColors(colors)
    {
       this.R = colors[0];
       this.G = colors[1];
       this.B = colors[2];
    }

}

