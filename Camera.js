class Camera{
    constructor(width,height){
        this._centerPos = {x:0,y:0};
        this._targetWidth = width
        this._targetHeight = height
        this._zoom = 1
        this._updateVariables();
    }
    _updateVariables(){
        this._halfWidth = this._targetWidth/2
        this._halfHeight = this._targetHeight/2
        this.topLeft = {
            x:Math.floor(this._centerPos.x - (this._halfWidth/this._zoom)),
            y:Math.floor(this._centerPos.y - (this._halfHeight/this._zoom))
        }
        this.bottomRight = {
            x:Math.floor(this._centerPos.x + (this._halfWidth/this._zoom)),
            y:Math.floor(this._centerPos.y + (this._halfHeight/this._zoom))
        }
        console.log('TopLeft',this.topLeft)
    }
    ApplyTransformations(ctx){
        //Call this before you draw to the canvas, after drawing use ctx.resetTransform()
        ctx.scale(this.zoom,this.zoom)
        ctx.translate(-this.topLeft.x,-this.topLeft.y)
    }
    CenterOn(pos){
        this._centerPos = {x:pos.x,y:pos.y}
        this._updateVariables();
    }
    Follow(pos){
        this._centerPos = pos
        //Because this is an object reference, you can set the camera to follow a position object
        this._updateVariables();
    }
    WorldPosToCanvasPos(worldPos){
        return {
            x:worldPos.x - this.topLeft.x,
            y:worldPos.y - this.topLeft.y
        }
    }
    CanvasPosToWorldPos(canvasPos){
        return {
            x:canvasPos.x + this.topLeft.x,
            y:canvasPos.y + this.topLeft.y
        }
    }
    set zoom(val){
        this._zoom = val
        this._updateVariables();
    }
    set x(val){
        this._centerPos.x = val
        this._updateVariables();
    }
    set y(val){
        this._centerPos.y = val
        this._updateVariables();
    }
    get zoom(){
        return this._zoom
    }
    get x(){
        return this._centerPos.x
    }
    get y(){
        return this._centerPos.y
    }
}