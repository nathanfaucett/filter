var isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    arrayFilter = require("array-filter"),
    objectFilter = require("object-filter");


module.exports = filter;


function filter(value, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 3);
    return isArrayLike(value) ?
        arrayFilter(value, callback) :
        objectFilter(value, callback);
}
