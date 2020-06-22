(function (map) {
    function Game() {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }
    Game.prototype.start = function (map) {
        this.food.render(map);
        this.snake.render(map);
        setInterval(() => {
            this.snake.move();
            this.snake.render(map);
        }, 200);
    }
    window.Game = Game;
})()