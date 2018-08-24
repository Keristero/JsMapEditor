class Keyboard{
    constructor() {
        this.keys = {};
        document.body.addEventListener("keydown", e => {
            this.keys[e.key.toLowerCase()] = true;
        });
        document.body.addEventListener("keyup", e => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }
}