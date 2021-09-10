let num: number = +prompt('Write a number');
if (isNaN(num)) {
    console.log('Ви ввели текст а не число')
}
else {
    let message = (num == 0) ? console.log('Число 0') : ((num % 2 === 0) ? console.log('Число парне') : console.log('Число непарне'))
}
