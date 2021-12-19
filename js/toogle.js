let toogle = document.getElementById('toogle');
let menu = document.getElementById('form');

toogle.onclick = () => {
    toogle.classList.toggle('active');
    menu.classList.toggle('active');
}