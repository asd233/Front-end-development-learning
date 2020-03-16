var Tools = {
    random: function (min, max) {
        //生成并返回min与max之间的随机数（包含min与max）
        var num = Math.floor(Math.random() * (max - min)) + min;
        return num;
    }
};
