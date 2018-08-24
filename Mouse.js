class Mouse {
    constructor(canvas,movementCallback,clickCallback) {
        this.buttons = {};
        this.pos = {
            x: 0,
            y: 0
        };
        this.movementCallback = movementCallback
        this.clickCallback = clickCallback
        document.addEventListener("mousemove", e => {
            this.pos.x = e.clientX - canvas.offsetLeft;
            this.pos.y = e.clientY - canvas.offsetTop;
            if(typeof this.movementCallback == 'function'){
                this.movementCallback()
            }
        });
        document.addEventListener("mousedown", e => {
            this.buttons[e.button] = true;
            if(typeof this.clickCallback == 'function'){
                this.clickCallback()
            }
        });
        document.addEventListener("mouseup", e => {
            this.buttons[e.button] = false;
            if(typeof this.clickCallback == 'function'){
                this.clickCallback()
            }
        });
    }
}