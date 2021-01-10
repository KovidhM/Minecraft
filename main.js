var canvas = new fabric.Canvas('myCanvas');

block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;

var block_object= "";
var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(IMG){
        player_object= IMG;
    
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);

    })
}

function block_update(block_image)
{
    fabric.Image.fromURL(block_image, function(IMG){
        block_object= IMG;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '67')
    {
        block_update('cloud.jpg');
        console.log("c is pressed")
    }

    if(keypressed == '68')
    {
        block_update('dark_green.png');
        console.log('d is pressed')
    }

    if(keypressed == '71')
    {
        block_update('ground.png');
        console.log('g is pressed')
    }

    if(keypressed == '76')
    {
        block_update('light_green.png');
        console.log('l is pressed')
    }

    if(keypressed == '82')
    {
        block_update('roof.jpg');
        console.log('r is pressed')
    }

    if(keypressed == '37')
    {
        left();
    }

    if(keypressed == '38')
    {
        up();
    }

    if(keypressed == '39')
    {
        right();
    }

    if(keypressed == '40')
    {
        down();
    }

    if(keypressed == '84')
    {
        block_update('trunk.jpg');
        console.log('t is pressed')
    }

    if(keypressed == '87')
    {
        block_update('wall.jpg');
        console.log('w is pressed')
    }

    if(keypressed == '89')
    {
        block_update('yellow_wall.png');
        console.log('y is pressed')
    }

    if(e.shiftKey && keypressed == '77')
    {
        console.log("m and shift pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    
    if(e.shiftKey == true && keypressed == '80')
    {
        console.log("p and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }




    

    
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_height;
        canvas.remove(player_object)
        player_update();
    }
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_height;
        canvas.remove(player_object)
        player_update();
    }

}

function left()
{
    if(player_x >0)
    {
        player_x= player_x - block_width;
        canvas.remove(player_object)
        player_update();
    }
}

function right()
{
    if(player_x <=700)
    {
        player_x = player_x + block_width;
        canvas.remove(player_object)
        player_update();
    }
}
