// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ms) {
//                 resolve("Success!!");
//             } else {
//                 reject("Error!");
//             }
//         }, ms);
//     });
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));


// DZ\1

// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];

//   const toggleUserState = (allUsers, userName) => {
//     return new Promise(() => {
//       const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//       );
//       console.log(updatedUsers);
// }) 
//     };
  
//   const logger = updatedUsers => console.table(updatedUsers);

//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);
  

// DZ/2

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const makeTransaction = (transaction) => {
//   return new Promise((onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
//       if (canProcess) {
//         onSuccess(transaction.id, delay);
//       } else {
//         onError(transaction.id);
//       }
//     }, delay);
//   });
//   }
// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };
// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);
// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);
// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);
// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);

// 2

// function num(nums) {
//   return new Promise((resolve, reject) => {
//       if (nums.every(numb => numb % 2 === 0)) {
//       resolve('Всі числа є парними!')
//       } else {
//           reject('Якесь число непарне')
//       }
//   })
// }

// let arr = [1, 2, 4, 6, 8, 10]

// num(arr)
// .then((message) => {
//   console.log(message);
// })
// .catch((error) => {
//   console.error(error);
// })

// 3

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//       const image = new Image();

//       image.onload = function() {
//           resolve(image);
//       };

//       image.onerror = function() {
//           reject('Failed to load image.');
//       };

//       image.src = url;
//   });
// }

// const imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fuk.wikipedia.org%2Fwiki%2F%25D0%25A3%25D1%258F%25D0%25B2%25D0%25BD%25D0%25B5_%25D0%25B7%25D0%25BE%25D0%25B1%25D1%2580%25D0%25B0%25D0%25B6%25D0%25B5%25D0%25BD%25D0%25BD%25D1%258F&psig=AOvVaw3NfCkkZerBm-oKSshgEIKw&ust=1708010971299000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICznu2Sq4QDFQAAAAAdAAAAABAE';
// loadImage(imageUrl)
//   .then((image) => {
//       console.log('Image loaded successfully:', image);
//   })

// 4
// const people = [
//   { name: "John", age: 25 },
//   { name: "Anna", age: 30 },
//   { name: "Peter", age: 40 },
//   { name: "Mary", age: 35 },
// ];

// function sortPeopleNames(peopleArray) {
//   return new Promise((resolve, reject) => {
//       const sortedNames = peopleArray.map(person => person.name).sort();
//       if (sortedNames) {
//           resolve(sortedNames);
//       } else {
//           reject(":(");
//       }
//   });
// }

// sortPeopleNames(people)
//   .then(sortedNames => console.log("Відсортовані імена:", sortedNames))
//   .catch(error => console.error("Помилка:", error));

// 5

// function sumA(num1, num2) {
//   return new Promise((resolve, reject) => {
//       if (typeof num1 === 'number' && typeof num2 === 'number') {
//           const sum = num1 + num2;
//           resolve(sum); 
//       } else {
//           reject("Неправильні аргументи"); 
//       }
//   });
// }


// sumA(2, 5)
//   .then(result => console.log("Результат додавання:", result))
//   .catch(error => console.error("Помилка:", error));

// sumA("a", 5)
//   .then(result => console.log("Результат додавання:", result))
//   .catch(error => console.error("Помилка:", error));

// 6

// function delayA(mls) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(mls) {
//         resolve('Trueeee');
//        } else {
//         reject(':-(')
//        }
//       }, mls)
//     })
// } 

// delayA(5000).then(cons => console.log(cons));

// 7

// function getPromise(s) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (s) {
//         resolve(':-)');
//       } else {
//         reject('(');
//       }
//     }, s);
//   });
// }

// getPromise(2000)
//   .then(co => {
//     console.log(co);
//     return co;
//   })
//   .catch(con => {
//     console.log(con);
//     return Promise.resolve('Default value');
//   })
//   .then(conso => {
//     console.log(conso);
//   })
//   .catch(error => {
//     console.error('Помилка:', error);
//   });

// 8

// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     let a;
//     if (typeof a === Number) {
//       resolve('Not failed');
//     } else {
//       reject('Failed');
//     }
//    }, 2000);
// })
// .then(notErr => console.log(notErr))
// .catch(error => console.error(error))
// .finally(console.log("Do succesful"));
