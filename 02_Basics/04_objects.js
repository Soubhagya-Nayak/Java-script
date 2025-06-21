const tinderUser = {}
tinderUser.Id = "Soubhagya Nayak"
tinderUser.email = "nayaksoubhagya@gmail.com"
tinderUser.followers = 1234
// console.log(tinderUser)


const regularUser = {
    email: "nayaksoubhagya@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Soubhagya",
            lastname: "Nayak"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj3 = {obj1, obj2, obj4}
const obj5 = Object.assign({}, obj1, obj2, obj4)
const obj6 = {...obj1, ...obj2, ...obj4} // -> 90% of the time we use this
// console.log(obj3);
// console.log(obj5);
// console.log(obj6); // -> Best


const users = [
    {
        id: 1,
        email: "nayaksoubhagya@gmail.com"
    },
    {
        id: 1,
        email: "nayaksoubhagya@gmail.com"
    },
    {
        id: 1,
        email: "nayaksoubhagya@gmail.com"
    },
    {
        id: 1,
        email: "nayaksoubhagya@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    cousename: "JS in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor // -> Without using dot anotaion accessing courseInstructor
// technique 1
const {courseInstructor} = course
console.log(courseInstructor);

// technique 2
const {courseInstructor: instructor} = course
console.log(instructor);

