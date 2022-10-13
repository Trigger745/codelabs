var Human = /** @class */ (function () {
    function Human() {
        this.brithyear = 0;
    }
    Human.prototype.ageDifference = function () {
        console.log("The age difference between my animal and I is 69 ");
    };
    return Human;
}());
var animal = /** @class */ (function () {
    function animal() {
        this.brithyear = 69;
    }
    return animal;
}());
