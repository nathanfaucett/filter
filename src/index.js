var keys = require("keys"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    isArrayLike = require("is_array_like");


module.exports = filter;


function filter(object, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 2);
    return isArrayLike(object) ? filterArray(object, callback) : filterObject(object, callback);
}

function filterArray(array, callback) {
    var length = array.length,
        i = -1,
        il = length - 1,
        result = [],
        j = 0,
        value;

    while (i++ < il) {
        value = array[i];

        if (callback(value, i)) {
            result[j++] = value;
        }
    }

    return result;
}

function filterObject(object, callback) {
    var objectKeys = keys(object),
        i = -1,
        il = objectKeys.length - 1,
        result = {},
        key, value;

    while (i++ < il) {
        key = objectKeys[i];
        value = object[key];

        if (callback(value, key)) {
            result[key] = value;
        }
    }

    return result;
}
