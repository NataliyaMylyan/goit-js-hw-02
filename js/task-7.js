const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  const result = login.length >= 4 && login.length <= 16 ? true : false;
  return result;
};

const isLoginUnique = function (allLogins, login) {
  const result = allLogins.includes(login);
  return result;
};

const addLogin = function (allLogins, login) {
  let message = "Логин успешно добавлен!";

  if (!isLoginValid(login)) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (isLoginUnique(allLogins, login)) {
    message = "Такой логин уже используется!";
  } else {
    allLogins.push(login);
    message = "Логин успешно добавлен!";
  }

  return message;
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

//ВАРІАНТ 2 (Тернарний оператор)

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   const result = login.length >= 4 && login.length <= 16 ? true : false;
//   return result;
// };

// const isLoginUnique = function (allLogins, login) {
//   const result = allLogins.includes(login);
//   return result;
// };

// const addLogin = function (allLogins, login) {
//   let message = "Логин успешно добавлен!";

//   if (!isLoginValid(login)) {
//     message = "Ошибка! Логин должен быть от 4 до 16 символов";
//   } else {
//     isLoginUnique(allLogins, login)
//       ? (message = "Такой логин уже используется!")
//       : allLogins.push(login);
//   }

//   return message;
// };

// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
