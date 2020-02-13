//Declaration of the Color class, and its helper functions. 
//TODO: Figure out the weights problem. 


//Going with RGB since it's the easiest to average from what I've found, will work on
// making this more usable with whatever format we throw at it.


class Color 
{
    constructor(R, G ,B) 
    {
        this.R = R;
        this.G = G;
        this.B = B; 
    }

    //Using reverse-bayesan formula to find the resulting mix of two colors
    //returns an array containing the new colors
    averageColors(color1, color2, weight1, weight2)
    {
       newR = sqrt((color1.R*color1.R*weight1)+(color2.R*color2.R*weight2));
       NewG = sqrt((color1.G*color1.G*weight1)+(color2.G*color2.G*weight2)); 
       newB = sqrt((color1.B*color1.B*weight1)+(color2.B*color2.B*weight2)); 
       return [newR, newG, newB]; 
    }

    //Things we need to account for: This currently just gets the raw average. How do we weight these
    //in relation to what other people say they are?

    // EX: 100 people say it's Red, 1 person says it's Blue. Averaging the two would be unfair. 



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

