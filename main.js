const gridContainer = document.getElementById('grid-container');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click', (e)=>{
    gridContainer.innerHTML = '';
    let n = prompt('Enter a number between 2 and 100');
    createGridRandomColor(n);
});

btn2.addEventListener('click', (e) => {
    gridContainer.innerHTML = '';
    let n = prompt('Enter a number between 2 and 100');
    createGridBlackAndWhite(n);
});

btn3.addEventListener('click', (e)=> {
    gridContainer.innerHTML = '';
});

function createGridRandomColor(n) {
   
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
                div.style.backgroundColor = randomColor();
            });
        }
    } 
}

function createGridBlackAndWhite(n) {
   
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

function randomColor()  {
let rC = '#' +Math.floor(Math.random()*16777215).toString(16);
return rC;
}

