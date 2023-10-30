// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".Вихідний рядок та символи для видалення задає користувач.

let str = prompt('Введіть текст');
let remove = prompt('Введіть через кому символи, які потрібно видалити з вашого тексту (приклад: 1,а,c)');
const newStr = removeFunc(str, remove);
alert('result = ' + newStr);



function removeFunc(str, remove) {
    let removeArr = remove.split(',');
    let strArr = str.split('');
    return strArr.filter(item => removeArr.indexOf(item) == -1).join('');
}