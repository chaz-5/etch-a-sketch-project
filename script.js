const gridCont = document.querySelector('.grid-cont');
const inputBtn = document.querySelector('#input-btn');
const inputBtnCont = document.querySelector('.input-btn-cont');
let userInput = 0

function refreshPage() {
    window.location.reload();
}

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
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.style.backgroundColor = 'lightcoral';
resetBtn.style.color = 'white';
resetBtn.style.fontFamily = 'Arial';
resetBtn.style.fontSize = '20px';
resetBtn.style.border = '0';
resetBtn.style.paddingTop = '5px';
resetBtn.style.paddingBottom = '5px';
resetBtn.style.paddingLeft = '10px';
resetBtn.style.paddingRight = '10px';
resetBtn.style.marginTop = '20px';
resetBtn.style.marginBottom = '50px';
resetBtn.style.borderRadius = '5px';
inputBtnCont.appendChild(resetBtn);
resetBtn.addEventListener('mouseover', () => {
    resetBtn.style.boxShadow = '0 0 8px black';
});
resetBtn.style.display = 'none';

inputBtn.addEventListener('click', () => {
    document.body.removeChild(gridCont);

    userInput = prompt('Please type in your custom layout (max 100)');
    while (userInput > 100) {
        alert('Please type a number under 100');
        userInput = prompt('Please type in your custom layout (max 100)');
    }

    const userGridCont = document.createElement('div');
    userGridCont.setAttribute('class', 'usergrid-cont');
    userGridCont.style.display = 'flex';
    userGridCont.style.justifyContent = 'center';
    document.body.appendChild(userGridCont);

    inputBtn.style.display = 'none';
    resetBtn.style.display = 'inline';

    resetBtn.addEventListener('click', () => {

    })

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
    resetBtn.addEventListener('click', () => {
        refreshPage();
    });
});

    
