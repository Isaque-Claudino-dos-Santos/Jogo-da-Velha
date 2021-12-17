let cursorGame =  document.querySelector('#cursorGame');
let gameScren = document.querySelector('.jogo');

gameScren.addEventListener('mousemove',(ev) => {
    gameScren.style.cursor = 'none';

    let x = ev.pageX - gameScren.offsetLeft + 1;
    let y = ev.pageY - gameScren.offsetTop + 1;

    cursorGame.textContent = jogadorAtual.forma;
    cursorGame.style.left = x+'px';
    cursorGame.style.top =  y+'px';

});