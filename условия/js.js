// // задание 1
// const evenNumber = prompt('Введите число')
// if (evenNumber % 2 === 0) {
//     alert('дарить такой букетик нельзя')
// } else {
//     alert('такой можно и подарить')
// }

// // Задание 2

// let age = +prompt("Введите паспортный возраст")
// let discount = 0

// switch (true) {
//     case (age < 18):
//         discount = 10
//         console.log(`Скидка ${discount}%`)
//         break
//     case (age >= 18 && age <= 65):
//         discount = 20
//         console.log(`Скидка ${discount}%`)
//         break
//     case (age > 65):
//         discount = 30
//         console.log(`Скидка ${discount}%`)
//         break
//     default:
//         console.log('Введите возраст')
//         break
// }


// // Задние 3

// const username =  prompt ('Введите имя пользователя')
// const password = prompt ('Введите пароль')

// if (username == "adnin" || username == "user" && password == 777) {
//     console.log("ПРОХОДИ!")
// } else {
//     console.log("УХОДИ")
// }


// Задание 4 

// let boxWeight = +prompt("Введите вес поссылки")
// let boxType = prompt("Введите тип посылки")
// let basePrice = 0
// let ratio = 0

// if (boxWeight <= 0) {
//     alert("Некоректный вес посылки")
// } else if (boxType !== "стандарт" && boxType !== "премиум" && boxType !== "экспресс") {
//     alert("Неверный тип посылки")
// } else if (boxWeight < 1) {
//     basePrice = 5
// } else if (boxWeight >= 1 && boxWeight <= 5) {
//     basePrice = 10
// } else if (boxWeight > 5) {
//     basePrice = 15
// }

// switch (true) {
//     case (boxType === "стандарт"):
//         ratio = 1
//         break
//     case (boxType === "экспресс"):
//         ratio = 1.5
//         break
//     case (boxType === "премиум"):
//         ratio = 2
//         break
// }

// let price = basePrice * ratio
// let lastPrice = alert(`Итоговая стоимость доставки: ${price}$`)