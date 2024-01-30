const gridCont = document.querySelector('.grid-cont');
const inputBtn = document.querySelector('#input-btn');
let userInput = 0

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let x = 0; x< 6; x++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// MAIN GRID
for (let x = 0; x < 16; x++ ) {
    const gridCont2 = document.createElement('div');
    gridCont2.setAttribute('class', 'grid-cont2');
    gridCont.appendChild(gridCont2);

    for (let x = 0; x < 16; x++) {
        let grids = document.createElement('div');
        grids.setAttribute('id', 'grids');
        grids.style.height = '15px';
        grids.style.width = '15px';
        grids.style.border = '0.5px solid black';
        gridCont2.appendChild(grids);

        grids.addEventListener('mouseover', () => {
            grids.style.backgroundColor = randomColor();
        });
    };
};

// USER GRID
inputBtn.addEventListener('click', () => {
    document.body.removeChild(gridCont);

    userInput = prompt('Please type in your custom layout (max 100)');

    const userGridCont = document.createElement('div');
    userGridCont.setAttribute('class', 'usergrid-cont');
    userGridCont.style.display = 'flex';
    userGridCont.style.justifyContent = 'center';
    document.body.appendChild(userGridCont);

    for (let x = 0; x < userInput; x++) {
        const userGridCont2 = document.createElement('div');
        userGridCont2.setAttribute('class', 'usergrid-cont2');
        userGridCont.appendChild(userGridCont2);

        for (let x = 0; x < userInput; x++) {
            let userGrid = document.createElement('div');
            userGrid.setAttribute('id', 'user-grid');
            userGrid.style.height = '15px';
            userGrid.style.width = '15px';
            userGrid.style.border = '0.5px solid black';
            userGridCont2.appendChild(userGrid);

            userGrid.addEventListener('mouseover', () => {
                userGrid.style.backgroundColor = randomColor();
            });
        };
    };
});

    
