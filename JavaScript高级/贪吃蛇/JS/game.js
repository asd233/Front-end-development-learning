(function () {
    var that;
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.start = function () {
        this.food.render(this.map);
        this.snake.render(this.map);
        this.moveId = setInterval(() => {
            this.snake.move();
            this.snake.render(this.map);
            for (let i = 1; i < this.snake.body.length; i++) {
                if (this.snake.body[0].left == this.snake.body[i].left && this.snake.body[0].top == this.snake.body[i].top) {
                    this.gameOver();
                    break;
                }
            }
        }, 200);
    }
    Game.prototype.gameOver = function () {
        clearInterval(this.moveId);
    }
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37:
                // 向左
                if (that.snake.direction != "right") {
                    that.snake.direction = "left";
                }
                break;
            case 38:
                // 向上
                if (that.snake.direction != "bottom") {
                    that.snake.direction = "top";
                }
                break;
            case 39:
                // 向右
                if (that.snake.direction != "left") {
                    that.snake.direction = "right";
                }
                break;
            case 40:
                // 向下
                if (that.snake.direction != "top") {
                    that.snake.direction = "bottom"
                }
                break;
            default:
                break;
        }
    }
    window.Game = Game;
})()