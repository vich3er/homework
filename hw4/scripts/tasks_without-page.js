// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRect(a, b) {
    return a * b;
}

console.log(areaRect(10, 3));


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(areaCircle(3));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
    // s = 2pr(h+r)
    return 2 * Math.PI * r * (h + r);
}

console.log(areaCylinder(10, 3));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function seeArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

arr = [1, 6, 2, 9, 0, -6543, 3, 1];
seeArr(arr);


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function minElArr(arr) {
    let min = arr[0];
    // 1 9 2 6 0 2
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

console.log(minElArr(arr));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (let i = 0; arr.length > i; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr2 = [1, 2, 3];
console.log(sum(arr2));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    keyInx1 = arr[index1];
    keyInx2 = arr[index2];
    arr[index1] = keyInx2;
    arr[index2] = keyInx1;
}

arr3 = [11, 22, 33, 44];
swap(arr3, 0, 1);
console.log(arr3);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[           {currency:'USD',value:25},{currency:'EUR',value:42}     ],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exhV = -100;
    for (const infoV of currencyValues) {
        if (infoV.currency === exchangeCurrency) {
            exhV = infoV.value;
            break;
        }
    }
    return sumUAH / exhV;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));