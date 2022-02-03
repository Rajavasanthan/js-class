// Hoisting
// console.log(a);
// var a = 5;
// a = 10;


// // Non Blocking
// console.log("1. App Start");

// setTimeout(function(){
//     console.log("2.Read the excel sheet")
// },1000)

// console.log("Display the values")
// console.log("3.App End");

// // 132

// Callback
// function calAge(year,cb){
//     setTimeout(function(){
//         var age = new Date().getFullYear() - year;
//         cb(age)
//     },2000)
// }

// calAge(1970,function(result){
//     console.log(result)
// })


function calAge(year) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var age = new Date().getFullYear() - year;
            resolve(age)
        }, 2000)
    })
}

// calAge(1970)
// .then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })

// async function getAge(){
//     try {
//         await calAge(1970)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Javascript is not Typesafty

function convertToString(value) {
    if (typeof value == 'string' && value !== undefined && value !== "") {
        return value.toUpperCase()
    } else {
        return "Error"
    }
}

var res = convertToString()
if (res == 'Error') {
    alert("Error")
} else {
    console.log(res)
}

// Senior
// Runtime Error

