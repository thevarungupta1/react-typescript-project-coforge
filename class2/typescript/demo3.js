var a;
a = 10;
a = "A";
a = true;
a = 10.0;
var b;
b = 10;
//b = 'A';
var c = 10;
//c = 'A';
var d;
var e;
var f;
var g;
var h = [10, "A", true, 10.0];
var k = [1, 2, 3];
var colorRed = "Red";
var colorYellow = "Yellow";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Greem"] = 1] = "Greem";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Days;
(function (Days) {
    Days[Days["Monday"] = 10] = "Monday";
    Days[Days["Tuesday"] = 20] = "Tuesday";
    Days[Days["Wednesday"] = 30] = "Wednesday";
    Days[Days["Thursady"] = 40] = "Thursady";
    Days[Days["Friday"] = 50] = "Friday";
})(Days || (Days = {}));
console.log(Days.Wednesday);
