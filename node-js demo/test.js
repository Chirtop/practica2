const arr =["mere","pere","struguri","hamei"]
const upperCase = arr.map(fruit => fruit.toUpperCase())
console.log(upperCase);

const arr2 = [...arr,"Cirese"]
console.log(arr2)

const obj = {
    nume: "Ionel",
    prenume: "Gigel",
    varsta: 25
}

const {varsta} = obj;


const obj2 = {
    ...obj,
    laptop:"acer"
}

const users = [
    {
        nume:"Chirtop", 
        prenume:"Catalin",
        varsta: 25
    },
    {
        nume: "Ionel",
        prenume:"Gigel",
        varsta:23
    }
]

users[0] = {
    ...users[0],
    credentiale:{
        username:"asdas",
        password:"parola"
    }
}

users.map(user => {
    user.nume += " aopskdoaskdo"
    user.varsta += 10
})



console.log(users)