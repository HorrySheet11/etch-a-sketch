const body = document.body;

const section = document.createElement('section');
section.classList.add('section');
body.appendChild(section);

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
    box.style.cssText = "background: #e3f4ff; height: 10px; width: 10px; margin: 1px; padding: 8px;";
});

