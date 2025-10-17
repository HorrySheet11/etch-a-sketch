const body = document.body;

const section = document.createElement('section');
section.classList.add('section');
body.appendChild(section);

const reset = document.createElement('button');
reset.textContent = 'Reset';
reset.classList.add('reset');
body.appendChild(reset);

reset.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => {
        box.style.removeProperty('opacity');
        box.style.backgroundColor = '#e3f4ff';
    });
});
let gridSize = 256;

function grid(size) {
    gridSize = size * size;
}


for (let i = 1; i <= gridSize  ; i++) {    
    const div = document.createElement('div');
    div.textContent = '';
    div.classList.add('box');
    section.appendChild(div);
}

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', (event) => {
        const hoveredDiv = event.target;
                if(!hoveredDiv.style.opacity) {
                    hoveredDiv.style.opacity = 0;
                }
                let currentOpacity = parseFloat(hoveredDiv.style.opacity);               
                hoveredDiv.style.backgroundColor = `red`;
                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                    hoveredDiv.style.opacity = currentOpacity;
                }
    });
    box.style.cssText = "background: #e3f4ff; height: 10px; width: 10px; margin: 0px; padding: 8px;";
});

const gridButton = document.createElement('button');
gridButton.textContent = 'Change Grid Size';
gridButton.classList.add('grid-button');
body.appendChild(gridButton);

gridButton.addEventListener('click', () => {
    
    let userInput = prompt('Enter a grid size (1-100):');
    
    if (userInput !== null) {
        userInput = parseInt(userInput);
        if (isNaN(userInput) || userInput < 1 || userInput > 100) {
            alert('Invalid input. Please enter a number between 1 and 100.');
            return;
        }
        section.innerHTML = '';
        grid(userInput);
        for (let i = 1; i <= gridSize; i++) {    
            const div = document.createElement('div');
            div.textContent = '';
            div.classList.add('box');
            section.appendChild(div);
        }
        document.querySelectorAll('.box').forEach(box => {
            box.addEventListener('mouseover', (event) => {
                const hoveredDiv = event.target;
                if(!hoveredDiv.style.opacity) {
                    hoveredDiv.style.opacity = 0;
                }
                let currentOpacity = parseFloat(hoveredDiv.style.opacity);               
                hoveredDiv.style.backgroundColor = `red`;
                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                    hoveredDiv.style.opacity = currentOpacity;
                }
            });
            box.style.cssText = "background: #e3f4ff; height: 10px; width: 10px; margin: 0px; padding: 8px;";
        });
        section.style.cssText = `display: grid; grid-template-columns: repeat(${userInput}, auto); justify-content: center; gap: 0px;`;
        
    }
});