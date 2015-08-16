var tape = require("tape"),
    filter = require("..");


tape("filter(object, callback[, thisArg]) creates a new object with all elements that pass the test implemented by the provided function", function(assert) {
    assert.deepEquals(
        filter({
            a: "a",
            b: "b",
            c: "c"
        }, function(value) {
            return value === "b";
        }), {
            b: "b"
        }
    );
    assert.deepEquals(
        filter([0, 1, 2, 3, 4], function(value) {
            return value % 2 === 0;
        }), [0, 2, 4]
    );
    assert.end();
});
