function getSetingValue() {
    let p1_name = document.getElementById('p1-name').value;
    let p2_name = document.getElementById('p2-name').value;
    let peca_p1_value = document.querySelector('.peca-p1').value;
    let peca_p2_value = document.querySelector('.peca-p2').value;


    let cfg = {
        p1_name: p1_name,
        p2_name: p2_name,
        p1_peca: peca_p1_value,
        p2_peca: peca_p2_value
    }

    if(peca_p1_value == '' || peca_p2_value == '') {
        cfg.p1_peca = 'x';
        cfg.p2_peca = 'o';
    }

    if(p1_name.value == undefined || p2_name.value == undefined) { 
            cfg.p1_name = 'P1';
            cfg.p2_name = 'p2';  
    }

    return cfg;
}