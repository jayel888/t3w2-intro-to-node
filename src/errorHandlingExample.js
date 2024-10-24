// try, catch, throw, finally

// try {
//     // experimentation or execution
//     // throw some error message
// }
// catch {
//     // statements
// }
// finally {
//     // Always runs
// }

try {
    let a = 15, b = 0;
    if (b === 0) {
        // throw "Trying to divide by zero...";
        throw new Error("New error: Division by zero!")
    }
    // console.log("this will not print")
} catch (error) {
    console.error("Cannot divide by zero!!");
    console.log(error);
} finally {
    console.log("I always run")
}