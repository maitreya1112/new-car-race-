class End
{
    constructor()
    {
        this.end = createElement('h2');
            
    }
    display()
    {
        x= player.rank;
        
        this.end.html(x+" Position " + player.name);
        this.end.position(displayWidth/2 - 500, 335);
        this.end.style('font-size', '140px');
        this.end.style('color', 'black');
        
    }  
}