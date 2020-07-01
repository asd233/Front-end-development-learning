(function () {
    var that;
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        this.score = 0
        that = this;
    }
    Game.prototype.start = function () {
        this.food.render(this.map, that.snake);
        this.snake.render(this.map);
        this.moveId = setInterval(() => {
            var lastBody = { left: that.snake.body[that.snake.body.length - 1].left, top: that.snake.body[that.snake.body.length - 1].top, backgroundColor: "green" };
            eat(lastBody);
            this.snake.move();
            boundary();
            this.snake.render(this.map);
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
        if (that.snake.body[0].left > that.map.offsetWidth / parseInt(that.snake.width) - 1 || that.snake.body[0].top > that.map.offsetHeight / parseInt(that.snake.height) - 1
            || that.snake.body[0].left < 0 || that.snake.body[0].top < 0) {
            that.gameOver();
        }
    }
    function eat(lastBody) {
        var score = document.querySelector("#score");
        if (that.snake.body[0].left == parseInt(that.food.left) / parseInt(that.snake.width) && that.snake.body[0].top == parseInt(that.food.top) / parseInt(that.snake.height)) {
            that.snake.body.push(lastBody);
            that.food.render(that.map, that.snake);
            that.score++;
            score.innerHTML = "得分：" + that.score;
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