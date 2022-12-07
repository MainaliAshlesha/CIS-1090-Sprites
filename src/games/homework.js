//You might have some game state so you can keep track of
//what is happening:
let score;  //The players score
let alive;  //is the 

//You might have some constants that you use
const speed = 300;  //In pixels per second

//This is a helper function to compute the distance
//between two sprites
function distance(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

//This setup function is called once when the game starts
function setup(sprites) {
    score = 0;      //set score to zero
    alive = true;   //Set player to alive

    //Sprite "Images" are just characters,
    //But you can use emojis!
    // https://emojis.wiki/

    sprites[0].image = "👨 "; // Man 
    sprites[0].x = 100;
    sprites[0].y = 100;

    //Putting two sprites together you
    //can make more complicated things.
    sprites[1].image = "🍩"; //Food
    sprites[1].x = 200;
    sprites[1].y = 450;
    sprites[2].image = "💣"; //Explosion 
    sprites[2].x = 300;
    sprites[2].y = 450;
    sprites[3].image = "🍩"; //Food1 
    sprites[3].x = 450;
    sprites[3].y = 500;
    sprites[4].image = "💣"; //Explosion1 
    sprites[4].x = 150;
    sprites[4].y = 450;
    sprites[5].image = "🍩"; //Food2 
    sprites[5].x = 500;
    sprites[5].y = 450;
    sprites[6].image = "💣"; //Explosion2
    sprites[6].x = 300;
    sprites[6].y = 450;   
}

/**
 * This function is called every frame
 * @param sprites   Array of sprite objects
 * @param t         Seconds since start of game
 * @param dt        Seconds since last frame (A very small number)
 * @param up        Is up arrow pressed?
 * @param down      "
 * @param left      "
 * @param right     "
 * @param space     Is spacebar pressed?
 * @returns The current score
 */
function frame(sprites, t, dt, up, down, left, right, space) {
    //Keep references to the sprites in some variables with
    //better names:
    const man = sprites[0]; //Easier to remember
    const food = sprites[1]; //Easier to remember
    const explosion = sprites[2]; //Easier to remember
    const food1 = sprites[3]; //Easier to remember
    const explosion1 = sprites[4]; //Easier to remember
    const food2 = sprites[5]; //Easier to remember
    const explosion2 = sprites[6]; //Easier to remember
    

    //Move the fire engine
    if (up) {
        //Speed is in pixels per second, and
        //dt is the number of seconds that have
        //passed since the last frame.
        //
        //Multiply them together so that the
        //truck moves at the same speed if the
        //computer is fast or slow
        man.y += speed * dt;
    }
    if (down) {
        man.y -= speed * dt;
    }
    if (right) {
        man.x += speed * dt;
        //You can flipH a spright so it is facing
        //the other direction
        food.flipH = true;
    }
    if (left) {
        man.x -= speed * dt;
        man.flipH = false;
    }

    //If the truck is close to the house
    if (distance(man, explosion) < 10) {
        food.image = "";
    }

    explosion.y = explosion.y - 1
    food.y = food.y - 1
    explosion1.y = explosion1.y - 3
    food1.y = food1.y - 2
    explosion2.y = explosion2.y - 5
    food2.y = food2.y - 2
    

    //A very simple repeating animation
    sprites[2].y += Math.sin(t) / 10;

    return score;
};

export default {
    name: "Choose Wisely",
    instructions: "Use the arrows to move, Up, down, left and right, Get the food, Stay away from explosions or else game over.",
    icon: "📝", //Choose an emoji icon
    background: {
        //You can put CSS here to change your background
        "background-color": "#555"
    },
    frame,
    setup,
};



