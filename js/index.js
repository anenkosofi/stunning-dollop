// Задача 1
// Ви повинні реалізувати функцію, яка повертає різницю між
// найбільшим та найменшим значенням у списку, отриманому як аргумент
// функції. Масив, який отримує функцію як аргумент, може містити позитивні
// та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
// Спочатку масив буде поданий у невідсортованому вигляді.
// getMaxMinDifference([1, 2, 3, -4]); // поверне 7, тому що: 3 - (-4) == 7
// getMaxMinDifference([16]) => 0

const getMaxMinDifference = array => {
  if (!array.length || array.length === 1) return 0;
  const max = Math.max(...array);
  const min = Math.min(...array);
  return max - min;
};

console.log(getMaxMinDifference([1, 2, 3, -4]));
console.log(getMaxMinDifference([1]));
console.log(getMaxMinDifference([]));

// Задача 2
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.

const filterWordsByLength = (string, number) =>
  string.match(/[\p{L}\p{N}']+/gu).filter(word => word.length > number);

console.log(
  filterWordsByLength(
    'Поверніть у вигляді масиву тільки ті слова, довжина яких перевищує число.',
    5
  )
);

// Задача 3
// Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
// doesEndWithString('abc', 'bc') => true
// doesEndWithString('abc', 'd') => false

const doesEndWithString = (string, end) => string.endsWith(end);

console.log(doesEndWithString('abc', 'bc'));
console.log(doesEndWithString('abc', 'd'));

// Задача 4

// Напишіть функцію, яка отримує масив цілих чисел і повертає масив
// середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// getAverageAdjacentPairs([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// getAverageAdjacentPairs([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

const getAverageAdjacentPairs = array =>
  array.slice(0, -1).map((value, index) => (value + array[index + 1]) / 2);

console.log(getAverageAdjacentPairs([2, -2, 2, -2, 2]));
console.log(getAverageAdjacentPairs([1, 3, 5, 1, -10]));

// Задача 5.1
// Створіть функцію, яка приймає рядок і повертає кількість голосних, які
// у ній.
// Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1

const countVowels = string => string.match(/[aeiou]/gi).length;

console.log(countVowels('Celebration'));
console.log(countVowels('Palm'));

// Задача 5.2
// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
// Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd"
// removeABC("hello world!") ➞ null

const removeABC = string => (string.match(/[abc]/gi) ? string.replace(/[abc]/gi, '') : null);

console.log(removeABC('This might be a bit hard'));
console.log(removeABC('hello world!'));

// Задача 6

// Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
// (Set не використовувати:))
// Приклад:
// getUniqueElements([1, 2, 3], [100, 2, 1, 10]);
// ["1", "2", "3", "10", "100"]

const getUniqueElements = (firstArray, secondArray) =>
  [...firstArray, ...secondArray].filter((value, index, array) => array.indexOf(value) === index);

console.log(getUniqueElements([1, 2, 3], [100, 2, 1, 10]));

// Задача 7
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.
// Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

const invertObject = obj =>
  Object.entries(obj).reduce((invertedObj, [key, value]) => {
    invertedObj[value] = key;
    return invertedObj;
  }, {});

console.log(invertObject({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }));

// Задача 8
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
// Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.
// Приклад:
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
// Обмеження: Об'єкт завжди повинен містити елементи, сума предметів
// завжди повинна бути більшою за страховку.

const calculateDifference = (obj, number) => {
  if (!Object.keys(obj).length) return;
  const sum = Object.values(obj).reduce((acc, value) => acc + value, 0);
  if (sum <= number) return;
  return sum - number;
};

console.log(calculateDifference({ 'baseball bat': 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// Задача 9
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
// (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
// шириною (w) та висотою (h).
// Приклад:
// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false
// Обмеження:
// Цеглу можна повернути будь-якою стороною до отвору.
// Ми припускаємо, що цегла підходить, якщо її розміри дорівнюють
// розмірам отвору (тобто розмір цегли повинен бути меншим або дорівнює
// розміру отвору, не строго менше).

// Цегла не можна класти під неортогональним кутом.

const doesBrickFit = (a, b, c, w, h) => {
  const brickDimensions = [
    [a, b],
    [b, a],
    [a, c],
    [c, a],
    [b, c],
    [c, b],
  ];
  const holeDimensions = [w, h];
  return brickDimensions.some(
    ([firstSide, secondSide]) => firstSide <= holeDimensions[0] && secondSide <= holeDimensions[1]
  );
};

console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));

// Задача 10
// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
// \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.

const extractFileName = file => {
  const slashIndex = file.lastIndexOf('\\');
  return file.substring(slashIndex + 1, file.indexOf('.', slashIndex));
};

console.log(extractFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// Задача 11
// Дано два рядки. Чи можна перший рядок отримати з другого циклічним
// зрушенням?

const isCyclicShift = (firstString, secondString) => {
  return (
    firstString.length == secondString.length &&
    (secondString + secondString).indexOf(firstString) !== -1
  );
};

console.log(isCyclicShift('ABCDEF', 'DEFABC'));
console.log(isCyclicShift('ABCDEF', 'CDEFAB'));

// Задача 12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.

const splitArray = array =>
  array
    .sort((a, b) => a - b)
    .reduce(
      (acc, num, index) => {
        if (index % 2 === 0) {
          acc.b.push(num);
        } else {
          acc.c.push(num);
        }
        return acc;
      },
      { b: [], c: [] }
    );

console.log(splitArray([1, 2, 3, 4, 5, 9, 6, 8, 7, 11]));

// Задача 13
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
// Якщо кількість символів в отриманому рядку буде більшою, ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.

const processString = string => {
  const newString = string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .map(word => word.replace(/(http|https):\/\/[^\s]+/gi, '[посилання заборонено]'))
    .map(word =>
      word.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi, '[контакти заборонені]')
    )
    .filter(word => !(word.length > 3 && /^\d+$/.test(word)))
    .join(' ');

  if (newString.length > string.length) {
    setInterval(() => {
      alert('Do you need help?', '');
    }, 5000);
  }

  return newString;
};

// console.log(processString('Hello World http://example.com email@example.com 123456 789 abcdefg'));

// Задача 14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
// що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

const text = '([{}])()';
const rootElement = document.getElementById('root');
const isBalanced = checkParenthesesBalance(text);

if (isBalanced) {
  rootElement.innerHTML = text;
}

// Disable text selection
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });
});

