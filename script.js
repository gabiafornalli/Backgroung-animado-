const container = document.getElementById('bgContainer');

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');

    // Quadrados maiores: entre 40px e 90px
    const size = Math.random() * 50 + 40 + 'px'; 
    const posX = Math.random() * window.innerWidth + 'px';
    const duration = Math.random() * 7 + 8 + 's'; // Um pouco mais lento para apreciar a rotação

    square.style.width = size;
    square.style.height = size;
    square.style.left = posX;
    square.style.animationDuration = duration;

    container.appendChild(square);

    // Eles não desaparecem visualmente (vão até o topo), 
    // mas removemos do código após saírem da tela para o PC não travar.
    setTimeout(() => {
        square.remove();
    }, parseFloat(duration) * 1000);
}

// Cria um quadrado a cada 400ms
setInterval(createSquare, 400);