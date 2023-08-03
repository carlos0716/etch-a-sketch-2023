const gridContainer = document.getElementById('grid-container');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e)=>{
    gridContainer.innerHTML = '';
    let n = prompt('Enter a number between 2 and 100');
    createGrid(n);
})


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
            div.addEventListener('mouseover', (e) => {
                div.style.backgroundColor = 'black';
            });
        }
    } 
}

