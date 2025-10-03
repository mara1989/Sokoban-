// Tile constants for readability
const WALL = 'W';
const SPACE = ' ';
const GOAL = 'G';
const BLOCK = 'B';
const PLAYER = 'P';

// Define levels
const level = [
    {
        width: 19,
        height: 16,
        mapGrid: [
            [[SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [WALL], [WALL], [WALL], [WALL], [WALL], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [WALL], [SPACE], [SPACE], [SPACE], [WALL], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [WALL], [SPACE, BLOCK], [SPACE], [SPACE], [WALL], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [WALL], [WALL], [WALL], [SPACE], [SPACE], [SPACE, BLOCK], [WALL], [WALL], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [WALL], [SPACE], [SPACE], [SPACE, BLOCK], [SPACE], [SPACE, BLOCK], [SPACE], [WALL], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[WALL], [WALL], [WALL], [SPACE], [WALL], [SPACE], [WALL], [WALL], [SPACE], [WALL], [SPACE], [SPACE], [SPACE], [WALL], [WALL], [WALL], [WALL], [WALL], [WALL]],
            [[WALL], [SPACE], [SPACE], [SPACE], [WALL], [SPACE], [WALL], [WALL], [SPACE], [WALL], [WALL], [WALL], [WALL], [WALL], [SPACE], [SPACE], [GOAL], [GOAL], [WALL]],
            [[WALL], [SPACE], [SPACE, BLOCK], [SPACE], [SPACE], [SPACE, BLOCK], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [GOAL], [GOAL], [WALL]],
            [[WALL], [WALL], [WALL], [WALL], [WALL], [SPACE], [WALL], [WALL], [WALL], [SPACE], [WALL], [PLAYER], [WALL], [WALL], [SPACE], [SPACE], [GOAL], [GOAL], [WALL]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [WALL], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [WALL], [WALL], [WALL], [WALL], [WALL], [WALL], [WALL], [WALL], [WALL]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [WALL], [WALL], [WALL], [WALL], [WALL], [WALL], [WALL], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]],
            [[SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE], [SPACE]]
        ]
    }
];