document.oncontextmenu = function () {
  return false;
};

function checkParenthesesBalance(text) {
  const stack = [];
  const openBraces = ['(', '{', '['];
  const closingBraces = [')', '}', ']'];

  for (const char of text.split('')) {
    if (openBraces.includes(char)) {
      stack.push(char);
    }
    if (closingBraces.includes(char)) {
      if (!stack.length) {
        return false;
      }
      const lastChar = stack.pop();
      if (openBraces.indexOf(lastChar) !== closingBraces.indexOf(char)) {
        return false;
      }
    }
  }
  return !stack.length;
}

// Задача 15
// Написати функцію, яка генерує пароль для користувача. Вимоги:
// довжина від 6 до 20 символів повинен бути рівно один символ підкреслення,
// хоча б дві великі літери, не більше 5 цифр, будь-які дві цифри поспіль
// неприпустимі.

const generatePassword = () => {
  const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
  const invalidPairs = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99'];

  let password = '';
  const length = Math.floor(Math.random() * 15) + 6; // Випадкова довжина від 6 до 20 символів

  let uppercaseCount = 0;
  let digitCount = 0;
  let underscoreCount = 0;

  for (let i = 0; i < length; i++) {
    const randomChar = validChars[Math.floor(Math.random() * validChars.length)];
    password += randomChar;

    if (/[A-Z]/.test(randomChar)) {
      uppercaseCount++;
    } else if (/\d/.test(randomChar)) {
      digitCount++;
    } else if (randomChar === '_') {
      underscoreCount++;
    }

    // Перевірка неприпустимих пар цифр
    if (invalidPairs.includes(password.slice(-2))) {
      password = password.slice(0, -2); // Видалення останніх двох символів
      i -= 2;
    }

    // Перевірка кількості цифр
    if (digitCount > 5) {
      password = password.replace(/\d/, ''); // Видалення першої знайденої цифри
      digitCount--;
      i--;
    }

    // Перевірка кількості підкреслень
    if (underscoreCount > 1) {
      password = password.replace(/_/, ''); // Видалення першого знайденого підкреслення
      underscoreCount--;
      i--;
    }

    // Перевірка кількості великих літер
    if (uppercaseCount > 2) {
      password = password.replace(/[A-Z]/, ''); // Видалення першої знайденої великої літери
      uppercaseCount--;
      i--;
    }
  }

  // Додавання символу підкреслення
  if (underscoreCount === 0) {
    const randomIndex = Math.floor(Math.random() * password.length);
    password = password.slice(0, randomIndex) + '_' + password.slice(randomIndex);
  }

  return password;
};

