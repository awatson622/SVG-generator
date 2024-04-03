const readlineSync = require('readline-sync');
const fs = require('fs');

// Function to create SVG content based on user input
function generateSVG(text, textColor, shape, shapeColor) {
    const svgContent = `
        <svg width="300" height="200">
            <rect width="100%" height="100%" fill="${shapeColor}" />
            <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
        </svg>
    `;
    return svgContent;
}

// Function to prompt user for input
function getUserInput() {
    const text = readlineSync.question('Enter up to three characters: ');
    const textColor = readlineSync.question('Enter text color (keyword or hexadecimal): ');
    const shapes = ['circle', 'triangle', 'square'];
    const index = readlineSync.keyInSelect(shapes, 'Choose a shape: ');
    const shape = shapes[index];
    const shapeColor = readlineSync.question('Enter shape color (keyword or hexadecimal): ');
    return { text, textColor, shape, shapeColor };
}

// Function to generate SVG file
function generateSVGFile(text, textColor, shape, shapeColor) {
    const svgContent = generateSVG(text, textColor, shape, shapeColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

// Main function
function main() {
    const { text, textColor, shape, shapeColor } = getUserInput();
    generateSVGFile(text, textColor, shape, shapeColor);
}

// Run main function
main();
