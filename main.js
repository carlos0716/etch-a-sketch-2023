const gridContainer = document.getElementById('grid-container');

function createGrid(n) {
    
    for (let i = 0; i < n; i++) {
        if (n > 100) return;
        
        for (let j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            gridContainer.appendChild(div);  
            div.style.width = `calc(100%/${n})`;
            div.style.height = `calc(100%/${n})`;
            
        }
    } 

    
}

// function appendChild() {
//     const div = document.createElement('div');
//     div.classList.add('grid-item');
//     gridContainer.appendChild(div);
// }

