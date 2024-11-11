function convertToBinary() {
    const input = document.getElementById("inputValue").value;
    let binaryResult = '';

    // Check if the input is an integer
    if (!isNaN(input) && Number.isInteger(Number(input))) {
        binaryResult = parseInt(input, 10).toString(2);
    }
    // Check if the input is a float
    else if (!isNaN(input) && !Number.isInteger(Number(input))) {
        binaryResult = floatToBinary(parseFloat(input));
    }
    // Convert string to binary
    else {
        binaryResult = stringToBinary(input);
    }

    // Display the binary result
    document.getElementById("binaryResult").innerText = `Binary: ${binaryResult}`;
}

// Helper function to convert a float to binary
function floatToBinary(floatNum) {
    let [whole, fraction] = floatNum.toString().split('.').map(num => parseInt(num, 10));
    let wholeBinary = whole.toString(2);
    let fractionBinary = '';

    // Convert fraction part to binary
    let frac = parseFloat(`0.${fraction}`);
    while (frac > 0 && fractionBinary.length < 8) {  // limit to 8 bits for precision
        frac *= 2;
        fractionBinary += Math.floor(frac);
        frac -= Math.floor(frac);
    }

    return `${wholeBinary}.${fractionBinary}`;
}

// Helper function to convert a string to binary
function stringToBinary(str) {
    return str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}
