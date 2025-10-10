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
        box.style.backgroundColor = '#e3f4ff';
    });
});


for (let i = 1; i <= 256  ; i++) {    
    const div = document.createElement('div');
    div.textContent = '';
    div.classList.add('box');
    section.appendChild(div);
}

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'grey';
    });
    box.style.cssText = "background: #e3f4ff; height: 10px; width: 10px; margin: 0px; padding: 8px;";
});

