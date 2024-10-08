// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of
// constant values, which might otherwise be represented as numbers or strings.

// Example 1 - Game
// Let's say you have a game where you have to perform an action based on wether
// the user has pressed the up arrow key, down arrow key, left arrow key or
// right arrow key.

enum Direction {
    Up, // 0    // Up = "up"
    Down, // 1   // Down = "down"
    Right, // 2    // Right = "right"
    Left // 3   // Left = "left"
}

function Game(keyPressed : Direction){
    if(keyPressed === Direction.Up){
        //perform any operation
        console.log("Up key pressed");
    }
    else if(keyPressed === Direction.Down){
        //perform any operation
        console.log("Down key pressed");
    }
    else if(keyPressed === Direction.Right){
        //perform any operation
        console.log("Right key pressed");
    }
    else if(keyPressed === Direction.Left){
        //perform any operation
        console.log("Left key pressed");
    }
}

Game(Direction.Up);
Game(Direction.Down);
Game(Direction.Right);
Game(Direction.Left);

// How to change values?
// enum Direction {
//     Up = 1,
//     Down, // becomes 2 by default
//     Left, // becomes 3
//     Right // becomes 4
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.
// }

// doSomething(Direction.Down)

// Can also be strings
// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = 'Right'
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.
// }

// doSomething(Direction.Down)


// basic use case in express
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })