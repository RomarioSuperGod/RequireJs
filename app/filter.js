/**
 * Created by admin on 22.02.2017.
 */
define([], function () {
    function sort(e) {
        for (var i = 0; i < e.length; i++) {
            for (var j = i+1; j < e.length; j++) {
                var c;
                if (e[i] > e[j]) {
                    c = e[j];
                    e[j] = e[i];
                    e[i] = c;
                }
            }
        }
        return e;
    }
    return sort;
});