// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [];
 arr[0]=1;
 arr[1]=1;
 arr[2]=1;
 arr[3]=2;
 arr[4]=2;
 arr[5]=5;
 arr[6]=0;
 arr[7]=2;
 arr[8]=2;
 arr[9]=2;
for (let i = 0; i < 10; i++) {
    console.log(arr[i])
}
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: "Переслідування Аделіни",
    pageCount: 566,
    genre: "дарк роман"
}

let book2 = {
    title: "Книжка",
    pageCount: 888,
    genre: "роман"
}

let book3 = {
    title: "pank57",
    pageCount: 761,
    genre: "для підлітків"
}
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1_2 = {
    title: "Переслідування Аделіни",
    pageCount: 566,
    genre: "дарк роман",
    authors: [
        author1 = {
            name: "name1",
            age: 33
        },
        author2 = {
            name: "name2",
            age: 31
        }

    ]
}

let book2_2 = {
    title: "Книжка",
    pageCount: 888,
    genre: "роман",
    authors: [
        author1 = {
            name: "vova",
            age: 56

        },
        author2 = {
            name: "kostya", age: 89
        }
    ]
}

let book3_2 = {
    title: "pank57",
    pageCount: 761,
    genre: "для підлітків",
    authors: [
        author1 = {
            name: "oleg", age: 22
        },
        author2 = {
            name: "jon", age: 57
        }
    ]
}

//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [];
users[0] = {
    name: "vika", username: "vika1", password: "1234567890"
}
users[1] = {
    name: "olua", username: "ola5", password: "ffffffff"
}
users[2] = {
    name: "nik", username: "nik777", password: "123efcxas"
}
users[3] = {
    name: "titil", username: "titil999", password: "mmmm5757"
}
users[4] = {
    name: "somebody", username: "smb677", password: "vyrd67757"
}

users[5] = {
    name: "nastya", username: "nastyqwwr", password: "1234567"
}
users[6] = {
    name: "bogdan", username: "bodya111", password: "n189nnalfa"
}
users[7] = {
    name: "kolya", username: "kp1111", password: "plmmoqmda"
}
users[8] = {
    name: "svyta", username: "sv11111", password: "130872n"
}
users[9] = {
    name: "vlad", username: "vlad56", password: "9065fbk"
}
for (const user of users) {
    console.log(user.password)
}

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний
// масив з 21 значенням вичключаємо одразу


let weather = [

    day1 = {
        morning: 27, afternoon: 29, evening: 30
    }
    ,
    day2 = {
        morning: 27, afternoon: 29, evening: 30
    }
    ,
    day3 = {
        morning: 27, afternoon: 29, evening: 30
    }

    ,
    day4 = {
        morning: 27, afternoon: 29, evening: 30
    }

    ,
    day5 = {
        morning: 27, afternoon: 29, evening: 30
    }
    ,

    day6 = {
        morning: 27, afternoon: 29, evening: 30
    }
    ,
    day7 = {
        morning: 27, afternoon: 29, evening: 30
    }


]

