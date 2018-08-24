class Mouse {
    constructor(canvas) {
        this.buttons = {};
        this.pos = {
            x: 0,
            y: 0
        };
        document.addEventListener("mousemove", e => {
            this.pos.x = e.clientX - canvas.offsetLeft;
            this.pos.y = e.clientY - canvas.offsetTop;
        });
        document.addEventListener("mousedown", e => {
            this.buttons[e.button] = true;
        });
        document.addEventListener("mouseup", e => {
            this.buttons[e.button] = false;
        });
    }
}