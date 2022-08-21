/**
 * Logic gates
 */

// AND gate
const andGate = (a, b) => {
    if (a && b) {
        // Both inputs are a voltage, therefore the output is a voltage
        return 1
    } else {
        // Both inputs are NOT a voltage, therefore the output is NOT a voltage
        return 0
    }
}

// OR gate
const orGate = (a, b) => {
    if (a | b) {
        // Either a or b is a voltage, therefore the output is a voltage
        return 1
    } else {
        // Neither a nor b are a voltage, therefore the output is NOT a voltage
        return 0
    }
}

// NAND gate
const nandGate = (a, b) => {
    if (a && b) {
        // Both inputs are a voltage, therefore the output is NOT a voltage
        return 0
    } else {
        // Both the inputs are NOT a voltage, therefore the output is a voltage
        return 1
    }
}

// XOR gate
const xorGate = (a, b) => {
    return andGate(orGate(a, b), nandGate(a, b))
}


/**
 * Half adder
 */
const halfAdder = (a, b) => {
    const sumOut = xorGate(a, b)
    const carryOut = andGate(a, b)

    return `${sumOut}${carryOut}`
}


/**
 * Full adder
 */
const fullAdder = (a, b, cin) => {
    // First, we need the Sum out of the first adder
    const firstAdderOutput = halfAdder(a, b)
    const firstSumOut = parseInt(firstAdderOutput[0])
    const firstCarryOut = parseInt(firstAdderOutput[1])

    // Then we pass Carry In, First Sum Out as A B to the second adder
    const secondAdderOutput = halfAdder(cin, firstSumOut)
    const secondSumOut = parseInt(secondAdderOutput[0])
    const secondCarryOut = parseInt(secondAdderOutput[1])

    // Then we pass the first Carry Out, and the second Carry Out as inputs to the OR gate
    const orGateOutput = orGate(secondCarryOut, firstCarryOut)

            // Sum Out     // Carry Out
    return `${secondSumOut}${orGateOutput}`
}


/**
 * Add two 8 bit numbers
 */
const add = (a, b) => {
    let sumOut = []

    a = a.split('').reverse()
    b = b.split('').reverse()
    let cin = 0

    for (let i = 0; i < 9; i++) {
        const out = fullAdder(parseInt(a[i]), parseInt(b[i]), cin)

        sumOut.push(out[0])
        cin = parseInt(out[1])
    }

    return sumOut.reverse().join('')
}


/**
 * Input two 8 bit numbers
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Enter first 8 bit binary number: ', first => {
    readline.question('Enter second 8 bit binary number: ', second => {
        console.log(add(first, second))

        readline.close()
    })
})