import * as swcHelpers from "@swc/helpers";
// @target: es5,esnext
var K = {
    a: "a",
    b: "b"
};
var ref = function() {
    var _obj;
    return _obj = {}, swcHelpers.defineProperty(_obj, K.a, 1), swcHelpers.defineProperty(_obj, K.b, 1), _obj;
}(), aVal = ref[K.a], bVal = ref[K.b];
console.log(aVal, bVal);
