//Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
// const arr = [3, 43, 19];
// arr[2]= 10
// console.log(arr[2])

//Створити масив із трьох рядків. Додати до масиву ще одну рядків.
// const programmingLanguage = ["css", "html", "js"];
// console.log(programmingLanguage)
// programmingLanguage.push("java")
// console.log(programmingLanguage)

//Створити скрипт який поверне суму всіх чисел в масиві.
// const numbers = [3, 43, 19];
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     sum += numbers[i]
// }
// console.log(sum);

//Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
// const nums = [54, 23, 10, 44, 87];
// for (let i = 0; i <= nums.length; i++ ){
//     console.log(nums[i])
// }

//Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
// const string = ["water", "love", "lemons", "you", "extracarbonated"]
// for (let i = 0; i < string.length; i++){
//     if (string[i].length > 5){
//         console.log(string[i])
//     }
// }

//Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
// const arrAll = [3, 23, 32, 64, 12, 74, 55, 98, 54, 1]
// let bigNumber = arrAll[0];
// for (let i = 0; i < arrAll.length; i++){
//     if (bigNumber < arrAll[i]){
//         bigNumber = arrAll[i]
//     }
// }
// console.log(bigNumber)
//Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const arrTwoo = [3, 23, 32, 64, 12, 74, 55, 97, 54, 1]
for (let i = 0; i < arrTwoo.length; i++) {
    if (arrTwoo[i] % 2 === 0) {
        console.log(arrTwoo[i]);
    }
}
