// Дз

// Макет Blog(Modest) - шапку і перший розділ зверстати 
//     через flexbox - адаптивно




// Завдання 1. Порахувати суму елементів в довільному 
//     числовому масиві

// let arr = [1, 2, 5, 7, 8, 9, 54, 78];

// function sum(array) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         counter += array[i]
//     }
//     console.log(counter);
// }

// sum(arr);
// Завдання 2. Визначити найбільше/найменше число в 
//     довільному числовому масиві

// let arr1 = [1, 5, 8, 4, 58, 68, 955, 742, 18882]

// function MaxNumber(array) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     console.log(max)
// }

// MaxNumber(arr1);

// function MinNumber(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]
//         }
//     }
//     console.log(min)
// }

// MinNumber(arr1);


// Завдання 3. Запитати у користувача кількість категорій
//  витрат за минулий місяць, запитати які це категорії 
//  і скільки коштів на них було витрачено і записати все 
//  це у об'єкт. Написати функцію яка вирахує загальну суму 
//  всіх витрат. Результат вивести повідомленням (За минулий 
//  місяць Ви витратили … грн), потрібно зробити перевірку
//  щоб користувач не міг відмінити(cancel в prompt)
//  чи ввести пустий рядок у полях витрат.

// let expensesMonth = +prompt("Вкажіть к-сть категорій витрат", "");

// let expenses = {};

// for (let i = 0; i < expensesMonth; i++) {
//     let expensesKey = prompt("Які це категорії?", "");
//     let expensesValue = +prompt("Скiльки коштів ви потратили?", "");
//     if (typeof (expensesValue) !== number) {
        
//     }

//     expenses[expensesKey] = expensesValue;
// }
// console.log(expenses);

// let counter = 0;
// for (let key in expenses) {
//     counter += expenses[key]
// }

// console.log(counter);
