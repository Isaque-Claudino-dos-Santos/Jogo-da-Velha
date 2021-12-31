let burger_button = document.querySelector('.burger_button');
let form_config = document.querySelector('.form_container .form_state_off');

let btnState = true;
burger_button.onclick = () => {
    if(!btnState) {
        burger_button.classList.remove('off');
        burger_button.classList.add('on');

        form_config.classList.remove('form_state_off');
        form_config.classList.add('form_state_on');

        btnState = true;
    }else {
        burger_button.classList.add('off');
        burger_button.classList.remove('on');

        form_config.classList.remove('form_state_on');
        form_config.classList.add('form_state_off');

        btnState = false;
    }
}