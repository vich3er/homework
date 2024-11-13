// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareRect = (a, b) => a * b;
console.log(squareRect(10, 2));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const sqrCircle = (r) => 3.14 * Math.pow(r, 2);
console.log(sqrCircle(2));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sqrCylinder = (h, r) => 2 * 3.14 * r * (h + r);
console.log(sqrCylinder(2, 3));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
const logArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
arr = [1, 3, 2, 4, 1, 5678, -66, -2];
logArr(arr);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const makeP = (text)=>{

   try{

       document.write(`<p>${text}</p>`);
   }
    catch (err){
        console.log('Лапки постав');
    }


}
makeP("// #59g0IsA\n" +
    "// - створити функцію яка створює параграф з текстом. Текст задати через аргумент");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const makeUl = (text, howMuchLi) => {
     document.write(`<ul>`);
    for (let i = 0; i < howMuchLi; i++) {
        document.write(`<li>${text}</li>`);

    }
         document.write(`</ul>`);
}
makeUl('te', 6);
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrToList = (arr)=>{
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`);
}
arrToList([1, 2, 4, "hgfdew,", true, 0]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.













//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
const min = (arr) => {
    let min = arr[0];
    for (const el of arr) {
        if (el < min) min = el;

    }
    return min;
}
console.log(min(arr));
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArr = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(sumArr([1, 2, 10]));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, indx1, indx2) => {
    let elInd1 = arr[indx1];
    // let elInd2 = arr[indx2];
    arr[indx1] = arr[indx2];
    arr[indx2] = elInd1;
}
arr3 = [11, 22, 33, 44]
swap(arr3, 0, 1);
console.log(arr3);
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exValue  ;
    try {
    for (const  el of  currencyValues) {
        if (el.currency ===exchangeCurrency)
        {
            exValue = el.value;
            break;
        }

     }
        // if(exValue ===1 )
        //     throw new Error("error2");
        if(!exValue)
         throw new Error("error1");
    }
    catch (error){
         return "валюту не знайдено";
    }
    // catch (err2){
    //     return "1?????/";
    // }
    return sumUAH/exValue;
}
//  в мене питання, як придумувати власні помилки, а не тільки одну? бо так як я написала і закоментувала не виходить??
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:1}], 'EU'));