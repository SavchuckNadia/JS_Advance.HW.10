let result;
let str;
function getSqrt(number) {
    if (number !== 0 && typeof number !== 'boolean' && Number.isNaN(number) == false && !number) {
        str = ('Будь ласка, введіть число!');
    }
    else if (typeof number !== 'number' || Number.isNaN(number)) {
        str = `Повинно бути числове значення.`;
    }
    else if (number < 0) {
        str = 'Введіть додатнє число!';
    }
    else if (Number.isNaN(number) === false && typeof number == 'number') {
        result = +(Math.sqrt(number)).toFixed(2);
        str = `Квадратний корінь з ${number} дорівнює ${result}.`;
    }
    return str;
}
console.log(getSqrt(36));
