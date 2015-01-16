var assert = require("assert"),
    filter = require("../src/index");


describe("filter", function() {
    it(
        "should create array/object with the filter results of calling the callback on every element in this array/object",
        function() {
            var array = [{
                    age: 42,
                    name: "Bob"
                }, {
                    age: 23,
                    name: "Frank"
                }],
                object = {
                    0: {
                        age: 42,
                        name: "Bob"
                    },
                    1: {
                        age: 23,
                        name: "Frank"
                    }
                },
                arrayFrank = array[1],
                objectFrank = object[1];

            assert.deepEqual(
                filter(array, function(value) {
                    return value.name === "Frank";
                }), [arrayFrank]
            );

            assert.deepEqual(
                filter(object, function(value) {
                    return value.name === "Frank";
                }), {
                    1: objectFrank
                }
            );
        }
    );
});
