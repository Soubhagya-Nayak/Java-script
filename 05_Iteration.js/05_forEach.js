const coding = ["js", "ruby", "java", "python", "cpp"]

// 1.
coding.forEach(function (val){
    // console.log(val);
})

// 2.
coding.forEach((val) => {
    // console.log(val);
})

// 3.
function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe)

// 4.
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

// 5.
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
]
myCoding.forEach((item) => {
    // console.log(item.languageName);
})