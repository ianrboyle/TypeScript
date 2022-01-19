// setting a type to a variable
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
//enum
var Color;
(function (Color) {
  Color[(Color["Red"] = 0)] = "Red";
  Color[(Color["Green"] = 1)] = "Green";
  Color[(Color["Blue"] = 2)] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
var message;
message = "abc";
//tells the typescript compiler the type of variable
var endsWithC = message.endsWith("c");
var alternativeWat = message.endsWith("c");
