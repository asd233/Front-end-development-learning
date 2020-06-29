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
            boundary();
        }, 200);
    }
    Game.prototype.gameOver = function () {
        alert("Game over!");
        clearInterval(this.moveId);
    }
    function boundary() {
        for (let i = 1; i < that.snake.body.length; i++) {
            if (that.snake.body[0].left == that.snake.body[i].left && that.snake.body[0].top == that.snake.body[i].top) {
                that.gameOver();
                break;
            }
        }
        if (that.snake.body[0].left > that.map.offsetWidth / parseInt(that.snake.width) - 1 || that.snake.body[0].top > that.map.offsetHeight / parseInt(that.snake.offsetHeight) - 1) {
            that.gameOver();
        }
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