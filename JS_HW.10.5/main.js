let btnCenzor = document.querySelector('.btnCenzor');
let add = document.querySelector('.btn-warning');
let reset = document.querySelector('.btn-danger');
let badWords = document.querySelector('.badWords');
let writeWord = document.querySelector('#writeWord');
let writeText = document.querySelector('#writeText');
add.addEventListener('click', () => {
    if (!writeWord.value) {
        writeWord.setAttribute('placeholder', 'Please write a word!');
        writeWord.style.border = '2px solid #dd1f52';
    }
    else {
        badWords.textContent += (badWords.textContent !== '') ? ',' + writeWord.value : writeWord.value;
        writeWord.setAttribute('placeholder', 'word here..');
        writeWord.value = '';
        writeWord.style.border = '1px solid lightgrey';
    }
});
reset.addEventListener('click', () => {
    badWords.textContent = '';
});
btnCenzor.addEventListener('click', () => {
    if (!writeText.value) {
        writeText.setAttribute('placeholder', 'Please write a text!');
        writeText.style.border = '2px solid #dd1f52';
    }
    else {
        writeText.setAttribute('placeholder', 'word here..');
        writeText.style.border = '2px solid rgba(19, 183, 19, 0.517)';
        let badWordsList = badWords.textContent;
        let arr = badWordsList.split(',');
        arr.forEach(elem => {
            let regExp = new RegExp(`\\b${elem}\\b`, 'gmi');
            let stars = '*'.repeat(elem.length);
            let correctText = writeText.value.replace(regExp, stars);
            writeText.value = correctText;
        });
    }
});
