//common.js
var test=require("./lib/test");
console.log(test.test1());
console.log(test.test2());
module.exports={test};

//ES6
import DrawTableLine from "./lib/DrawLine";
export default {
    DrawTableLine
}