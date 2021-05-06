//Задание 1
let num = prompt('Введите число');
let numN = +num;
if (typeof numN == 'number' && !isNaN(numN)) {
    if (numN === 0) {
        console.log('Число равно нулю');
    } else if (num % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}
//Задание 2
let x;
if (typeof x == 'number'){
    console.log('X - число');
} else if (typeof x == 'string'){
    console.log('X - строка');
} else if (typeof x == 'boolean'){
    console.log('X - логический тип');
} else {
    console.log('Тип X не определен');
}
// Задание 3 (переворот строки)
let str = 'Personal Jesus';
function reversingString (str) {
    return str.split('').reverse().join('');
}
console.log(reversingString(str));

// Задание 4 (рандомное число от 0 до 100 включительно)
function randomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber(100,0))

// Задание 5
let arr1 = [1, 2, 3, 'hello', true];
console.log("Длина массива равна " + arr.length)
let result = arr.forEach(function (item, index, array) {
    console.log("Значение " + item + " относится к элементу с индексом " + index)
});
// Задание 6
let arr1 = [1, 2, 3,  true];
let arr2 = [ 2, 2, 2, 1 + 1];
function searchSame(arr){
    let same = arr[0];
    return arr.every(function (item) {
        return item == same
    });
}
console.log(searchSame(arr1));
console.log(searchSame(arr2));

// Задание 7
let arr1 = [1, 3, 6, 22, null, true, Infinity, 55, 0];
function searchNum(arr) {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number' || isNaN(arr[i]) || arr[i] == Infinity) {
            continue;
        } else if (arr[i] === 0) {
            continue;
        } else if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    console.log('Количество четных элементов в массиве: ' + even.length);
    console.log('Количество нечетных элементов в массиве: ' + odd.length);
}
searchNum(arr1);