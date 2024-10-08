"use strict";
// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of
// constant values, which might otherwise be represented as numbers or strings.
// Example 1 - Game
// Let's say you have a game where you have to perform an action based on wether
// the user has pressed the up arrow key, down arrow key, left arrow key or
// right arrow key.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
function Game(keyPressed) {
    if (keyPressed === Direction.Up) {
        //perform any operation
        console.log("Up key pressed");
    }
    else if (keyPressed === Direction.Down) {
        //perform any operation
        console.log("Down key pressed");
    }
    else if (keyPressed === Direction.Right) {
        //perform any operation
        console.log("Right key pressed");
    }
    else if (keyPressed === Direction.Left) {
        //perform any operation
        console.log("Left key pressed");
    }
}
Game(Direction.Up);
Game(Direction.Down);
Game(Direction.Right);
Game(Direction.Left);
