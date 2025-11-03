// const user = {
//     name: 'Alex' ,
//     age: 23,
//     isAdmin: false
// }

// console.log(user.name)





// const users = {
//     alex: {
//         age: 23, 
//         isAdmin: false
//     }, 
//     John: {
//         age: 20, 
//         isAdmin: true, 
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.John)
// users.John.sayHello('Tom')


const users = [
    {
        name: 'alex',
        age: 23, 
        isAdmin: false
    },
    {
        name: 'john' ,
        age: 30,
        isAdmin: true
    }
]


for (let i = 0; i < users.length; i++) {
    console.log(users[i].age)
}