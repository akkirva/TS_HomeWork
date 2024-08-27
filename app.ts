// 1. 
// enum Status {
//     Pending = "pending",
//     In_progress = "in-progress",
//     Completed = "completed",
//   }

// type User = {
//     name: string;
//     age: number;
//     status: Status;
// }

// function updateStatus( { user }, { status } ) : User {
//     user.status = status;
//     return user;
// }

// 2.
// enum HttpMethod  {
//     Get = "GET", 
//     Post = "POST", 
//     Put = "PUT", 
//     Delete = "DELETE"
// }

// type Request1 = {
//     method: HttpMethod;
//     url: string;
//     body?: any;
// }

// function makeRequest({ request }) : Request1 {
//     return request;
// }
// const request = makeRequest({
//     method: HttpMethod.Post,
//     url: 'https://google.com',
// })
// console.log(request); // { method: 'POST', url: 'https://google.com' }

// 3. Generics
function logValue<T>(number: T) {
    console.log(number);
}
logValue('jhjhj') // "jhjhj"
logValue(45) // 45
logValue(true) // true

//4.1 Partial и Required
type UserPP = {
    name: string;
    age: number;
    email: string;
}
const user1: Partial<UserPP> = {
    name: 'John',
    age: 36
}
console.log(user1); // { name: 'John', age: 36 }

const user2: Required<UserPP> = {
    name: 'John',
    age: 36,
    email: 'akatova_i@mail.ru'
}
console.log(user2); //{ name: 'John', age: 36, email: 'akatova_i@mail.ru' }

// 4.2 Pick и Omit
const user3: Pick<UserPP, 'name' | 'age'> = {
    name: 'John',
    age: 40
}

const user4: Omit<UserPP, 'email'> = {
    name: 'Ivan',
    age: 38
}

// 4.3 Readonly
// type  User5  {
//     name: string,
// }
// const user5: Readonly<User5> = {
//     name: "Peter"
// }
// user5.name = 'Ivan' // Cannot assign to 'name' because it is a read-only property

// 4.4 Record
const user8 = {
    name: 'Tray',
    age: 40,
    email: 'aaaaaaaa'
}
const user9 = {
    name: 'Tray2',
    age: 45,
    email: 'bbbbbbb'
}

type UserRecord = Record<string, UserPP>
    const users: UserRecord = {
        admin: user8,
        uest: user9
}

// 5 Typeof
let myString = 'Hello';
type ResultType = typeof myString;

console.log(myString) //"Hello" 