//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = prompt("Введіть число");
console.log(typeof x)

if( x!=0)// при x!==0 ікс буде порівнюватись з нулем як стрінга і буде вірно навіть при 0
console.log("Вірно");
else
    console.log("Невірно");

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt("Ведіть число 0-59")
    if (time <= 15 && time >= 0)
        console.log("Перша");
    else if (time <= 30)
            console.log("Друга");
    else if (time <= 45)
            console.log("Третя");
    else if (time < 60)
            console.log("Четверта");
    else console.log("Неправильне значення змінної");

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt("Введіть число 1-31");
if (day>=1 && day<=10) console.log("Перша декада");
else if (day<21) console.log("Друга декада");
else if (day <=31) console.log("Третя декада");
else console.log("Невірне число");


// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let dayNumber = +prompt("Введіть номер дня тижня");
switch (dayNumber){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default:
        console.log("Невірне число");
}

//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt("Число 1")
let num2 = +prompt("Число 2")
if (num1===num2) console.log("Числа однакові");
else if (num1>num2) console.log(`максимальне число ${num1}`)
else console.log(`максимальне число ${num2}`)

//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть
//     код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1 = prompt("Введіть щось");
 let x;
 if (x1) x=x1;
 else x = "default";
console.log(x)


//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration >5 ) console.log('Супер');
if(coursesAndDurationArray[1].monthDuration >5 ) console.log('Супер');
if(coursesAndDurationArray[2].monthDuration >5 ) console.log('Супер');
if(coursesAndDurationArray[3].monthDuration >5 ) console.log('Супер');
if(coursesAndDurationArray[4].monthDuration >5 ) console.log('Супер');
if(coursesAndDurationArray[5].monthDuration >5 ) console.log('Супер');

