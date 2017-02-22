/**
 * Created by admin on 22.02.2017.
 */
define([], function () {
    var arr = [];
    for (var i = 0; i < 5; i++) {
        var number = Math.round(Math.random() * 100);
        arr.push(number);
    }
    return arr;
});
