function checkLabel(labelId, input) {
    let lbl = document.getElementById(labelId);
    inp = input;
    if(inp.value!=''){
        if(!lbl.classList.contains('label-active'))
            lbl.classList.add('label-active');
        else
        lbl.classList.remove('label-active');
    }
}