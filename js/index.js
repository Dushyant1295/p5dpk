/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Global Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let posX = 0;
let posY = 0;




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           Preload Assests
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function preload() { }




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              Setup
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
}



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Draw
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function draw() {
    background(0);

    push();
    translate(width / 2, height / 2);
    stroke("#fdfdfd");
    noFill();

    const mapX = map(mouseX, 0, width, 50, 200);
    const mapY = map(mouseY, 0, height, 50, 200);

    rect(posX, posY, mapX, mapY);

    pop();

    push();
    translate(0, 0);
    fill("#fefefe");
    noStroke();
    ellipse(mouseX, mouseY, 20);
    pop();
}




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              Key Press
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW:
            posX -= 10;

            break;
        case RIGHT_ARROW:
            posX += 10;
            break;
        case UP_ARROW:
            posY -= 10;
            break;
        case DOWN_ARROW:
            posY += 10;
            break;
        default:
            break;
    }
}
