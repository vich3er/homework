// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b, c){
//     let max = a;
//     if (max<b) max = b;
//     if (max < c) max = c;
//     return max;
// }
//
//
//
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function  maxQ(...x){
//     let max = x[0];
//     for (const el of x) {
//         if (el>max) max = el;
//         console.log(el);
//     }
//
//     return max;
// }
// console.log(maxQ(1, 3, 2, -1, 0 , 22222, 22, 99));
//
// function arg() {
//     if (arguments.length === 1) console.log(arguments[0])
//     else {
//         let string='';
//         for (const el of arguments) {
// string+=el + " ";
//         }
// console.log(string)
//     }
// }
// arg( 1, 2, 4, "sewds", true);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function arrObjToKey(arr) {
//     let arrKey = [];
//     for (const el of arr) {
//         for (const elKey in el) {
//             arrKey.push(elKey);
//         }
//     }
//     return arrKey;
// }

arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// console.log(arrObjToKey(arr));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function arrValues(arr) {
    let values = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            values.push(arrElement[arrElementKey]);
        }

    }
    // return values;
    console.log(values);
}
arrValues(arr);
// console.log(arrValues(arr))