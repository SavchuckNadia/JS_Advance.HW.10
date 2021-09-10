let btnCenzor: HTMLButtonElement = document.querySelector('.btnCenzor');
let add: HTMLButtonElement = document.querySelector('.btn-warning');
let reset: HTMLButtonElement = document.querySelector('.btn-danger');
let badWords: HTMLSpanElement = document.querySelector('.badWords');
let writeWord: HTMLInputElement = document.querySelector('#writeWord');
let writeText: HTMLTextAreaElement = document.querySelector('#writeText');

add.addEventListener('click', () => {
    if (!writeWord.value) {
        writeWord.setAttribute('placeholder', 'Please write a word!')
        writeWord.style.border = '2px solid #dd1f52'
    }
    else {
        badWords.textContent += (badWords.textContent !== '') ? ',' + writeWord.value : writeWord.value;
        writeWord.setAttribute('placeholder', 'word here..')
        writeWord.value = ''
        writeWord.style.border = '1px solid lightgrey'
    }
})
reset.addEventListener('click', () => {
    badWords.textContent = ''
})
btnCenzor.addEventListener('click', () => {
    if (!writeText.value) {
        writeText.setAttribute('placeholder', 'Please write a text!')
        writeText.style.border = '2px solid #dd1f52'
    }
    else {
        writeText.setAttribute('placeholder', 'word here..')
        writeText.style.border = '2px solid rgba(19, 183, 19, 0.517)'
        let badWordsList: string = badWords.textContent;
        let arr: string[] = badWordsList.split(',')
        arr.forEach(elem => {
            let regExp = new RegExp(`\\b${elem}\\b`, 'gmi')
            let stars = '*'.repeat(elem.length)
            let correctText: string = writeText.value.replace(regExp, stars);
            writeText.value = correctText;
        })
    }
})

