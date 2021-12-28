let burger_button = document.querySelector('.burger_button');

burger_button.onclick = () => {
    burger_button.classList.remove('off');
    burger_button.classList.add('on');
}