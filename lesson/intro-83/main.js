// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).


// const user = {

//         name: 'Otabek',
//         age: 26,
//         city: 'Perm'
//     }

//     console.log(user.name)



// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.


// const users = {

//     john: {
//         age: 26,
//         isAdmin: true,
//         sayHello(name)  {
//             console.log(`Hello ${name}`)
//         }
//         }
//     }


//     console.log(users.john)   
//     users.john.sayHello('tom')






const users = [
{
        name: 'Otabek',
        age: 26,
        isAdmin: false
},
{
        name: 'John',
        age: 26,
        isAdmin: false
},
{
        name: 'Ali',
        age: 26,
        isAdmin: false
},
{
        name: 'Aex',
        age: 26,
        isAdmin: true
}
]


for (let i = 0; i < users.length; i++) {
        console.log(users[i].isAdmin)
}