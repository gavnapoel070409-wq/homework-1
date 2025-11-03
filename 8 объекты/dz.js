
// 1)
// const ya = {
//     ruslan: {
//     age: 17,
//     loh: true,
//     sayHello(name) {
//         console.log(`Hello ${name}`)
//     }
// }
// }

// console.log(ya.ruslan)
// ya.ruslan.sayHello('Lox')



// 2)
const users = [
    {
        name: 'alex',
        age: 23, 
        isAdmin: false
    },
    {
        name: 'gad',
        age: 2, 
        isAdmin: false
    },
    {
        name: 'john' ,
        age: 30,
        isAdmin: true
    }
]

let simpleUsers = 0

for (let i = 0; i < users.length; i++) {
    if(users[i].isAdmin === false) {
        simpleUsers++;
    }
}


console.log(simpleUsers)

