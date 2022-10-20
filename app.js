// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать это число. Если догадка пользователя больше случайного числа, то программа должна вывести сообщение 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то программа должна вывести сообщение 'Слишком мало, попробуйте еще раз'. Если пользователь угадывает число, то программа должна поздравить его и вывести сообщение 'Вы угадали, поздравляем!'.
// Составляющие проекта:
// Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; Бесконечный цикл; Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.

class Guess {
    constructor() {
        this.start = 1;
        this.end = 100;
        this.middle = Math.floor((this.start + this.end) / 2);
        this.counter = 1;
        this.startGame();
    }

    startGame() {
        let question = prompt('Are you ready to play the game? Answer yes or no and guess the number from 1 to 100!');

        for (; ;) {
            if (question === 'yes') {
                alert(`Great, let's get started!`);
                this.guessTheNumber();
                break;
            } else if (question === 'no') {
                alert('OK... Come another time');
            } else {
                question = prompt('You can answer only yes or no!');
            }
        }
    }

    guessTheNumber() {
        for (; ;) {
            let answer = prompt(`Your number is ${this.middle}? (yes or no)`);
            
            if (answer === 'yes') {
                alert(`Super! I guessed! Your number is ${this.middle}! I used ${this.counter} tries!`);
                break;
            } else if (answer === 'no') {
                this.counter++;
                answer = prompt(`Is your number more or less than ${this.middle}? Answer + or -`);
                if (answer === '+') {
                    this.start = this.middle + 1;
                    this.middle = Math.floor((this.start + this.end) / 2);
                } else if (answer == '-') {
                    this.end = this.middle - 1;
                    this.middle = Math.floor((this.start + this.end) / 2);
                } 
            } 
        }
    }
}

const guess = new Guess();