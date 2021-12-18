function getSetingValue() {
    let p1_name = document.getElementById('p1-name').value;
    let p2_name = document.getElementById('p2-name').value;

    if(p1_name.value == undefined || p2_name == undefined) {
        return { 
            p1_name: 'P1',
            p2_name: 'p2'
        }
    }
    return {
        p1_name: p1_name,
        p2_name: p2_name
    }
}