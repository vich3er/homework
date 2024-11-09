//#59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function makePar(text) {
    document.write(`<p>${text}</p>`);
}

makePar('swerdctfgbhjnknhbgvyc54xcrtvgbhjnknhbuyt654drctgvhbjnihy7gt6gftg7ybhnjknhbnhhbhbbhbhbhbhhbwecrvbnjmnhbvcrecrtvgbhj hbgvcrexcrtvbhnjmknbvcrexxecrtvbhjnmk')
;
// #59g0IsA
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function makeList(liText) {
    document.write(`<ul><li>${liText}</li><li>${liText}</li><li>${liText}</li></ul>`);
}
makeList('kkkkk');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function makeNewList(text,listQuantity ){
    document.write('<ul>');
    for (let i = 0; i <listQuantity ; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');
}
makeNewList('text', 5);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
 function makeListFromArr(arr){
     document.write('<ul>');
     for (const arrElement of arr) {
         document.write(`<li>${arrElement}</li>`) ;
     }

     // for (let i = 0; i < arr.length; i++) {
     //     document.write(`<li>${arr[i]}</li>`) ;
     // }
     document.write('</ul>');

 }
 makeListFromArr([1333, 9, true, false, !!0, !!9, "xserdtghjikjhuhhuhuh"]);