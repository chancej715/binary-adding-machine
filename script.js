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