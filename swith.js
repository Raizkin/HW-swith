// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
const a = Number(prompt("Виберить число зі списку: 1. Кава 2. Чай 3. Сік"));

switch (a) {
    case 1:
        console.log(`Ви вибрали каву`);
        break;
    case 2:
        console.log(`Ви вибрали чай`);
        break;
    case 3:
        console.log(`Ви вибрали сік`);
        break;
    default:
        console.log(`Помилка!`);
}

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.


const days = Number(prompt("Виберіть день числом: 1. Понеділок 2. Вівторок 3. Середа 4. Четвер 5. П'ятниця 6. Субота 7. Неділя"));
switch (days) {
    case 1:
        console.log("Ви вибрали робочий день :(");
        break;
    case 2:
        console.log("Ви вибрали робочий день :(");
        break;
    case 3:
        console.log("Ви вибрали робочий день :(");
        break; 
    case 4:
        console.log("Ви вибрали робочий день :(");
        break;
    case 5:
        console.log("Ви вибрали робочий день :(");
        break;
    case 6:
        console.log("Ви вибрали вихідний день :)");
        break;
    case 7:
        console.log("Ви вибрали вихідний день :)");
        break;
    default:
        console.log("Помилка!");
}

// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.


const month = Number(prompt("Виберіть місяц року: "));
switch (month) {
    case 1:
        console.log("Це зима");
        break;
    case 2:
        console.log("Це зима");
        break;
    case 3:
        console.log("Це весна");
        break;
    case 4:
        console.log("Це весна");
        break;
    case 5:
        console.log("Це весна");
        break;
    case 6:
        console.log("Урааа, літоо :)");
        break;
    case 7:
        console.log("Урааа, літоо :)");
        break;
    case 8:
        console.log("Урааа, літоо :)");
        break;
    case 9:
        console.log("Вже осінь");
        break;
    case 10:
        console.log("Вже осінь");
        break;
    case 11:
        console.log("Вже осінь");
        break;
    case 12:
        console.log("Це зима");
        break;
    default:
        console.log("Помилка!");
}


// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".


const color = Number(prompt("Введіть число: \n1. Червоний\n2. Зелений\n3. Жовтий"));
switch (color) {
    case 1:
        console.log("Стоп!");
        break;
    case 2:
        console.log("Йди!");
        break;
    case 3:
        console.log("Чекай!");
        break;
    default:
        console.log("Помилка!");
}


// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

// Я не розумію як робити  =(