console.log(generatePassword());

// Задача 16
// В заданому масиві найменший елемент помістити на перше місце,
// найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву.

const rearrangeArray = array => {
  const leftArray = [];
  const rightArray = [];

  array.sort((a, b) => a - b);

  array.map((value, index) =>
    index % 2 === 0 ? leftArray.push(value) : rightArray.unshift(value)
  );

  return [...leftArray, ...rightArray];
};

console.log(rearrangeArray([1, 6, 4, 8, 9, 2, 3, 5, 7]));

// Задача 17
// Напишіть функцію, яка приймає рядок та повертає новий рядок,
// відсортований за частотою появи символів. Символи з більшою частотою
// повинні йти раніше за символи з меншою частотою. Використовуйте методи
// роботи з рядками, об'єктами та сортуванням для вирішення задачі.

const sortStringByFrequency = str => {
  const charFrequency = [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const sortedChars = Object.keys(charFrequency).sort((a, b) => {
    return charFrequency[b] - charFrequency[a];
  });

  const sortedString = sortedChars.reduce((acc, char) => {
    return acc + char.repeat(charFrequency[char]);
  }, '');

  return sortedString;
};

console.log(sortStringByFrequency('abracadabra'));

// Задача 18
// Дано два рядки. Напишіть функцію, яка знаходить найбільший
// загальний підрядок у цих рядках. Підрядок може містити лише послідовні
// символи (без пробілів). Використовуйте методи роботи з рядками та
// алгоритми пошуку для вирішення задачі.

const findLongestCommonSubstring = (firstString, secondString) => {
  const n = firstString.length;
  const m = secondString.length;

  const dp = Array(2)
    .fill()
    .map(() => Array(m + 1).fill(0));

  let commonSubstring = '';

  let endIndex = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (firstString.charAt(i - 1) === secondString.charAt(j - 1)) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
        if (dp[i % 2][j] > dp[i % 2][endIndex]) endIndex = j;
      } else {
        dp[i % 2][j] = 0;
      }
    }
  }

  if (endIndex > 0) {
    commonSubstring = secondString.slice(endIndex - dp[n % 2][endIndex], endIndex);
  }

  return commonSubstring;
};

const firstString = 'Hello, world!';
const secondString = 'Welcome to the world!';
console.log(findLongestCommonSubstring(firstString, secondString));

// Задача 19
// Напишіть функцію, яка приймає рядок та число зсуву та повертає
// зашифровану версію рядка за допомогою шифру Цезаря. Кожна літера у
// вихідному рядку має бути замінена на літеру, що знаходиться на заданій
// кількості позицій вперед в алфавіті. Використовуйте методи роботи з рядками
// та масивами для вирішення задачі.

const caesarCipher = (string, shift) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Алфавіт
  const length = alphabet.length;

  // Перетворення зсуву від'ємного числа в позитивне
  shift = ((shift % length) + length) % length;

  const chars = string.split('');

  let encryptedString = '';

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (char.match(/[a-z]/i)) {
      const charIndex = alphabet.indexOf(char.toLowerCase());

      const encryptedIndex = (charIndex + shift) % length;
      const encryptedChar = alphabet[encryptedIndex];

      encryptedString += char === char.toLowerCase() ? encryptedChar : encryptedChar.toUpperCase();
    } else {
      encryptedString += char;
    }
  }

  return encryptedString;
};

