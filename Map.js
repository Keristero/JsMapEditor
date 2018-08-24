class Map{
    constructor(pixelsPerTiles,defaultTileID){
        this._pixelsPerTiles = pixelsPerTiles || 32
        this._defaultTileID = defaultTileID || 0
        this.grid = {}
    }
    SetTileID(tilePos,newTileValue){
        if(this.grid[tilePos.x] == undefined){
            this.grid[tilePos.x] = {}
        }
        if(this.grid[tilePos.x][tilePos.y] == undefined){
            this.grid[tilePos.x][tilePos.y] = {}
        }
        this.grid[tilePos.x][tilePos.y] = newTileValue
    }
    GetTileID(tilePos){
        if(this.grid[tilePos.x] == undefined){
            return this._defaultTileID
        }
        if(this.grid[tilePos.x][tilePos.y] == undefined){
            return this._defaultTileID
        }else{
            return this.grid[tilePos.x][tilePos.y]
        }
    }
    GetTilesInTileArea(topLeftPos,bottomRightPos){
        let tilesInArea = []
        for(let x = topLeftPos.x; x <= bottomRightPos.x;  x++){
            for(let y = topLeftPos.y; y <= bottomRightPos.y; y++){
                if(this.grid[x] != undefined && this.grid[x][y] != undefined){
                    tilesInArea.push({
                        x:x,
                        y:y,
                        pixelX:x*this._pixelsPerTiles,
                        pixelY:y*this._pixelsPerTiles,
                        id:this.grid[x][y]
                    })
                }
            }
        }
        return tilesInArea
    }
    GetTilesInPixelArea(topLeftPos,bottomRightPos){
        let topLeftTilePos = {x:Math.floor(topLeftPos.x/this._pixelsPerTiles),y:Math.floor(topLeftPos.y/this._pixelsPerTiles)}
        let bottomRightTilePos = {x:Math.floor(bottomRightPos.x/this._pixelsPerTiles),y:Math.floor(bottomRightPos.y/this._pixelsPerTiles)}
        return this.GetTilesInTileArea(topLeftTilePos,bottomRightTilePos)
    }
}