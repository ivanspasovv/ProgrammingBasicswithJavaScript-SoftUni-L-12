function solve(input) {
    let floorEntered = Number(input[0]);
    let roomEntered = Number(input[1]);
    let string = "";

    for (let floor = floorEntered; floor >= 1; floor--) {
        for (let room = 0; room < roomEntered; room++) {
            if (floor === floorEntered) {
                string += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                string += `O${floor}${room} `;
            } else {
                string += `A${floor}${room} `;
            }
        }
        string += "\n"
    }
    console.log(string);
}

solve(["6", "4"])