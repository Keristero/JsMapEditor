const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
const map = new Map()
const keyboard = new Keyboard()
const mouse = new Mouse(canvas,mouseMove,mouseClick)
const editor = new Editor()
const camera = new Camera(canvas.width,canvas.height)
const tileTypes = {
    0:{drawn:false},
    1:{drawn:true,fill:"grey",line:"black"}
}
{
    let startingCameraPos = {x:0,y:0}
    camera.CenterOn(startingCameraPos)
}

function mouseClick(){
    console.log('yo')
}

function mouseMove(){
    console.log('yoyoyoyo')
}

function Start(){
    //create some test tiles to draw
    for(var i = 0; i < 1000000; i++){
        map.SetTileID({x:RNG(-1000,1000),y:RNG(-1000,1000)},1)
    }
    console.log('map',map)
}

function Draw(){
    requestAnimationFrame(Draw)
    ctx.clearRect(0,0,800,600)
    camera.ApplyTransformations(ctx)
    let visableTiles = map.GetTilesInPixelArea(camera.topLeft,camera.bottomRight)
    visableTiles.forEach((tile,index)=>{
        let tileInfo = tileTypes[tile.id]
        if(tileInfo.drawn){
            ctx.fillStyle = tileInfo.fill
            ctx.strokeStyle = tileInfo.line
            ctx.fillRect(tile.pixelX,tile.pixelY,32,32)
            ctx.strokeRect(tile.pixelX,tile.pixelY,32,32)
        }
    })


    ctx.resetTransform()
}

function Update(){
    if(keyboard.keys['-']){
        camera.zoom *= 0.99
    }
    if(keyboard.keys['=']){
        camera.zoom *= 1.01
    }
    if(keyboard.keys['w']){
        camera.y--
    }
    if(keyboard.keys['s']){
        camera.y++
    }
    if(keyboard.keys['a']){
        camera.x--
    }
    if(keyboard.keys['d']){
        camera.x++
    }
}

Start()
Draw()
setInterval(Update,16)