console.log(caesarCipher('hello world', 3));

// Задача 20
// Напишіть функцію, яка приймає два рядки та перевіряє, чи є вони
// анаграмами (чи мають однакові символи у різному порядку). Функція
// повинна повернути true, якщо рядки є анаграмами, і false інакше.
// Використовуйте методи роботи з рядками для вирішення задачі.

const areAnagrams = (firstString, secondString) => {
  const formattedFirstString = firstString.replace(/\s/g, '').toLowerCase();
  const formattedSecondString = secondString.replace(/\s/g, '').toLowerCase();

  const sortedFirstString = [...formattedFirstString].sort((a, b) => a.localeCompare(b)).join('');
  const sortedSecondString = [...formattedSecondString].sort((a, b) => a.localeCompare(b)).join('');

  return sortedFirstString === sortedSecondString;
};

console.log(areAnagrams('I am Lord Voldemort', 'Tom Marvolo Riddle'));

// Задача 21
// Створіть об'єкт "Університет" з методами для додавання студента,
// видалення студента, отримання інформації про студента за його
// ідентифікатором та отримання списку студентів певного курсу. Реалізуйте
// також функцію, яка дає змогу отримати список студентів певного факультету.
// Використовуйте об'єкти та їх методи для вирішення задачі.

const university = {
  students: [],

  addStudent: function (student) {
    this.students.push(student);
  },

  removeStudent: function (studentID) {
    this.students = this.students.filter(student => student.id !== studentID);
  },

  getStudentInfo: function (studentID) {
    const student = this.students.find(student => student.id === studentID);
    if (student) {
      return student;
    }
    return 'Student not found';
  },

  getStudentsByCourse: function (course) {
    return this.students.filter(student => student.course === course);
  },

  getStudentsByFaculty: function (faculty) {
    return this.students.filter(student => student.faculty === faculty);
  },
};

university.addStudent({ id: 1, name: 'John', course: 2, faculty: 'Engineering' });
university.addStudent({ id: 2, name: 'Alice', course: 1, faculty: 'Computer Science' });
university.addStudent({ id: 3, name: 'Bob', course: 3, faculty: 'Engineering' });

console.log(university.getStudentInfo(2));
console.log(university.getStudentsByCourse(2));
console.log(university.getStudentsByFaculty('Engineering'));
university.removeStudent(1);
console.log(university.students);

// Задача 22
// Напишіть програму, яка аналізує текст та виводить статистику про
// кількість слів, речень та символів у тексті. Реалізуйте також функцію, яка
// визначає слова, що найчастіше зустрічаються в тексті. Використовуйте
// методи роботи з рядками, регулярні вирази та об'єкти для вирішення задачі.

const analyzeText = text => {
  const words = text.match(/[\p{L}\p{N}']+/gu).length;
  const sentences = text.split(/[.!?]+/).map(sentence => sentence.trim()).length - 1;
  const characters = text.replace(/\s+/g, '').length;

  return {
    words,
    sentences,
    characters,
  };
};

const findMostFrequentWords = text => {
  const words = text.toLowerCase().match(/[\p{L}\p{N}']+/gu);

  const wordCount = words.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
  }, {});

  const maxCount = Object.values(wordCount).reduce((max, count) => {
    return count > max ? count : max;
  }, 0);

  const mostFrequentWords = Object.keys(wordCount).filter(word => wordCount[word] === maxCount);

  return mostFrequentWords;
};

console.log(
  analyzeText(
    "Напишіть програму, яка аналізує текст та виводить статистику про кількість слів, речень та символів у тексті. Реалізуйте також функцію, яка визначає слова, що найчастіше зустрічаються в тексті. Використовуйте методи роботи з рядками, регулярні вирази та об'єкти для вирішення задачі."
  )
);
console.log(
  analyzeText(
    'The quick brown fox jumps over the lazy dog. The dog barks at the moon. Foxes are cunning animals.'
  )
);

console.log(
  findMostFrequentWords(
    'The quick brown fox jumps over the lazy dog. The dog barks at the moon. Foxes are cunning animals.'
  )
);
