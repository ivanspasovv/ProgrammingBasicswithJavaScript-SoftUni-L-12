function solve(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isMagicNumber = false;
    for (let i = n1; i <= n2; i++) {
        for (let j = n1; j <= n2; j++) {
            counter++
            if (i + j === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                isMagicNumber = true;
                break;
            }
        }
        if (isMagicNumber) {
            break;
        }   
    }
    if (isMagicNumber === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

solve(["88",
"888",
"1000"])
