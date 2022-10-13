var logger = /** @class */ (function () {
    function logger() {
    }
    logger.prototype.logRandomNumber = function () {
        Math.floor(Math.random() * 101);
        console.log(this.logRandomNumber);
    };
    logger.prototype.logARandomColor = function () {
        console.log(this.logARandomColor);
        var array = (("red") + ("blue") + ("green"));
    };
    logger.prototype.logTo100 = function () {
        console.log(this.logTo100);
    };
    return logger;
}());
new logger;
