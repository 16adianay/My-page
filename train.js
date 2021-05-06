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
