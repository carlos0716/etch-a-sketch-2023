const gridContainer = document.getElementById('grid-container');



function createGrid(n) {
    
    for (let i = 0; i < n; i++) {
        if (n > 100) return;
        
        for (let j = 0; j < n; j++) {
            let div = document.createElement('div');
            div.classList.add('grid-item');
            div.classList.add('effect');
            div.setAttribute('id', 'test')
            gridContainer.appendChild(div);  
            div.style.width = `calc(100%/${n})`;
            div.style.height = `calc(100%/${n})`;
            div.addEventListener('mouseenter', (e) => {
                div.style.backgroundColor = 'black';
            });
        }
    } 

    
}

let div = document.getElementById('test');
div.addEventListener('mouseenter', (e) => {
    div.style.backgroundColor = 'red';
});