// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать это число. Если догадка пользователя больше случайного числа, то программа должна вывести сообщение 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то программа должна вывести сообщение 'Слишком мало, попробуйте еще раз'. Если пользователь угадывает число, то программа должна поздравить его и вывести сообщение 'Вы угадали, поздравляем!'.
// Составляющие проекта:
// Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; Бесконечный цикл; Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.

const numRandom = Math.floor(Math.random() * 100) + 1;

function checkGuess(num) {
    let value = +prompt('Try to guess the number! Enter value');
    let count = 1;

    while (value !== num) {
        if (value === num) {
            break;
        } else if (value < num) {
            alert('Too little, try again');
            count++;
            value = +prompt('Enter value');
            continue;
        } else {
            alert('Too much, try again');
            count++;
            value = +prompt('Enter value');
            continue;
        }
    }
    
    return `Congratulations, you guessed it! Number: ${value}! Number of moves: ${count}`;
}

checkGuess(numRandom);