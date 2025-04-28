const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('#reset-button');

// Function to create the grid
function createGrid(gridSize) {
    // Clear the existing grid
    gridContainer.innerHTML = '';

    // Set the container to use Flexbox
    gridContainer.style.display = 'flex';
    gridContainer.style.flexWrap = 'wrap';
    gridContainer.style.width = '640px'; // Total width
    gridContainer.style.height = '640px'; // Total height

    // Calculate the size of each square
    const squareSize = gridContainer.clientWidth / gridSize;

    // Create the grid squares
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = '1px solid #ccc'; // Optional: for visibility

        // Add hover effect
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue'; // Change to any color you like
        });

        gridContainer.appendChild(square);
    }
}

// Event listener for the reset button
resetButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter the number of squares per side (max 100):', 16));

    // Validate input
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    // Create a new grid with the specified size
    createGrid(newSize);
});

// Create the initial grid
createGrid(16);