let peca_p1_select = document.querySelector('.peca-p1');
let peca_p2_select = document.querySelector('.peca-p2');

let pecas = ['👻','💀','☠️','👽','👾','🤖','🎃'];
pecas.forEach(peca => {
    let query = `<option value='${peca}'>${peca}</option>`;
    peca_p1_select.innerHTML += query;
    peca_p2_select.innerHTML += query;
});